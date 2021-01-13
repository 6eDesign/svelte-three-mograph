<script>
  import {
    Scene,
    Material,
    numbers,
    lights,
    mograph,
    primitives,
  } from './components';
  import OrbitExample from './OrbitExample.svelte';

  const { RandomColor } = numbers;
  const { Emitter, Forces } = mograph;
  const { Icosahedron, Plane } = primitives;
  const { AmbientLight, DirectionalLight } = lights;

  let width;
  let height;
  let sceneCtx;

  const emitterPosition = [0, 0, -100];
  const gravity = (particle) => particle.getVector(0, -0.0001, 0);
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height} />

{#if width && height}
  <Scene background="#000" {width} {height}>
    <AmbientLight />
    <DirectionalLight />

    <Emitter
      position={emitterPosition}
      size={[12, 3, 0.5]}
      direction={[0, 0, 2]}
      directionVariance={0.4}
      velocity={0.45}
      lifespan={3000}
      forces={[gravity]}
      particlesPerSecond={150}
      let:position
      let:rotation
    >
      <RandomColor let:color>
        <Material roughness={1} metalness={0.1} {color}>
          <Icosahedron size={0.1} {position} {rotation} />
        </Material>
      </RandomColor>
    </Emitter>

    <!-- <Material color="#fff" roughness={1} metalness={0}>
      <Plane
        width={100}
        height={100}
        position={[0, -2, 0]}
        rotation={[-1.58, 0, 0]}
        color="#eee"
      />
    </Material> -->
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
