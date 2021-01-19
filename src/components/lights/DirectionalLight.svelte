<script>
  import { DirectionalLight } from 'three';
  import { getContext } from 'svelte';

  export let position = [0, 10, 0];
  export let targetPosition = [0, 0, 0];
  export let intensity = 1;

  const sceneCtx = getContext('sceneCtx');
  const light = new DirectionalLight(0xffffff, intensity);

  $: light.position.set.apply(light, position);
  $: light.target.position.set.apply(light, targetPosition);
  $: light.intensity = intensity;

  $: Object.entries($$props, ([key, val]) => {
    light[key] = val;
  });

  sceneCtx.scene.add(light);
  sceneCtx.scene.add(light.target);
</script>
