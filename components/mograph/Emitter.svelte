<script>
  import { getContext } from 'svelte';
  import { Vector3 } from 'three';
  import Forces from './Forces.svelte';

  export let position = [ 0, 0, 0 ];
  export let rotation = [ 0, 0, 0 ];
  export let velocity = .04;
  export let velocityVariance = 0.03;
  export let rotationVelocity = 0.02;
  export let rotationVelocityVariance = 0.008;
  export let size = [0,0,0];
  export let direction = [0,0,1];
  export let directionVariance = 0.5;
  export let rotationDirection = [0,0,0];
  export let rotationDirectionVariance = 2;
  export let lifespan = 15000;
  export let particlesPerSecond = 5;
  export let forces = [];

  const random = clamp => Math.random() * clamp * (Math.random() > 0.5 ? 1 : -1);
  const addVariance = variance => num => num + random(variance);
  const varyVelocity = addVariance(velocityVariance);
  const varyDirection = addVariance(directionVariance);
  const varyRotationVelocity = addVariance(rotationVelocityVariance);
  const varyRotationDirection = addVariance(rotationDirectionVariance);

  let particles = [];
  let particleCount = 0;

  const addParticle = () => {
    const now = Date.now();
    const particleDirection = new Vector3(...direction.map(varyDirection));
    const particleVelocity = new Vector3().addScaledVector(particleDirection, varyVelocity(velocity));
    const particleRotationalDirection = new Vector3(...rotationDirection.map(varyRotationDirection));
    const particleRotationalVelocity = new Vector3().addScaledVector(particleRotationalDirection, varyRotationVelocity(rotationVelocity));
    particles = [
      ...particles.filter(({dies}) => now < dies),
      {
        id: particleCount,
        dies: now + lifespan,
        position: [
          addVariance(size[0]/2)(position[0]),
          addVariance(size[1]/2)(position[1]),
          addVariance(size[2]/2)(position[2]),
        ],
        rotation,
        force: {
          direction: new Vector3(),
          rotation: new Vector3()
        },
        velocity: [
          particleVelocity.x,
          particleVelocity.y,
          particleVelocity.z,
        ],
        rotationalVelocity: [
          particleRotationalVelocity.x,
          particleRotationalVelocity.y,
          particleRotationalVelocity.z,
        ]
      }
    ];
    ++particleCount;
    setTimeout(addParticle, 1000 / particlesPerSecond);
  };

  addParticle();

  const sceneCtx = getContext('sceneCtx');

</script>

{#each particles as particle (particle.id)}
  <Forces
    forces={[...forces]}
    position={particle.position}
    velocity={particle.velocity}
    rotationalVelocity={particle.rotationalVelocity}
    let:position
    let:rotation
  >
    <slot
      x={position.x}
      y={position.y}
      z={position.z}
      xRotation={rotation.x}
      yRotation={rotation.y}
      zRotation={rotation.z}
    >
    </slot>
  </Forces>
{/each}