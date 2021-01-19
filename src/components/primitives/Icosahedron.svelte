<script>
  import { IcosahedronBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let size = 0.4;
  export let radius = size;
  export let detail = 0;

  $: sizeAsArray = [radius, detail];
</script>

<Primitive
  Geometry={IcosahedronBufferGeometry}
  {...$$props}
  size={sizeAsArray}
/>
