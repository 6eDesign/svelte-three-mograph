<script>
	import { TorusBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let radius = 1;
  export let tube = .4;
  export let radialSegments = 6;
  export let tubularSegments = 6;
  export let arc = Math.PI * 2;

  $: size = [
    radius,
    tube,
    radialSegments,
    tubularSegments,
    arc
  ];
</script>

<Primitive Geometry={TorusBufferGeometry} {...$$props} {size} />