/* src/components/primitives/Primitive.svelte generated by Svelte v3.31.2 */
import { SvelteComponent, init, safe_not_equal } from "../../../web_modules/svelte/internal.js";

import { getContext, onDestroy } from "../../../web_modules/svelte.js";
import { MeshPhongMaterial, Mesh } from "../../../web_modules/three.js";

function instance($$self, $$props, $$invalidate) {
	let { Geometry } = $$props;
	let { size } = $$props;
	let { color = Math.random() * 16777215 } = $$props;
	let { position = [0, 0, 0] } = $$props;
	let { rotation = [0, 0, 0] } = $$props;
	let { renderFn } = $$props;
	const geometry = new Geometry(...size);
	const material = new MeshPhongMaterial({ color });
	const mesh = new Mesh(geometry, material);
	const primitive = new Mesh(mesh, material);
	const sceneCtx = getContext("sceneCtx");
	sceneCtx.scene.add(mesh);

	if (renderFn) {
		sceneCtx.renderFns = [...sceneCtx.renderFns, renderFn];
	}

	onDestroy(() => {
		sceneCtx.scene.remove(mesh);
		mesh.geometry.dispose();
		mesh.material.dispose();
	});

	$$self.$$set = $$props => {
		if ("Geometry" in $$props) $$invalidate(0, Geometry = $$props.Geometry);
		if ("size" in $$props) $$invalidate(1, size = $$props.size);
		if ("color" in $$props) $$invalidate(2, color = $$props.color);
		if ("position" in $$props) $$invalidate(3, position = $$props.position);
		if ("rotation" in $$props) $$invalidate(4, rotation = $$props.rotation);
		if ("renderFn" in $$props) $$invalidate(5, renderFn = $$props.renderFn);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*position*/ 8) {
			$: mesh.position.set(...position);
		}

		if ($$self.$$.dirty & /*rotation*/ 16) {
			$: mesh.rotation.set(...rotation);
		}
	};

	return [Geometry, size, color, position, rotation, renderFn];
}

class Primitive extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, null, safe_not_equal, {
			Geometry: 0,
			size: 1,
			color: 2,
			position: 3,
			rotation: 4,
			renderFn: 5
		});
	}
}

export default Primitive;