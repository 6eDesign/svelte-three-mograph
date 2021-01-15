<script>
  import { Vector3 } from 'three';

  export let instances = 2;
  export let spaceBetween = 0.75;
  export let direction = [0, 1, 0];

  let positions = [];

  $: distance = (instances - 1) * spaceBetween;
  $: directionVector = new Vector3(...direction).normalize();
  $: directionVectorScaled = directionVector
    .clone()
    .multiplyScalar(spaceBetween);
  $: startPosition = directionVector.clone().multiplyScalar(-0.5 * distance);
  $: {
    if (instances && startPosition) {
      positions = Array(instances)
        .fill(0)
        .map((_, i) =>
          startPosition
            .clone()
            .add(directionVectorScaled.clone().multiplyScalar(i)),
        );
    }
  }
</script>

{#each positions as { x, y, z }}
  <slot position={[x, y, z]} />
{/each}
