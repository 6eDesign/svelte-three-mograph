/* src/components/mograph/Cloner.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	check_outros,
	create_slot,
	destroy_each,
	detach,
	empty,
	group_outros,
	init,
	insert,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { Vector3 } from "../../../web_modules/three.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[10] = list[i].x;
	child_ctx[11] = list[i].y;
	child_ctx[12] = list[i].z;
	return child_ctx;
}

const get_default_slot_changes = dirty => ({ position: dirty & /*positions*/ 1 });

const get_default_slot_context = ctx => ({
	position: [/*x*/ ctx[10], /*y*/ ctx[11], /*z*/ ctx[12]]
});

// (29:0) {#each positions as { x, y, z }}
function create_each_block(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[9].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[8], get_default_slot_context);

	return {
		c() {
			if (default_slot) default_slot.c();
		},
		m(target, anchor) {
			if (default_slot) {
				default_slot.m(target, anchor);
			}

			current = true;
		},
		p(ctx, dirty) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, positions*/ 257) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[8], dirty, get_default_slot_changes, get_default_slot_context);
				}
			}
		},
		i(local) {
			if (current) return;
			transition_in(default_slot, local);
			current = true;
		},
		o(local) {
			transition_out(default_slot, local);
			current = false;
		},
		d(detaching) {
			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	let each_1_anchor;
	let current;
	let each_value = /*positions*/ ctx[0];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			if (dirty & /*$$scope, positions*/ 257) {
				each_value = /*positions*/ ctx[0];
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out(i);
				}

				check_outros();
			}
		},
		i(local) {
			if (current) return;

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let distance;
	let directionVector;
	let directionVectorScaled;
	let startPosition;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { instances = 2 } = $$props;
	let { spaceBetween = 0.75 } = $$props;
	let { direction = [0, 1, 0] } = $$props;
	let positions = [];

	$$self.$$set = $$props => {
		if ("instances" in $$props) $$invalidate(1, instances = $$props.instances);
		if ("spaceBetween" in $$props) $$invalidate(2, spaceBetween = $$props.spaceBetween);
		if ("direction" in $$props) $$invalidate(3, direction = $$props.direction);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*instances, spaceBetween*/ 6) {
			$: $$invalidate(4, distance = (instances - 1) * spaceBetween);
		}

		if ($$self.$$.dirty & /*direction*/ 8) {
			$: $$invalidate(5, directionVector = new Vector3(...direction).normalize());
		}

		if ($$self.$$.dirty & /*directionVector, spaceBetween*/ 36) {
			$: $$invalidate(6, directionVectorScaled = directionVector.clone().multiplyScalar(spaceBetween));
		}

		if ($$self.$$.dirty & /*directionVector, distance*/ 48) {
			$: $$invalidate(7, startPosition = directionVector.clone().multiplyScalar(-0.5 * distance));
		}

		if ($$self.$$.dirty & /*instances, startPosition, directionVectorScaled*/ 194) {
			$: {
				if (instances && startPosition) {
					$$invalidate(0, positions = Array(instances).fill(0).map((_, i) => startPosition.clone().add(directionVectorScaled.clone().multiplyScalar(i))));
				}
			}
		}
	};

	return [
		positions,
		instances,
		spaceBetween,
		direction,
		distance,
		directionVector,
		directionVectorScaled,
		startPosition,
		$$scope,
		slots
	];
}

class Cloner extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			instances: 1,
			spaceBetween: 2,
			direction: 3
		});
	}
}

export default Cloner;