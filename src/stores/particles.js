import { writable } from 'svelte/store';
import { Vector3 } from 'three';

const pipe = (...fns) => (x) => fns.reduce((accum, fn) => fn(accum), x);

const sumFunctionVectors = (prop) => (particle) =>
  particle[prop].reduce(
    (vector, fn) => vector.add(fn(particle)),
    new Vector3(),
  );
const sumForces = sumFunctionVectors('forces');
const sumRotationalForces = sumFunctionVectors('rotationalForces');

const updateVelocities = (particle) => ({
  ...particle,
  velocity: particle.velocity.add(sumForces(particle)),
  rotationalVelocity: particle.rotationalVelocity.add(
    sumRotationalForces(particle),
  ),
});

const updatePositions = (particle) => ({
  ...particle,
  position: particle.position.add(particle.velocity),
  rotation: particle.rotation.add(particle.rotationalVelocity),
});

const tick = (particle) => pipe(updateVelocities, updatePositions)(particle);

export const getParticle = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  velocity = [0, 0, 0],
  rotationalVelocity = [0, 0, 0],
  forces = [],
  rotationalForces = [],
}) => {
  const { update, subscribe } = writable({
    position: new Vector3(...position),
    rotation: new Vector3(...rotation),
    velocity: new Vector3(...velocity),
    rotationalVelocity: new Vector3(...rotationalVelocity),
    forces,
    rotationalForces,
    time: Date.now(),
    getVector: (...args) => new Vector3(...args),
  });

  return {
    subscribe,
    update,
    tick: (time) => update((p) => tick({ ...p, time })),
  };
};
