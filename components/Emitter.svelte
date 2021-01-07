<script>
  import { getContext } from 'svelte';

  export let x = 0;
  export let y = 0;
  export let z = 0;
  export let velocity = .04;
  export let velocityVariance = 0.03;
  export let size = [0,0,0];
  export let direction = [0,0,1];
  export let directionVariance = 0.005;
  export let lifespan = 15000;
  export let particlesPerSecond = 5;

  const random = clamp => Math.random() * clamp * (Math.random() > 0.5 ? 1 : -1);

  let particles = [];
  let particleCount = 0;

  const addParticle = () => {
    const now = Date.now();
    particles = [
      ...particles.filter(({dies}) => now < dies),
      {
        id: particleCount,
        dies: now + lifespan,
        x: x + random(size[0]/2),
        y: y + random(size[1]/2),
        z: z + random(size[2]/2),
        xRotation: 0,
        yRotation: 0,
        zRotation: 0,
        velocity: [
          direction[0] * (velocity + random(velocityVariance)) + random(directionVariance),
          direction[1] * (velocity + random(velocityVariance)) + random(directionVariance),
          direction[2] * (velocity + random(velocityVariance)) + random(directionVariance),
        ]
      }
    ];
    ++particleCount;
    setTimeout(addParticle, 1000 / particlesPerSecond);
  };

  addParticle();

  const sceneCtx = getContext('sceneCtx');
  sceneCtx.renderFns = [
    ...sceneCtx.renderFns,
    (t) => {
      particles = particles.map(
        particle => ({
          ...particle,
          xRotation: particle.xRotation + 0.05,
          yRotation: particle.yRotation + 0.05,
          zRotation: particle.zRotation + 0.05,
          x: particle.x + particle.velocity[0],
          y: particle.y+ particle.velocity[1],
          z: particle.z + particle.velocity[2],
        })
      );
    }
  ];

</script>

{#each particles as particle (particle.id)}
  <slot
    x={particle.x}
    y={particle.y}
    z={particle.z}
    xRotation={particle.xRotation}
    yRotation={particle.yRotation}
    zRotation={particle.zRotation}
  >
  </slot>
{/each}