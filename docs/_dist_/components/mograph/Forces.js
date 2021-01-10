/* src/components/mograph/Forces.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	component_subscribe,
	create_slot,
	init,
	safe_not_equal,
	transition_in,
	transition_out,
	update_slot
} from "../../../web_modules/svelte/internal.js";

import { writable } from "../../../web_modules/svelte/store.js";
import { getContext, setContext } from "../../../web_modules/svelte.js";
import { Vector3 } from "../../../web_modules/three.js";

const get_default_slot_changes = dirty => ({
	position: dirty & /*$forceCtx*/ 1,
	rotation: dirty & /*$forceCtx*/ 1
});

const get_default_slot_context = ctx => ({
	position: /*$forceCtx*/ ctx[0].position,
	rotation: /*$forceCtx*/ ctx[0].rotation
});

function create_fragment(ctx) {
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
		p(ctx, [dirty]) {
			if (default_slot) {
				if (default_slot.p && dirty & /*$$scope, $forceCtx*/ 257) {
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

function instance($$self, $$props, $$invalidate) {
	let combinedForces;
	let $forceCtx;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { forces = [] } = $$props;
	let { position = [0, 0, 0] } = $$props;
	let { rotation = [0, 0, 0] } = $$props;
	let { velocity = [0, 0, 0] } = $$props;
	let { rotationalVelocity = [0, 0, 0] } = $$props;

	const { subscribe, update, set } = writable({
		directionalForce: new Vector3(),
		rotationalForce: new Vector3(),
		position: new Vector3(...position),
		rotation: new Vector3(...rotation),
		velocity: new Vector3(...velocity),
		rotationalVelocity: new Vector3(...rotationalVelocity)
	});

	const forceCtx = {
		subscribe,
		tick: () => update(({ directionalForce, rotationalForce, position, rotation, velocity, rotationalVelocity }) => {
			velocity.add(directionalForce);
			rotationalVelocity.add(rotationalForce);

			return {
				directionalForce,
				rotationalForce,
				velocity,
				rotationalVelocity,
				position: position.add(velocity),
				rotation: rotation.add(rotationalVelocity)
			};
		})
	};

	component_subscribe($$self, forceCtx, value => $$invalidate(0, $forceCtx = value));
	const { time } = getContext("sceneCtx");
	time.subscribe(forceCtx.tick);
	setContext("forceCtx", forceCtx);

	$$self.$$set = $$props => {
		if ("forces" in $$props) $$invalidate(2, forces = $$props.forces);
		if ("position" in $$props) $$invalidate(3, position = $$props.position);
		if ("rotation" in $$props) $$invalidate(4, rotation = $$props.rotation);
		if ("velocity" in $$props) $$invalidate(5, velocity = $$props.velocity);
		if ("rotationalVelocity" in $$props) $$invalidate(6, rotationalVelocity = $$props.rotationalVelocity);
		if ("$$scope" in $$props) $$invalidate(8, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*forces*/ 4) {
			$: $$invalidate(7, combinedForces = forces.reduce(
				({ directional, rotational }, { direction, rotation }) => ({
					directional: directional.add(new Vector3(...direction)),
					rotational: rotational.add(new Vector3(...rotation))
				}),
				{
					directional: new Vector3(),
					rotational: new Vector3()
				}
			));
		}

		if ($$self.$$.dirty & /*combinedForces*/ 128) {
			$: update(state => ({
				...state,
				directionalForce: combinedForces.directional,
				rotationalForce: combinedForces.rotational
			}));
		}
	};

	return [
		$forceCtx,
		forceCtx,
		forces,
		position,
		rotation,
		velocity,
		rotationalVelocity,
		combinedForces,
		$$scope,
		slots
	];
}

class Forces extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			forces: 2,
			position: 3,
			rotation: 4,
			velocity: 5,
			rotationalVelocity: 6
		});
	}
}

export default Forces;