<script>
  import { getContext, onDestroy } from 'svelte';
  import { Material, mograph, primitives } from './components';

  const { Cube } = primitives;
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

<GridCloner instances={[13, 13, 13]} {spaceBetween} {rotation} let:position>
  <Material metalness={0.8} roughness={0.56} color="#fff">
    <Cube size={0.15} {position} />
  </Material>
</GridCloner>
