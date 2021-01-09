<script>
	import { BoxBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let size = .4;

  $: sizeAsArray = Array.isArray(size) ? size : [ size, size, size ];
</script>

<Primitive Geometry={BoxBufferGeometry} {...$$props} size={sizeAsArray} />