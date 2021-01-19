<script>
  import { AmbientLight } from 'three';
  import { getContext } from 'svelte';

  export let color = 0x404040;
  export let intensity = 1;

  const sceneCtx = getContext('sceneCtx');
  sceneCtx.scene.add(new AmbientLight(color, intensity));
</script>
