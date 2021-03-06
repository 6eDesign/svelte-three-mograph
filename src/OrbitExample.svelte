<script>
  import {
    Scene,
    Material,
    RandomColor,
    PointLight,
    Particle,
    Icosahedron,
  } from './components';

  import { Vector3 } from 'three';
  import { random, addVariance } from './utils';

  export let position = [0, 0, 0];
  export let radius = 1.2;
  export let orbitingCount = 13;
  export let velocity = 0.025;
  export let velocityVariance = 0.14;
  export let radiusVariance = 0.5;
  export let size = 0.01;
  export let addPointLights = true;

  const varyRadius = (r) => Math.abs(addVariance(radiusVariance)(r));
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

{#each orbiters as orbiter}
  <Particle
    position={[orbiter.position.x, orbiter.position.y, orbiter.position.z]}
    velocity={[orbiter.velocity.x, orbiter.velocity.y, orbiter.velocity.z]}
    rotationalVelocity={[0.02, 0.02, 0.02]}
    forces={[orbit(orbiter.radius, [0, 0, 0])]}
    let:position
    let:rotation
  >
    <RandomColor let:color>
      <slot {color}>
        <Material metalness={0} roughness={1} {color}>
          <Icosahedron
            size={size + Math.random() * 0.05}
            {position}
            {rotation}
          />
        </Material>
        {#if addPointLights}
          <PointLight {position} intensity={1} distance={2.8} {color} />
        {/if}
      </slot>
    </RandomColor>
  </Particle>
{/each}
