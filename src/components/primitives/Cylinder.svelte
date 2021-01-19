<script>
  import { CylinderBufferGeometry } from 'three';
  import Primitive from './Primitive.svelte';

  export let radius = 1;
  export let radiusTop = radius;
  export let radiusBottom = radiusTop;
  export let height = 1;
  export let radialSegments = 24;
  export let heightSegments = 1;
  export let openEnded = false;
  export let thetaStart = 0;
  export let thetaLength = 2 * Math.PI;

  export let sizeAsArray = [
    radiusTop,
    radiusBottom,
    height,
    radialSegments,
    heightSegments,
    openEnded,
    thetaStart,
    thetaLength,
  ];
</script>

<Primitive Geometry={CylinderBufferGeometry} {...$$props} size={sizeAsArray} />
