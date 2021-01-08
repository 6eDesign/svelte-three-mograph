<script>
  import Scene from './components/Scene.svelte';
  import Emitter from './components/mograph/Emitter.svelte';
  import { Cube, Icosahedron, Octahedron, Sphere, Tetrahedron, Torus, TorusKnot } from './components/primitives';
  import { AmbientLight, DirectionalLight } from './components/lights';

  let width;
  let height;

  const gravity = {
    direction: [0, -0.002, 0],
    rotation: [0, 0, 0]
  };
</script>

<svelte:window bind:innerWidth={width} bind:innerHeight={height}/>

{#if width && height}
  <Scene background='#111' {width} {height}>
    <AmbientLight />
    <DirectionalLight />
    <Emitter
      let:x
      let:y
      let:z
      let:xRotation
      let:yRotation
      let:zRotation
      position={[0,0,0]}
      size={[1,1,0]}
      particlesPerSecond={155}
      velocity={.1}
      direction={[0,1,1]}
      forces={[ gravity ]}
    >
      <!-- CUBE Example: -->
      <!-- <Cube
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->

      <!-- ICOSAHEDROM Example: -->
      <Icosahedron
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      />

      <!-- OCTAHEDRON Example: -->
      <!-- <Octahedron
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->

      <!-- SPHERE Example: -->
      <!-- <Sphere
        radius={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->

      <!-- TETRAHEDRON Example: -->
      <!-- <Tetrahedron
        size={.05}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->

      <!-- TORUS Example: -->
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

      <!-- TORUSKNOT Example: -->
      <!-- <TorusKnot
        radius={0.05}
        tube={0.01}
        {x}
        {y}
        {z}
        {xRotation}
        {yRotation}
        {zRotation}
      /> -->
    </Emitter>
  </Scene>
{/if}

<style>
  :global(body) { background-color: #111; }
</style>