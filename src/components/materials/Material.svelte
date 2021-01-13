<script>
  import { MeshStandardMaterial } from 'three';
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  export let metalness = 0.8;
  export let roughness = 0.2;
  export let color = Math.random() * 0xffffff;

  const material = new MeshStandardMaterial({
    metalness,
    roughness,
    color,
  });
  setContext('material', material);

  $: Object.entries($$props, ([key, val]) => {
    update((mat) => {
      mat[key] = val;
      return mat;
    });
  });
</script>

<slot />
