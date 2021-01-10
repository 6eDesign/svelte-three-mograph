<script>
  import { onMount, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { Scene, Color, PerspectiveCamera, WebGLRenderer } from 'three';

  export let width = 600;
  export let height = 400;
  export let background = '#fff';

  let target;

  const scene = new Scene();
  scene.background = new Color(background);
  const camera = new PerspectiveCamera(75, width / height, 0.1, 1000);
  const renderer = new WebGLRenderer({
    alpha: true,
    antialias: true,
  });

  camera.position.z = 5;
  renderer.setSize(width, height);

  export const ctx = {
    scene,
    camera,
    renderer,
    renderFns: [],
    time: writable(Date.now()),
  };
  setContext('sceneCtx', ctx);

  onMount(() => {
    let rafId;
    const animate = () => {
      ctx.time.set(Date.now());
      rafId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  });

  $: target && target.appendChild(renderer.domElement);
</script>

<div bind:this={target} />
<slot />
