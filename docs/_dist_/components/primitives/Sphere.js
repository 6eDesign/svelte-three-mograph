/* src/components/primitives/Sphere.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	assign,
	create_component,
	destroy_component,
	exclude_internal_props,
	get_spread_object,
	get_spread_update,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out
} from "../../../web_modules/svelte/internal.js";

import { SphereBufferGeometry } from "../../../web_modules/three.js";
import Primitive from "./Primitive.js";

function create_fragment(ctx) {
	let primitive;
	let current;

	const primitive_spread_levels = [
		{ Geometry: SphereBufferGeometry },
		/*$$props*/ ctx[1],
		{ size: /*size*/ ctx[0] }
	];

	let primitive_props = {};

	for (let i = 0; i < primitive_spread_levels.length; i += 1) {
		primitive_props = assign(primitive_props, primitive_spread_levels[i]);
	}

	primitive = new Primitive({ props: primitive_props });

	return {
		c() {
			create_component(primitive.$$.fragment);
		},
		m(target, anchor) {
			mount_component(primitive, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const primitive_changes = (dirty & /*SphereBufferGeometry, $$props, size*/ 3)
			? get_spread_update(primitive_spread_levels, [
					dirty & /*SphereBufferGeometry*/ 0 && { Geometry: SphereBufferGeometry },
					dirty & /*$$props*/ 2 && get_spread_object(/*$$props*/ ctx[1]),
					dirty & /*size*/ 1 && { size: /*size*/ ctx[0] }
				])
			: {};

			primitive.$set(primitive_changes);
		},
		i(local) {
			if (current) return;
			transition_in(primitive.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(primitive.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(primitive, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let size;
	let { radius = 0.4 } = $$props;
	let { widthSegments = 8 } = $$props;
	let { heightSegments = 8 } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("radius" in $$new_props) $$invalidate(2, radius = $$new_props.radius);
		if ("widthSegments" in $$new_props) $$invalidate(3, widthSegments = $$new_props.widthSegments);
		if ("heightSegments" in $$new_props) $$invalidate(4, heightSegments = $$new_props.heightSegments);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*radius, widthSegments, heightSegments*/ 28) {
			$: $$invalidate(0, size = [radius, widthSegments, heightSegments]);
		}
	};

	$$props = exclude_internal_props($$props);
	return [size, $$props, radius, widthSegments, heightSegments];
}

class Sphere extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			radius: 2,
			widthSegments: 3,
			heightSegments: 4
		});
	}
}

export default Sphere;