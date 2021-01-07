<script>
  import Scene from './components/Scene.svelte';
  import Emitter from './components/Emitter.svelte';
	import Cube from './components/Cube.svelte';
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
      <Cube size={.02} {x} {y} {z} {xRotation} {yRotation} {zRotation} />
    </Emitter>
  </Scene>
{/if}

<style>
  :global(body) { background-color: #eee; }
</style>