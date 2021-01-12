<script>
  import { Scene, lights, mograph, primitives } from './components';
  import OrbitExample from './OrbitExample.svelte';

  const { Emitter, Forces } = mograph;
  const { Icosahedron } = primitives;
  const { AmbientLight, DirectionalLight } = lights;

  let width;
  let height;
  let sceneCtx;

  const emitterPosition = [0, 0, -100];
  const gravity = (particle) => particle.getVector(0, -0.0001, 0);

  $: sceneCtx &&
    sceneCtx.time.subscribe((t) => {
      emitterPosition[0] = Math.sin(t / 1000);
    });
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

{#if width && height}
  <Scene background="#000" {width} {height} bind:ctx={sceneCtx}>
    <AmbientLight />
    <DirectionalLight />
    <Emitter
      position={emitterPosition}
      size={[22, 3, 0.5]}
      direction={[0, 0, 2]}
      directionVariance={0.4}
      velocity={0.25}
      lifespan={3000}
      forces={[gravity]}
      particlesPerSecond={350}
      let:position
      let:rotation
    >
      <Icosahedron size={0.13} {position} {rotation} color="#fff" />
    </Emitter>

    <OrbitExample />
  </Scene>
{/if}

<style>
  :global(body) {
    background-color: #000;
    padding: 0;
    margin: 0;
  }
</style>
