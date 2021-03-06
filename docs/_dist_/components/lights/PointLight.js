/* src/components/lights/PointLight.svelte generated by Svelte v3.31.2 */
import { SvelteComponent, init, safe_not_equal } from "../../../web_modules/svelte/internal.js";

import { PointLight } from "../../../web_modules/three.js";
import { getContext, onDestroy } from "../../../web_modules/svelte.js";

function instance($$self, $$props, $$invalidate) {
	let { color = 4210752 } = $$props;
	let { intensity = 1 } = $$props;
	let { distance = 0 } = $$props;
	let { decay = 2 } = $$props;
	let { position = [0, 0, 0] } = $$props;
	const light = new PointLight(color, intensity, distance, decay);
	const sceneCtx = getContext("sceneCtx");
	sceneCtx.scene.add(light);

	onDestroy(() => {
		sceneCtx.scene.remove(light);
	});

	$$self.$$set = $$props => {
		if ("color" in $$props) $$invalidate(0, color = $$props.color);
		if ("intensity" in $$props) $$invalidate(1, intensity = $$props.intensity);
		if ("distance" in $$props) $$invalidate(2, distance = $$props.distance);
		if ("decay" in $$props) $$invalidate(3, decay = $$props.decay);
		if ("position" in $$props) $$invalidate(4, position = $$props.position);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*position*/ 16) {
			$: light.position.set(...position);
		}
	};

	return [color, intensity, distance, decay, position];
}

class PointLight_1 extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, null, safe_not_equal, {
			color: 0,
			intensity: 1,
			distance: 2,
			decay: 3,
			position: 4
		});
	}
}

export default PointLight_1;