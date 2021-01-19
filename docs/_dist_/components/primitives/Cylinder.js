/* src/components/primitives/Cylinder.svelte generated by Svelte v3.31.2 */
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

import { CylinderBufferGeometry } from "../../../web_modules/three.js";
import Primitive from "./Primitive.js";

function create_fragment(ctx) {
	let primitive;
	let current;

	const primitive_spread_levels = [
		{ Geometry: CylinderBufferGeometry },
		/*$$props*/ ctx[1],
		{ size: /*sizeAsArray*/ ctx[0] }
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
			const primitive_changes = (dirty & /*CylinderBufferGeometry, $$props, sizeAsArray*/ 3)
			? get_spread_update(primitive_spread_levels, [
					dirty & /*CylinderBufferGeometry*/ 0 && { Geometry: CylinderBufferGeometry },
					dirty & /*$$props*/ 2 && get_spread_object(/*$$props*/ ctx[1]),
					dirty & /*sizeAsArray*/ 1 && { size: /*sizeAsArray*/ ctx[0] }
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
	let { radius = 1 } = $$props;
	let { radiusTop = radius } = $$props;
	let { radiusBottom = radiusTop } = $$props;
	let { height = 1 } = $$props;
	let { radialSegments = 24 } = $$props;
	let { heightSegments = 1 } = $$props;
	let { openEnded = false } = $$props;
	let { thetaStart = 0 } = $$props;
	let { thetaLength = 2 * Math.PI } = $$props;

	let { sizeAsArray = [
		radiusTop,
		radiusBottom,
		height,
		radialSegments,
		heightSegments,
		openEnded,
		thetaStart,
		thetaLength
	] } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(1, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("radius" in $$new_props) $$invalidate(2, radius = $$new_props.radius);
		if ("radiusTop" in $$new_props) $$invalidate(3, radiusTop = $$new_props.radiusTop);
		if ("radiusBottom" in $$new_props) $$invalidate(4, radiusBottom = $$new_props.radiusBottom);
		if ("height" in $$new_props) $$invalidate(5, height = $$new_props.height);
		if ("radialSegments" in $$new_props) $$invalidate(6, radialSegments = $$new_props.radialSegments);
		if ("heightSegments" in $$new_props) $$invalidate(7, heightSegments = $$new_props.heightSegments);
		if ("openEnded" in $$new_props) $$invalidate(8, openEnded = $$new_props.openEnded);
		if ("thetaStart" in $$new_props) $$invalidate(9, thetaStart = $$new_props.thetaStart);
		if ("thetaLength" in $$new_props) $$invalidate(10, thetaLength = $$new_props.thetaLength);
		if ("sizeAsArray" in $$new_props) $$invalidate(0, sizeAsArray = $$new_props.sizeAsArray);
	};

	$$props = exclude_internal_props($$props);

	return [
		sizeAsArray,
		$$props,
		radius,
		radiusTop,
		radiusBottom,
		height,
		radialSegments,
		heightSegments,
		openEnded,
		thetaStart,
		thetaLength
	];
}

class Cylinder extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			radius: 2,
			radiusTop: 3,
			radiusBottom: 4,
			height: 5,
			radialSegments: 6,
			heightSegments: 7,
			openEnded: 8,
			thetaStart: 9,
			thetaLength: 10,
			sizeAsArray: 0
		});
	}
}

export default Cylinder;