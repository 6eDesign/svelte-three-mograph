<script>
	import { TorusKnotBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let radius = 1;
  export let tube = .4;
  export let radialSegments = 64;
  export let tubularSegments = 8;
  export let p = 2;
  export let q = 3;

  $: size = [
    radius,
    tube,
    radialSegments,
    tubularSegments,
    p,
    q,
  ];
</script>

<Primitive Geometry={TorusKnotBufferGeometry} {...$$props} {size} />