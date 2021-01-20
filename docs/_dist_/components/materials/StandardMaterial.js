/* src/components/materials/StandardMaterial.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	assign,
	create_slot,
	exclude_internal_props,
	init,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { MeshStandardMaterial } from "../../../web_modules/three.js";
import { setContext } from "../../../web_modules/svelte.js";
import { writable } from "../../../web_modules/svelte/store.js";

function create_fragment(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[4].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[3], null);

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
				if (default_slot.p && dirty & /*$$scope*/ 8) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[3], dirty, null, null);
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
	let { metalness = 0.8 } = $$props;
	let { roughness = 0.2 } = $$props;
	let { color = Math.random() * 16777215 } = $$props;
	const material = new MeshStandardMaterial({ metalness, roughness, color, ...$$props });
	setContext("material", material);

	$$self.$$set = $$new_props => {
		$$invalidate(6, $$props = assign(assign({}, $$props), exclude_internal_props($$new_props)));
		if ("metalness" in $$new_props) $$invalidate(0, metalness = $$new_props.metalness);
		if ("roughness" in $$new_props) $$invalidate(1, roughness = $$new_props.roughness);
		if ("color" in $$new_props) $$invalidate(2, color = $$new_props.color);
		if ("$$scope" in $$new_props) $$invalidate(3, $$scope = $$new_props.$$scope);
	};

	$$self.$$.update = () => {
		$: Object.entries($$props, ([key, val]) => {
			update(mat => {
				mat[key] = val;
				return mat;
			});
		});
	};

	$$props = exclude_internal_props($$props);
	return [metalness, roughness, color, $$scope, slots];
}

class StandardMaterial extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { metalness: 0, roughness: 1, color: 2 });
	}
}

export default StandardMaterial;