<script>
  import { Scene, lights, mograph, primitives } from './components';
  import { Vector3 } from 'three';
  import { random, addVariance } from './utils';

  const { Emitter, Forces } = mograph;
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
  export let radius = 1.3;
  export let orbitingCount = 100;
  export let velocity = 0.008;
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

<Forces rotationalVelocity={[0.03, 0.03, 0.03]} let:rotation let:position>
  <Icosahedron color="#f7901e" size={1} {rotation} {position} />
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
    <Icosahedron size={0.01 + Math.random() * 0.05} {position} {rotation} />
  </Forces>
{/each}
