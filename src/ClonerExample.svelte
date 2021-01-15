<script>
  import { getContext, onDestroy } from 'svelte';
  import { Material, mograph, primitives } from './components';

  const { Cube, Torus } = primitives;
  const { LinearCloner, GridCloner, Group } = mograph;

  let rotation = [0.8, 0.8, 0.8];
  let spaceBetween = 0.16;

  const { time } = getContext('sceneCtx');
  const unsubscribe = time.subscribe((t) => {
    rotation = rotation.map((n) => (n += 0.01));
    // kinda neat effect
    // spaceBetween += Math.sin(t / 1000) * 0.05;
    spaceBetween = 0.18 + Math.sin(t / 600) * 0.02;
  });
  onDestroy(unsubscribe);
</script>

<GridCloner instances={[10, 10, 10]} {spaceBetween} {rotation} let:position>
  <Material metalness={0.8} roughness={0.56} color="#fff">
    <Cube size={0.15} {position} />
  </Material>
</GridCloner>

<!-- This looks cool too:  -->
<!-- <LinearCloner instances={3} direction={[0, 1, 0]} spaceBetween={1} let:position>
  <Torus radius={1} tube={0.2} {position} />
</LinearCloner> -->
