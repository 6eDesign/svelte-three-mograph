<script>
  import {
    Scene,
    Material,
    numbers,
    lights,
    mograph,
    primitives,
  } from './components';
  import { Vector3 } from 'three';
  import { random, addVariance } from './utils';

  const { RandomColor } = numbers;
  const { Emitter, Forces } = mograph;
  const { PointLight } = lights;
  const {
    Cube,
    Icosahedron,
    Octahedron,
    Sphere,
    Tetrahedron,
    Torus,
    TorusKnot,
  } = primitives;

  export let position = [0, 0, 0];
  export let radius = 1.6;
  export let orbitingCount = 18;
  export let velocity = 0.01;
  export let velocityVariance = 0.09;
  export let radiusVariance = 0.8;

  const varyRadius = addVariance(radiusVariance);
  const varyVelocity = addVariance(velocityVariance);

  const randomUnitVector = () =>
    new Vector3(random(1), random(1), random(1)).normalize();

  const orbiters = new Array(orbitingCount).fill(0).map(() => {
    const center = new Vector3(...position);

    const orbitingRadius = varyRadius(radius);
    const orbitingVelocityScalar = varyVelocity(velocity);

    const orbitingPosition = center
      .clone()
      .add(randomUnitVector().multiplyScalar(orbitingRadius));

    const orbitingVelocity = randomUnitVector()
      .cross(center.clone().sub(orbitingPosition))
      .normalize()
      .multiplyScalar(orbitingVelocityScalar);

    return {
      position: orbitingPosition,
      velocity: orbitingVelocity,
      radius: orbitingRadius,
    };
  });

  const orbit = (radius, center) => (particle) => {
    const direction = particle
      .getVector(...center)
      .sub(particle.position)
      .normalize();
    return direction.multiplyScalar(
      Math.pow(particle.velocity.length(), 2) / radius,
    );
  };
</script>

<Forces rotationalVelocity={[0.01, 0.01, 0.01]} let:rotation let:position>
  <Material color="#fff" metalness={0.8} roughness={0.7}>
    <Icosahedron size={1} {rotation} {position} />
  </Material>
</Forces>

{#each orbiters as orbiter}
  <Forces
    position={[orbiter.position.x, orbiter.position.y, orbiter.position.z]}
    velocity={[orbiter.velocity.x, orbiter.velocity.y, orbiter.velocity.z]}
    rotationalVelocity={[0.02, 0.02, 0.02]}
    forces={[orbit(orbiter.radius, [0, 0, 0])]}
    let:position
    let:rotation
  >
    <RandomColor let:color>
      <Material metalness={0} roughness={1} {color}>
        <Icosahedron size={0.01 + Math.random() * 0.05} {position} {rotation} />
      </Material>
      <PointLight {position} intensity={1} distance={1.8} {color} />
    </RandomColor>
  </Forces>
{/each}
