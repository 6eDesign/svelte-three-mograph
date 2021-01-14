<script>
  import { getContext, onDestroy } from 'svelte';
  import { MeshPhongMaterial, Mesh } from 'three';

  export let Geometry;
  export let size;
  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let renderFn;

  const material = getContext('material');
  const geometry = new Geometry(...size);
  const mesh = new Mesh(geometry, material);
  const primitive = new Mesh(mesh, material);

  $: mesh.position.set(...position);
  $: mesh.rotation.set(...rotation);

  const sceneCtx = getContext('sceneCtx');

  const group = getContext('group');
  if (group) group.add(mesh);
  if (!group) sceneCtx.scene.add(mesh);

  if (renderFn) sceneCtx.renderFns = [...sceneCtx.renderFns, renderFn];

  onDestroy(() => {
    if (group) group.remove(mesh);
    sceneCtx.scene.remove(mesh);
    mesh.geometry.dispose();
    mesh.material.dispose();
  });
</script>
