<script>
  import { getContext, onDestroy } from 'svelte';
  import { MeshPhongMaterial, Mesh } from 'three';

  export let Geometry;
  export let size;
  export let color = Math.random() * 0xffffff;
  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let renderFn;

  const geometry = new Geometry(...size);
  const material = new MeshPhongMaterial({ color });
  const mesh = new Mesh(geometry, material);
  const primitive = new Mesh(mesh, material);

  $: mesh.position.set(...position);
  $: mesh.rotation.set(...rotation);

  const sceneCtx = getContext('sceneCtx');
  sceneCtx.scene.add(mesh);

  if (renderFn) {
    sceneCtx.renderFns = [...sceneCtx.renderFns, renderFn];
  }

  onDestroy(() => {
    sceneCtx.scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  });
</script>
