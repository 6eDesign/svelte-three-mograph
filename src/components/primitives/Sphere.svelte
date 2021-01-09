<script>
	import { SphereBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let radius = .4;
  export let widthSegments = 8;
  export let heightSegments = 8;

  $: size = [ radius, widthSegments, heightSegments ];
</script>

<Primitive Geometry={SphereBufferGeometry} {...$$props} {size} />