<script>
	import { OctahedronBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let size = .4;

  $: sizeAsArray = [size];
</script>

<Primitive Geometry={OctahedronBufferGeometry} {...$$props} size={sizeAsArray} />