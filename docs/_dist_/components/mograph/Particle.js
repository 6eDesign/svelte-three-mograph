/* src/components/mograph/Particle.svelte generated by Svelte v3.31.2 */
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
import { getContext, setContext, onDestroy } from "../../../web_modules/svelte.js";
import { Vector3 } from "../../../web_modules/three.js";
import { getParticle } from "../../stores/particles.js";

const get_default_slot_changes = dirty => ({
	position: dirty & /*posArray*/ 1,
	rotation: dirty & /*rotArray*/ 2
});

const get_default_slot_context = ctx => ({
	position: /*posArray*/ ctx[0],
	rotation: /*rotArray*/ ctx[1]
});

function create_fragment(ctx) {
	let current;
	const default_slot_template = /*#slots*/ ctx[11].default;
	const default_slot = create_slot(default_slot_template, ctx, /*$$scope*/ ctx[10], get_default_slot_context);

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
				if (default_slot.p && dirty & /*$$scope, posArray, rotArray*/ 1027) {
					update_slot(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[10], dirty, get_default_slot_changes, get_default_slot_context);
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
	let posArray;
	let rotArray;
	let $particle;
	let { $$slots: slots = {}, $$scope } = $$props;
	let { position = [0, 0, 0] } = $$props;
	let { rotation = [0, 0, 0] } = $$props;
	let { velocity = [0, 0, 0] } = $$props;
	let { rotationalVelocity = [0, 0, 0] } = $$props;
	let { forces = [] } = $$props;
	let { rotationalForces = [] } = $$props;

	const particle = getParticle({
		position,
		rotation,
		velocity,
		rotationalVelocity,
		forces,
		rotationalForces
	});

	component_subscribe($$self, particle, value => $$invalidate(9, $particle = value));
	setContext("particle", particle);
	const { time } = getContext("sceneCtx");
	const unsubscribe = time.subscribe(particle.tick);
	onDestroy(unsubscribe);

	$$self.$$set = $$props => {
		if ("position" in $$props) $$invalidate(3, position = $$props.position);
		if ("rotation" in $$props) $$invalidate(4, rotation = $$props.rotation);
		if ("velocity" in $$props) $$invalidate(5, velocity = $$props.velocity);
		if ("rotationalVelocity" in $$props) $$invalidate(6, rotationalVelocity = $$props.rotationalVelocity);
		if ("forces" in $$props) $$invalidate(7, forces = $$props.forces);
		if ("rotationalForces" in $$props) $$invalidate(8, rotationalForces = $$props.rotationalForces);
		if ("$$scope" in $$props) $$invalidate(10, $$scope = $$props.$$scope);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*$particle*/ 512) {
			$: $$invalidate(0, posArray = [$particle.position.x, $particle.position.y, $particle.position.z]);
		}

		if ($$self.$$.dirty & /*$particle*/ 512) {
			$: $$invalidate(1, rotArray = [$particle.rotation.x, $particle.rotation.y, $particle.rotation.z]);
		}
	};

	return [
		posArray,
		rotArray,
		particle,
		position,
		rotation,
		velocity,
		rotationalVelocity,
		forces,
		rotationalForces,
		$particle,
		$$scope,
		slots
	];
}

class Particle extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			position: 3,
			rotation: 4,
			velocity: 5,
			rotationalVelocity: 6,
			forces: 7,
			rotationalForces: 8
		});
	}
}

export default Particle;