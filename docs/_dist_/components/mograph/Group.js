/* src/components/mograph/Group.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	create_slot,
	init,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { getContext, setContext } from "../../../web_modules/svelte.js";
import { writable } from "../../../web_modules/svelte/store.js";
import { Group } from "../../../web_modules/three.js";
const get_default_slot_changes = dirty => ({ group: dirty & /*group*/ 1 });
const get_default_slot_context = ctx => ({ group: /*group*/ ctx[0] });

function create_fragment(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], get_default_slot_context);

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
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, group*/ 9) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, get_default_slot_changes, get_default_slot_context);
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

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	let { position = [0, 0, 0] } = $$props;
	let { rotation = [0, 0, 0] } = $$props;
	let { group = new Group() } = $$props;
	const parent = getContext("group");
	setContext("group", group);
	const sceneCtx = getContext("sceneCtx");
	parent ? parent.add(group) : sceneCtx.scene.add(group);

	$$self.$$set = $$props => {
		if ("position" in $$props) $$invalidate(1, position = $$props.position);
		if ("rotation" in $$props) $$invalidate(2, rotation = $$props.rotation);
		if ("group" in $$props) $$invalidate(0, group = $$props.group);
		if ("$$scope" in $$props) $$invalidate(3, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*group, position*/ 3) {
			$: group.position.set(...position);
		}

		if ($$self.$$.dirty & /*group, rotation*/ 5) {
			$: group.rotation.set(...rotation);
		}
	};

	return [group, position, rotation, $$scope, slots];
}

class Group_1 extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { position: 1, rotation: 2, group: 0 });
	}
}

export default Group_1;