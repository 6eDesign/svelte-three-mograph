<script>
  import { Vector3 } from 'three';

  import Cylinder from '../../../components/primitives/Cylinder.svelte';
  import { addVariance } from '../../../utils';

  export let position;
  export let baseAngle;
  export let baseHeight;
  export let radiusBottom;
  export let shrinkFactor;
  export let minHeight;

  export let angleVariance = 0.03;
  export let heightVariance = 0.03;
  export let radiusVariance = 0.03;

  $: rotation = baseAngle.map(addVariance(angleVariance));
  $: height = addVariance(heightVariance)(baseHeight);
  $: radiusTop = addVariance(radiusVariance)(radiusBottom * 0.2);
  $: translate = [0, height / 2, 0];

  let nextBranch;
  $: {
    if (baseHeight > minHeight) {
      const { x, y, z } = new Vector3(...position).add(
        new Vector3(...rotation).normalize().multiplyScalar(height),
      );
      nextBranch = {
        position: [x, y, z],
        baseAngle: rotation,
        baseHeight: height * shrinkFactor,
        radiusBottom: radiusTop,
        shrinkFactor,
        minHeight,
      };
    }
  }
</script>

<Cylinder
  {position}
  {rotation}
  {height}
  {radiusBottom}
  {radiusTop}
  {translate}
/>
{#if nextBranch}
  <svelte:self {...nextBranch} />
{/if}
