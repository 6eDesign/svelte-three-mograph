<script>
  import { getContext, onDestroy } from 'svelte';
  import { Material, mograph, primitives } from '../../components';
  import AmbientLight from '../../components/lights/AmbientLight.svelte';
  import DirectionalLight from '../../components/lights/DirectionalLight.svelte';
  import Group from '../../components/mograph/Group.svelte';
  import Particle from '../../components/mograph/Particle.svelte';
  import Scene from '../../components/Scene.svelte';
  import OrbitExample from '../../OrbitExample.svelte';

  const { Cube, Torus } = primitives;
  const { LinearCloner, GridCloner } = mograph;

  export let width;
  export let height;

  let rotation = [0.8, 0.8, 0.8];
  let spaceBetween = 1;

  const spaceBetweenVariance = 0.01;
  const cubeSize = 0.35;

  let time;

  $: medianSpaceBetween = cubeSize + spaceBetweenVariance + 0.005;
  $: if (time && medianSpaceBetween) {
    rotation = rotation.map((n) => (n += 0.01));
    spaceBetween =
      medianSpaceBetween + Math.sin($time / 600) * spaceBetweenVariance;
  }
</script>

<Scene {width} height={450} bind:time background="#67727e">
  <AmbientLight intensity={0.3} />
  <DirectionalLight />

  <Group position={[0, 0, 0]}>
    <OrbitExample />
    <GridCloner instances={[7, 7, 7]} {spaceBetween} {rotation} let:position>
      <Material metalness={0.8} roughness={0.56} color="#fff">
        <Cube size={cubeSize} {position} />
      </Material>
    </GridCloner>

    <LinearCloner
      instances={14}
      spaceBetween={0}
      direction={[0, 0, 1]}
      let:position
      let:index
    >
      <Material
        color="#fff"
        metalness={0.85}
        roughness={0.7}
        opacity={0.6}
        transparent={true}
      >
        <Particle
          rotationalVelocity={[
            Math.random() * 0.03,
            Math.random() * 0.03,
            Math.random() * 0.03,
          ]}
          let:rotation
        >
          <Torus
            {position}
            {rotation}
            radialSegments={4}
            tubularSegments={60}
            radius={4.7 * (1 - index * 0.04)}
            tube={0.04}
          />
        </Particle>
      </Material>
    </LinearCloner>
  </Group>
</Scene>
