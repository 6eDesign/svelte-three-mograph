<script>
	import { getContext, onMount } from 'svelte';
	import { BoxBufferGeometry, MeshPhongMaterial, Mesh } from 'three';

  export let size = .4;
	export let color = '#fff';
	export let x = 0;
	export let y = 0;
  export let z = 0;
  export let yRotation = 0;
  export let xRotation = 0;
  export let zRotation = 0;
  export let renderFn;

  const geometry = new BoxBufferGeometry(size, size, size);
  const material = new MeshPhongMaterial({color: Math.random() * 0xffffff});
  const mesh = new Mesh(geometry, material);
	const cube = new Mesh(mesh, material);

  $: mesh.position.set(x, y, z);
  $: mesh.rotation.set(xRotation, yRotation, zRotation);

	const sceneCtx = getContext('sceneCtx')
	sceneCtx.scene.add(mesh);

  if (renderFn) {
    sceneCtx.renderFns = [
      ...sceneCtx.renderFns,
      renderFn,
    ];
  }

  onMount(() => {
    () => {
      sceneCtx.scene.remove(mesh);
      mesh.geometry.dispose();
      mesh.material.dispose();
    }
  });
</script>
