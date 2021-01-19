<script>
  import { getContext, onDestroy } from 'svelte';
  import { Material, mograph, primitives } from './components';

  const { Cube, Torus } = primitives;
  const { LinearCloner, GridCloner, Group } = mograph;

  let rotation = [0.8, 0.8, 0.8];
  let spaceBetween = 0.16;
  const spaceBetweenVariance = 0.01;
  const cubeSize = 0.35;
  $: medianSpaceBetween = cubeSize + spaceBetweenVariance + 0.005;

  const { time } = getContext('sceneCtx');
  const unsubscribe = time.subscribe((t) => {
    rotation = rotation.map((n) => (n += 0.01));
    spaceBetween =
      medianSpaceBetween + Math.sin(t / 600) * spaceBetweenVariance;
  });
  onDestroy(unsubscribe);
</script>

<GridCloner instances={[7, 7, 7]} {spaceBetween} {rotation} let:position>
  <Material metalness={0.8} roughness={0.56} color="#fff">
    <Cube size={cubeSize} {position} />
  </Material>
</GridCloner>

<LinearCloner
  instances={13}
  spaceBetween={1}
  direction={[0, 0, 1]}
  let:position
>
  <Material color="#fff">
    <Torus
      {position}
      radialSegments={30}
      tubularSegments={6}
      radius={3.8}
      tube={0.3}
      rotation={[0, 0, Math.PI / 6]}
    />
  </Material>
</LinearCloner>
