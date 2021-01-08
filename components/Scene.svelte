<script>
	import { onMount, setContext} from 'svelte';
	import { Scene, Color, PerspectiveCamera, WebGLRenderer } from 'three';

	export let width = 600;
	export let height = 400;
	export let background = '#fff';

	let target;

	const scene = new Scene();
	scene.background = new Color(background);
	const camera = new PerspectiveCamera(75, width/height, 0.1, 1000);
	const renderer = new WebGLRenderer({
		alpha: true,
		antialias: true
	});

	camera.position.z = 5;
	renderer.setSize(width, height);

	const ctx =	{ scene, camera, renderer, renderFns: [] }
	setContext('sceneCtx', ctx);

	onMount(() => {
		let rafId;
		const animate = () => {
			const t = Date.now();
			rafId = requestAnimationFrame(animate);
			ctx.renderFns.forEach(fn => fn(t));
			renderer.render( scene, camera );
		}
		animate();
		return () => cancelAnimationFrame(rafId);
	});


	$: target && target.appendChild(renderer.domElement);
</script>

<div bind:this={target} >
</div>
<slot></slot>
