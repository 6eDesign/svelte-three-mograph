<script>
  import { onMount, setContext, tick } from 'svelte';
  import { writable } from 'svelte/store';
  import { Scene, Color, PerspectiveCamera, WebGLRenderer } from 'three';
  import { Material } from './index';

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
  export let time = writable(Date.now());

  camera.position.z = 5;
  renderer.setSize(width, height);

  export const ctx = {
    scene,
    camera,
    renderer,
    renderFns: [],
    time,
  };
  setContext('sceneCtx', ctx);

  onMount(() => {
    let rafId;
    const animate = async () => {
      time.set(Date.now());
      renderer.render(scene, camera);
      await tick();
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(rafId);
  });

  $: target && target.appendChild(renderer.domElement);
</script>

<div bind:this={target} />
<Material>
  <slot time={ctx.time} />
</Material>
