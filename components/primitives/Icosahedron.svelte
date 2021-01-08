<script>
	import { IcosahedronBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let size = .4;

  $: sizeAsArray = [size];
</script>

<Primitive Geometry={IcosahedronBufferGeometry} {...$$props} size={sizeAsArray} />