<script>
  import { Scene, Material, Particle, Icosahedron } from '../../components';
  import AmbientLight from '../../components/lights/AmbientLight.svelte';
  import DirectionalLight from '../../components/lights/DirectionalLight.svelte';
  import OrbitExample from '../../OrbitExample.svelte';
  export let width;

  const opts = {
    includePlanet: true,
  };
  const orbitOpts = {
    radius: 2.5,
    addPointLights: true,
  };
</script>

<Scene background="#67727e" {width} height={450}>
  <AmbientLight intensity={2.8} />
  <DirectionalLight intensity={1.1} />

  <OrbitExample />
  {#if opts.includePlanet}
    <Particle rotationalVelocity={[0.03, 0.03, 0.03]} let:rotation let:position>
      <Material color="#fff" metalness={0.5} roughness={0.65}>
        <Icosahedron size={2.2} {rotation} {position} />
      </Material>
    </Particle>
  {/if}

  <OrbitExample size={0.06} {...orbitOpts} />
</Scene>

<input type="checkbox" bind:checked={orbitOpts.addPointLights} />
<input type="checkbox" bind:checked={opts.includePlanet} />
