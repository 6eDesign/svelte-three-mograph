<script>
	import { DirectionalLight } from 'three';
	import { getContext } from 'svelte';

	export let position = [0, 10, 0];
	export let targetPosition = [-5, 0, 0];

	const sceneCtx = getContext('sceneCtx');
	const light = new DirectionalLight( 0xffffff, 0.5 )

	$: light.position.set.apply(light, position);
	$: light.target.position.set.apply(light, targetPosition);

	sceneCtx.scene.add(light);
	sceneCtx.scene.add(light.target);
</script>
