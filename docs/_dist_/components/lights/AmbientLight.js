/* src/components/lights/AmbientLight.svelte generated by Svelte v3.31.2 */
import { SvelteComponent, init, safe_not_equal } from "../../../web_modules/svelte/internal.js";

import { AmbientLight } from "../../../web_modules/three.js";
import { getContext } from "../../../web_modules/svelte.js";

function instance($$self, $$props, $$invalidate) {
	let { color = 4210752 } = $$props;
	let { intensity = 1 } = $$props;
	const sceneCtx = getContext("sceneCtx");
	sceneCtx.scene.add(new AmbientLight(color, intensity));

	$$self.$$set = $$props => {
		if ("color" in $$props) $$invalidate(0, color = $$props.color);
		if ("intensity" in $$props) $$invalidate(1, intensity = $$props.intensity);
	};

	return [color, intensity];
}

class AmbientLight_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, null, safe_not_equal, { color: 0, intensity: 1 });
	}
}

export default AmbientLight_1;