<script>
	import { AmbientLight } from 'three';
	import { getContext } from 'svelte';

	const sceneCtx = getContext('sceneCtx');
	sceneCtx.scene.add(new AmbientLight(0x404040, 1));
</script>