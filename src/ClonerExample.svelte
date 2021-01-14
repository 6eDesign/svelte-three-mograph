<script>
  import { Material, mograph, primitives } from './components';

  const { Cube } = primitives;
  const { LinearCloner, GridCloner, Group } = mograph;
</script>

<!-- <LinearCloner instances={5} position={[0, 0, 0]} let:position>
  <Material metalness={0.7} roughness={1} color="#fff">
    <Cube size={0.65} {position} />
  </Material>
</LinearCloner> -->

<GridCloner instances={[3, 3, 3]} let:position>
  <Material metalness={0.7} roughness={1}>
    <Cube size={0.65} {position} />
  </Material>
</GridCloner>
