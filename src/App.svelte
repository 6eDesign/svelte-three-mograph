<script>
  import Scene from './components/Scene.svelte';
  import { Emitter, Forces } from './components/mograph';
  import {
    Cube,
    Icosahedron,
    Octahedron,
    Sphere,
    Tetrahedron,
    Torus,
    TorusKnot,
  } from './components/primitives';
  import { AmbientLight, DirectionalLight } from './components/lights';

  let width;
  let height;
  let sceneCtx;

  const emitterPosition = [0, 0, -100];
  const gravity = {
    direction: [0, -0.0001, 0],
    rotation: [0, 0, 0],
  };

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
      let:position
      let:rotation
      position={emitterPosition}
      size={[22, 3, 0.5]}
      particlesPerSecond={350}
      velocity={0.25}
      direction={[0, 0, 2]}
      forces={[gravity]}
      directionVariance={0.4}
      lifespan={3000}
    >
      <Icosahedron size={0.09} {position} {rotation} />
    </Emitter>

    <Forces
      rotation={[0.2, 0.2, 0.2]}
      velocity={[0, 0, 0]}
      rotationalVelocity={[0.02, 0.02, 0.09]}
      let:rotation
    >
      <Cube color="#f7901e" size={1} {rotation} position={[0, 0, -2]} />
    </Forces>
  </Scene>
{/if}

<style>
  :global(body) {
    background-color: #000;
    padding: 0;
    margin: 0;
  }
</style>
