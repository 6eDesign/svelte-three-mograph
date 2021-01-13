/* src/OrbitExample.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	check_outros,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	empty,
	group_outros,
	init,
	insert,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import {
	Scene,
	Material,
	numbers,
	lights,
	mograph,
	primitives
} from "./components/index.js";

import { Vector3 } from "../web_modules/three.js";
import { random, addVariance } from "./utils/index.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[22] = list[i];
	return child_ctx;
}

// (73:2) <Material color="#fff" metalness={0.8} roughness={0.7}>
function create_default_slot_4(ctx) {
	let icosahedron;
	let current;

	icosahedron = new /*Icosahedron*/ ctx[4]({
			props: {
				size: 1,
				rotation: /*rotation*/ ctx[25],
				position: /*position*/ ctx[0]
			}
		});

	return {
		c() {
			create_component(icosahedron.$$.fragment);
		},
		m(target, anchor) {
			mount_component(icosahedron, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const icosahedron_changes = {};
			if (dirty & /*rotation*/ 33554432) icosahedron_changes.rotation = /*rotation*/ ctx[25];
			if (dirty & /*position*/ 1) icosahedron_changes.position = /*position*/ ctx[0];
			icosahedron.$set(icosahedron_changes);
		},
		i(local) {
			if (current) return;
			transition_in(icosahedron.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icosahedron.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icosahedron, detaching);
		}
	};
}

// (72:0) <Forces rotationalVelocity={[0.03, 0.03, 0.03]} let:rotation let:position>
function create_default_slot_3(ctx) {
	let material;
	let current;

	material = new Material({
			props: {
				color: "#fff",
				metalness: 0.8,
				roughness: 0.7,
				$$slots: { default: [create_default_slot_4] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(material.$$.fragment);
		},
		m(target, anchor) {
			mount_component(material, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const material_changes = {};

			if (dirty & /*$$scope, rotation, position*/ 167772161) {
				material_changes.$$scope = { dirty, ctx };
			}

			material.$set(material_changes);
		},
		i(local) {
			if (current) return;
			transition_in(material.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(material.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(material, detaching);
		}
	};
}

// (88:6) <Material metalness={0.2} roughness={0.8} {color}>
function create_default_slot_2(ctx) {
	let icosahedron;
	let current;

	icosahedron = new /*Icosahedron*/ ctx[4]({
			props: {
				size: 0.01 + Math.random() * 0.05,
				position: /*position*/ ctx[0],
				rotation: /*rotation*/ ctx[25]
			}
		});

	return {
		c() {
			create_component(icosahedron.$$.fragment);
		},
		m(target, anchor) {
			mount_component(icosahedron, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const icosahedron_changes = {};
			if (dirty & /*position*/ 1) icosahedron_changes.position = /*position*/ ctx[0];
			if (dirty & /*rotation*/ 33554432) icosahedron_changes.rotation = /*rotation*/ ctx[25];
			icosahedron.$set(icosahedron_changes);
		},
		i(local) {
			if (current) return;
			transition_in(icosahedron.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(icosahedron.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(icosahedron, detaching);
		}
	};
}

// (87:4) <RandomColor let:color>
function create_default_slot_1(ctx) {
	let material;
	let t;
	let pointlight;
	let current;

	material = new Material({
			props: {
				metalness: 0.2,
				roughness: 0.8,
				color: /*color*/ ctx[26],
				$$slots: { default: [create_default_slot_2] },
				$$scope: { ctx }
			}
		});

	pointlight = new /*PointLight*/ ctx[3]({
			props: {
				position: /*position*/ ctx[0],
				intensity: 1,
				distance: 1.8,
				color: /*color*/ ctx[26]
			}
		});

	return {
		c() {
			create_component(material.$$.fragment);
			t = space();
			create_component(pointlight.$$.fragment);
		},
		m(target, anchor) {
			mount_component(material, target, anchor);
			insert(target, t, anchor);
			mount_component(pointlight, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const material_changes = {};
			if (dirty & /*color*/ 67108864) material_changes.color = /*color*/ ctx[26];

			if (dirty & /*$$scope, position, rotation*/ 167772161) {
				material_changes.$$scope = { dirty, ctx };
			}

			material.$set(material_changes);
			const pointlight_changes = {};
			if (dirty & /*position*/ 1) pointlight_changes.position = /*position*/ ctx[0];
			if (dirty & /*color*/ 67108864) pointlight_changes.color = /*color*/ ctx[26];
			pointlight.$set(pointlight_changes);
		},
		i(local) {
			if (current) return;
			transition_in(material.$$.fragment, local);
			transition_in(pointlight.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(material.$$.fragment, local);
			transition_out(pointlight.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(material, detaching);
			if (detaching) detach(t);
			destroy_component(pointlight, detaching);
		}
	};
}

// (79:2) <Forces     position={[orbiter.position.x, orbiter.position.y, orbiter.position.z]}     velocity={[orbiter.velocity.x, orbiter.velocity.y, orbiter.velocity.z]}     rotationalVelocity={[0.02, 0.02, 0.02]}     forces={[orbit(orbiter.radius, [0, 0, 0])]}     let:position     let:rotation   >
function create_default_slot(ctx) {
	let randomcolor;
	let t;
	let current;

	randomcolor = new /*RandomColor*/ ctx[1]({
			props: {
				$$slots: {
					default: [
						create_default_slot_1,
						({ color }) => ({ 26: color }),
						({ color }) => color ? 67108864 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(randomcolor.$$.fragment);
			t = space();
		},
		m(target, anchor) {
			mount_component(randomcolor, target, anchor);
			insert(target, t, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const randomcolor_changes = {};

			if (dirty & /*$$scope, position, color, rotation*/ 234881025) {
				randomcolor_changes.$$scope = { dirty, ctx };
			}

			randomcolor.$set(randomcolor_changes);
		},
		i(local) {
			if (current) return;
			transition_in(randomcolor.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(randomcolor.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(randomcolor, detaching);
			if (detaching) detach(t);
		}
	};
}

// (78:0) {#each orbiters as orbiter}
function create_each_block(ctx) {
	let forces;
	let current;

	forces = new /*Forces*/ ctx[2]({
			props: {
				position: [
					/*orbiter*/ ctx[22].position.x,
					/*orbiter*/ ctx[22].position.y,
					/*orbiter*/ ctx[22].position.z
				],
				velocity: [
					/*orbiter*/ ctx[22].velocity.x,
					/*orbiter*/ ctx[22].velocity.y,
					/*orbiter*/ ctx[22].velocity.z
				],
				rotationalVelocity: [0.02, 0.02, 0.02],
				forces: [/*orbit*/ ctx[6](/*orbiter*/ ctx[22].radius, [0, 0, 0])],
				$$slots: {
					default: [
						create_default_slot,
						({ position, rotation }) => ({ 0: position, 25: rotation }),
						({ position, rotation }) => (position ? 1 : 0) | (rotation ? 33554432 : 0)
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(forces.$$.fragment);
		},
		m(target, anchor) {
			mount_component(forces, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const forces_changes = {};

			if (dirty & /*$$scope, position, rotation*/ 167772161) {
				forces_changes.$$scope = { dirty, ctx };
			}

			forces.$set(forces_changes);
		},
		i(local) {
			if (current) return;
			transition_in(forces.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(forces.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(forces, detaching);
		}
	};
}

function create_fragment(ctx) {
	let forces;
	let t;
	let each_1_anchor;
	let current;

	forces = new /*Forces*/ ctx[2]({
			props: {
				rotationalVelocity: [0.03, 0.03, 0.03],
				$$slots: {
					default: [
						create_default_slot_3,
						({ rotation, position }) => ({ 25: rotation, 0: position }),
						({ rotation, position }) => (rotation ? 33554432 : 0) | (position ? 1 : 0)
					]
				},
				$$scope: { ctx }
			}
		});

	let each_value = /*orbiters*/ ctx[5];
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			create_component(forces.$$.fragment);
			t = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			each_1_anchor = empty();
		},
		m(target, anchor) {
			mount_component(forces, target, anchor);
			insert(target, t, anchor);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(target, anchor);
			}

			insert(target, each_1_anchor, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const forces_changes = {};

			if (dirty & /*$$scope, rotation, position*/ 167772161) {
				forces_changes.$$scope = { dirty, ctx };
			}

			forces.$set(forces_changes);

			if (dirty & /*orbiters, orbit, position, color, Math, rotation*/ 100663393) {
				each_value = /*orbiters*/ ctx[5];
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
			transition_in(forces.$$.fragment, local);

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			transition_out(forces.$$.fragment, local);
			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			destroy_component(forces, detaching);
			if (detaching) detach(t);
			destroy_each(each_blocks, detaching);
			if (detaching) detach(each_1_anchor);
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	const { RandomColor } = numbers;
	const { Emitter, Forces } = mograph;
	const { PointLight } = lights;
	const { Cube, Icosahedron, Octahedron, Sphere, Tetrahedron, Torus, TorusKnot } = primitives;
	let { position = [0, 0, 0] } = $$props;
	let { radius = 1.6 } = $$props;
	let { orbitingCount = 18 } = $$props;
	let { velocity = 0.01 } = $$props;
	let { velocityVariance = 0.09 } = $$props;
	let { radiusVariance = 0.8 } = $$props;
	const varyRadius = addVariance(radiusVariance);
	const varyVelocity = addVariance(velocityVariance);
	const randomUnitVector = () => new Vector3(random(1), random(1), random(1)).normalize();

	const orbiters = new Array(orbitingCount).fill(0).map(() => {
		const center = new Vector3(...position);
		const orbitingRadius = varyRadius(radius);
		const orbitingVelocityScalar = varyVelocity(velocity);
		const orbitingPosition = center.clone().add(randomUnitVector().multiplyScalar(orbitingRadius));
		const orbitingVelocity = randomUnitVector().cross(center.clone().sub(orbitingPosition)).normalize().multiplyScalar(orbitingVelocityScalar);

		return {
			position: orbitingPosition,
			velocity: orbitingVelocity,
			radius: orbitingRadius
		};
	});

	const orbit = (radius, center) => particle => {
		const direction = particle.getVector(...center).sub(particle.position).normalize();
		return direction.multiplyScalar(Math.pow(particle.velocity.length(), 2) / radius);
	};

	$$self.$$set = $$props => {
		if ("position" in $$props) $$invalidate(0, position = $$props.position);
		if ("radius" in $$props) $$invalidate(7, radius = $$props.radius);
		if ("orbitingCount" in $$props) $$invalidate(8, orbitingCount = $$props.orbitingCount);
		if ("velocity" in $$props) $$invalidate(9, velocity = $$props.velocity);
		if ("velocityVariance" in $$props) $$invalidate(10, velocityVariance = $$props.velocityVariance);
		if ("radiusVariance" in $$props) $$invalidate(11, radiusVariance = $$props.radiusVariance);
	};

	return [
		position,
		RandomColor,
		Forces,
		PointLight,
		Icosahedron,
		orbiters,
		orbit,
		radius,
		orbitingCount,
		velocity,
		velocityVariance,
		radiusVariance
	];
}

class OrbitExample extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			position: 0,
			radius: 7,
			orbitingCount: 8,
			velocity: 9,
			velocityVariance: 10,
			radiusVariance: 11
		});
	}
}

export default OrbitExample;