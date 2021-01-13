<script>
  import { PlaneBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let width = 1;
  export let height = 1;
  export let widthSegments = 1;
  export let heightSegments = 1;

  $: size = [width, height, widthSegments, heightSegments];
</script>

<Primitive Geometry={PlaneBufferGeometry} {...$$props} {size} />
