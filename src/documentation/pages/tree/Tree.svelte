<script>
  import { AmbientLight, Material, Scene } from '../../../components';
  import Branch from './Branch.svelte';

  export let width;
  export let height;

  // tree options
  export let position = [0, -4, 0];
  export let baseAngle = [0, 1, 0];
  export let radiusBottom = 0.15;
  export let baseHeight = 2.8;
  export let shrinkFactor = 0.7;
  export let minHeight = 0.2;
</script>

<Scene {width} {height}>
  <AmbientLight />
  <Material roughness={0.9} metalness={0.1}>
    <Branch
      {position}
      {baseAngle}
      {baseHeight}
      {radiusBottom}
      {shrinkFactor}
      {minHeight}
    />
  </Material>
</Scene>
