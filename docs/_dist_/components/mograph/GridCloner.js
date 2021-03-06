/* src/components/mograph/GridCloner.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	create_component,
	create_slot,
	destroy_component,
	init,
	mount_component,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import Group from "./Group.js";
import Cloner from "./Cloner.js";
const get_default_slot_changes = dirty => ({ position: dirty & /*position*/ 8 });
const get_default_slot_context = ctx => ({ position: /*position*/ ctx[3] });

// (26:10) <Cloner             direction={[1, 0, 0]}             instances={instances[2]}             {spaceBetween}             let:position           >
function create_default_slot_5(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[5], get_default_slot_context);

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
				if (default_slot.p && dirty & /*$$scope, position*/ 40) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[5], dirty, get_default_slot_changes, get_default_slot_context);
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

// (25:8) <Group {position}>
function create_default_slot_4(ctx) {
	let cloner;
	let current;

	cloner = new Cloner({
			props: {
				direction: [1, 0, 0],
				instances: /*instances*/ ctx[1][2],
				spaceBetween: /*spaceBetween*/ ctx[2],
				$$slots: {
					default: [
						create_default_slot_5,
						({ position }) => ({ 3: position }),
						({ position }) => position ? 8 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cloner.$$.fragment);
		},
		m(target, anchor) {
			mount_component(cloner, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cloner_changes = {};
			if (dirty & /*instances*/ 2) cloner_changes.instances = /*instances*/ ctx[1][2];
			if (dirty & /*spaceBetween*/ 4) cloner_changes.spaceBetween = /*spaceBetween*/ ctx[2];

			if (dirty & /*$$scope, position*/ 40) {
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

// (19:6) <Cloner         direction={[0, 1, 0]}         instances={instances[1]}         {spaceBetween}         let:position       >
function create_default_slot_3(ctx) {
	let group;
	let current;

	group = new Group({
			props: {
				position: /*position*/ ctx[3],
				$$slots: { default: [create_default_slot_4] },
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
		p(ctx, dirty) {
			const group_changes = {};
			if (dirty & /*position*/ 8) group_changes.position = /*position*/ ctx[3];

			if (dirty & /*$$scope, instances, spaceBetween, position*/ 46) {
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

// (18:4) <Group {position}>
function create_default_slot_2(ctx) {
	let cloner;
	let current;

	cloner = new Cloner({
			props: {
				direction: [0, 1, 0],
				instances: /*instances*/ ctx[1][1],
				spaceBetween: /*spaceBetween*/ ctx[2],
				$$slots: {
					default: [
						create_default_slot_3,
						({ position }) => ({ 3: position }),
						({ position }) => position ? 8 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cloner.$$.fragment);
		},
		m(target, anchor) {
			mount_component(cloner, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cloner_changes = {};
			if (dirty & /*instances*/ 2) cloner_changes.instances = /*instances*/ ctx[1][1];
			if (dirty & /*spaceBetween*/ 4) cloner_changes.spaceBetween = /*spaceBetween*/ ctx[2];

			if (dirty & /*$$scope, position, instances, spaceBetween*/ 46) {
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

// (12:2) <Cloner     direction={[0, 0, 1]}     instances={instances[0]}     {spaceBetween}     let:position   >
function create_default_slot_1(ctx) {
	let group;
	let current;

	group = new Group({
			props: {
				position: /*position*/ ctx[3],
				$$slots: { default: [create_default_slot_2] },
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
		p(ctx, dirty) {
			const group_changes = {};
			if (dirty & /*position*/ 8) group_changes.position = /*position*/ ctx[3];

			if (dirty & /*$$scope, instances, spaceBetween, position*/ 46) {
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

// (11:0) <Group {position} {rotation}>
function create_default_slot(ctx) {
	let cloner;
	let current;

	cloner = new Cloner({
			props: {
				direction: [0, 0, 1],
				instances: /*instances*/ ctx[1][0],
				spaceBetween: /*spaceBetween*/ ctx[2],
				$$slots: {
					default: [
						create_default_slot_1,
						({ position }) => ({ 3: position }),
						({ position }) => position ? 8 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(cloner.$$.fragment);
		},
		m(target, anchor) {
			mount_component(cloner, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cloner_changes = {};
			if (dirty & /*instances*/ 2) cloner_changes.instances = /*instances*/ ctx[1][0];
			if (dirty & /*spaceBetween*/ 4) cloner_changes.spaceBetween = /*spaceBetween*/ ctx[2];

			if (dirty & /*$$scope, position, instances, spaceBetween*/ 46) {
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
				position: /*position*/ ctx[3],
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
			if (dirty & /*position*/ 8) group_changes.position = /*position*/ ctx[3];
			if (dirty & /*rotation*/ 1) group_changes.rotation = /*rotation*/ ctx[0];

			if (dirty & /*$$scope, instances, spaceBetween, position*/ 46) {
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
	let { instances = [1, 1, 1] } = $$props;
	let { spaceBetween = 0.75 } = $$props;

	$$self.$$set = $$props => {
		if ("position" in $$props) $$invalidate(3, position = $$props.position);
		if ("rotation" in $$props) $$invalidate(0, rotation = $$props.rotation);
		if ("instances" in $$props) $$invalidate(1, instances = $$props.instances);
		if ("spaceBetween" in $$props) $$invalidate(2, spaceBetween = $$props.spaceBetween);
		if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
	};

	return [rotation, instances, spaceBetween, position, slots, $$scope];
}

class GridCloner extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			position: 3,
			rotation: 0,
			instances: 1,
			spaceBetween: 2
		});
	}
}

export default GridCloner;