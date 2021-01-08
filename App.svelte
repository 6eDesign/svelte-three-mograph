<script>
  import Scene from './components/Scene.svelte';
  import Emitter from './components/Emitter.svelte';
	import Cube from './components/primitives/Cube.svelte';
  import Octahedron from './components/primitives/Octahedron.svelte';
  import Torus from './components/primitives/Torus.svelte';
  import TorusKnot from './components/primitives/TorusKnot.svelte';
	import AmbientLight from './components/AmbientLight.svelte';
  import DirectionalLight from './components/DirectionalLight.svelte';

  let width;
  let height;
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>

{#if width && height}
  <Scene background='#eee' {width} {height}>
    <AmbientLight />
    <DirectionalLight />
    <Emitter
      z={-4}
      let:x
      let:y
      let:z
      let:xRotation
      let:yRotation
      let:zRotation
      size={[3,3,0]}
      particlesPerSecond={155}
      velocity={.09}
    >
      <!-- <Cube
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->
      <!-- <Octahedron
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->
      <!-- <Torus
        radius={0.05}
        tube={0.01}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->
      <TorusKnot
        radius={0.05}
        tube={0.01}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      />
    </Emitter>
  </Scene>
{/if}

<style>
  :global(body) { background-color: #eee; }
</style>