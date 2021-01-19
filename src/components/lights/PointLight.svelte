<script>
  import { PointLight } from 'three';
  import { getContext, onDestroy } from 'svelte';

  export let color = 0x404040;
  export let intensity = 1;
  export let distance = 0;
  export let decay = 2;
  export let position = [0, 0, 0];

  const light = new PointLight(color, intensity, distance, decay);

  $: light.position.set(...position);

  const sceneCtx = getContext('sceneCtx');
  sceneCtx.scene.add(light);

  onDestroy(() => {
    console.log('removing light');
    sceneCtx.scene.remove(light);
  });
</script>
