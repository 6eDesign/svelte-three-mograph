<script>
	import { TetrahedronBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let size = .4;

  $: sizeAsArray = [size];
</script>

<Primitive Geometry={TetrahedronBufferGeometry} {...$$props} size={sizeAsArray} />