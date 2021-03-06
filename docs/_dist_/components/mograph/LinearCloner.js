/* src/components/mograph/LinearCloner.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	assign,
	create_component,
	create_slot,
	destroy_component,
	exclude_internal_props,
	get_spread_object,
	get_spread_update,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import Group from "./Group.js";
import Cloner from "./Cloner.js";

const get_default_slot_changes = dirty => ({
	position: dirty & /*position*/ 2,
	index: dirty & /*index*/ 256
});

const get_default_slot_context = ctx => ({
	position: /*position*/ ctx[1],
	index: /*index*/ ctx[8]
});

// (13:2) <Cloner {...$$props} let:position let:index>
function create_default_slot_1(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[6].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[7], get_default_slot_context);

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
				if (default_slot.p && dirty & /*$$scope, position, index*/ 386) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[7], dirty, get_default_slot_changes, get_default_slot_context);
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

// (12:0) <Group {position} {rotation}>
function create_default_slot(ctx) {
	let cloner;
	let current;
	const cloner_spread_levels = [/*$$props*/ ctx[2]];

	let cloner_props = {
		$$slots: {
			default: [
				create_default_slot_1,
				({ position, index }) => ({ 1: position, 8: index }),
				({ position, index }) => (position ? 2 : 0) | (index ? 256 : 0)
			]
		},
		$$scope: { ctx }
	};

	for (let i = 0; i < cloner_spread_levels.length; i += 1) {
		cloner_props = assign(cloner_props, cloner_spread_levels[i]);
	}

	cloner = new Cloner({ props: cloner_props });

	return {
		c() {
			create_component(cloner.$$.fragment);
		},
		m(target, anchor) {
			mount_component(cloner, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cloner_changes = (dirty & /*$$props*/ 4)
			? get_spread_update(cloner_spread_levels, [get_spread_object(/*$$props*/ ctx[2])])
			: {};

			if (dirty & /*$$scope, position, index*/ 386) {
				cloner_changes.$$scope = { dirty, ctx };
			}

			cloner.$set(cloner_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cloner.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cloner.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(cloner, detaching);
		}
	};
}

function create_fragment(ctx) {
	let group;
	let current;

	group = new Group({
			props: {
				position: /*position*/ ctx[1],
				rotation: /*rotation*/ ctx[0],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(group.$$.fragment);
		},
		m(target, anchor) {
			mount_component(group, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const group_changes = {};
			if (dirty & /*position*/ 2) group_changes.position = /*position*/ ctx[1];
			if (dirty & /*rotation*/ 1) group_changes.rotation = /*rotation*/ ctx[0];

			if (dirty & /*$$scope, $$props, position*/ 134) {
				group_changes.$$scope = { dirty, ctx };
			}

			group.$set(group_changes);
		},
		i(local) {
			if (current) return;
			transition_in(group.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(group.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(group, detaching);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { position = [0, 0, 0] } = $$props;
	let { rotation = [0, 0, 0] } = $$props;
	let { instances = 2 } = $$props;
	let { spaceBetween = 0.75 } = $$props;
	let { direction = [0, 1, 0] } = $$props;

	$$self.$$set = $$new_props => {
		$$invalidate(2, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("position" in $$new_props) $$invalidate(1, position = $$new_props.position);
		if ("rotation" in $$new_props) $$invalidate(0, rotation = $$new_props.rotation);
		if ("instances" in $$new_props) $$invalidate(3, instances = $$new_props.instances);
		if ("spaceBetween" in $$new_props) $$invalidate(4, spaceBetween = $$new_props.spaceBetween);
		if ("direction" in $$new_props) $$invalidate(5, direction = $$new_props.direction);
		if ("$$scope" in $$new_props) $$invalidate(7, $$scope = $$new_props.$$scope);
	};

	$$props = exclude_internal_props($$props);

	return [
		rotation,
		position,
		$$props,
		instances,
		spaceBetween,
		direction,
		slots,
		$$scope
	];
}

class LinearCloner extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			position: 1,
			rotation: 0,
			instances: 3,
			spaceBetween: 4,
			direction: 5
		});
	}
}

export default LinearCloner;