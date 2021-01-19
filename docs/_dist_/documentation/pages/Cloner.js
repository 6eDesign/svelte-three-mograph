/* src/documentation/pages/Cloner.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	add_flush_callback,
	bind,
	binding_callbacks,
	create_component,
	destroy_component,
	detach,
	init,
	insert,
	mount_component,
	noop,
	safe_not_equal,
	space,
	subscribe,
	transition_in,
	transition_out
} from "../../../web_modules/svelte/internal.js";

import { getContext, onDestroy } from "../../../web_modules/svelte.js";
import { Material, mograph, primitives } from "../../components/index.js";
import AmbientLight from "../../components/lights/AmbientLight.js";
import DirectionalLight from "../../components/lights/DirectionalLight.js";
import Group from "../../components/mograph/Group.js";
import Particle from "../../components/mograph/Particle.js";
import Scene from "../../components/Scene.js";
import OrbitExample from "../../OrbitExample.js";

function create_default_slot_6(ctx) {
	let cube;
	let current;

	cube = new /*Cube*/ ctx[4]({
			props: {
				size: cubeSize,
				position: /*position*/ ctx[12]
			}
		});

	return {
		c() {
			create_component(cube.$$.fragment);
		},
		m(target, anchor) {
			mount_component(cube, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const cube_changes = {};
			if (dirty & /*position*/ 4096) cube_changes.position = /*position*/ ctx[12];
			cube.$set(cube_changes);
		},
		i(local) {
			if (current) return;
			transition_in(cube.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(cube.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(cube, detaching);
		}
	};
}

// (40:4) <GridCloner instances={[7, 7, 7]} {spaceBetween} {rotation} let:position>
function create_default_slot_5(ctx) {
	let material;
	let current;

	material = new Material({
			props: {
				metalness: 0.8,
				roughness: 0.56,
				color: "#fff",
				$$slots: { default: [create_default_slot_6] },
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

			if (dirty & /*$$scope, position*/ 20480) {
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

// (60:8) <Particle           rotationalVelocity={[             Math.random() * 0.03,             Math.random() * 0.03,             Math.random() * 0.03,           ]}           let:rotation         >
function create_default_slot_4(ctx) {
	let torus;
	let current;

	torus = new /*Torus*/ ctx[5]({
			props: {
				position: /*position*/ ctx[12],
				rotation: /*rotation*/ ctx[3],
				radialSegments: 4,
				tubularSegments: 60,
				radius: 4.7 * (1 - /*index*/ ctx[13] * 0.04),
				tube: 0.04
			}
		});

	return {
		c() {
			create_component(torus.$$.fragment);
		},
		m(target, anchor) {
			mount_component(torus, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const torus_changes = {};
			if (dirty & /*position*/ 4096) torus_changes.position = /*position*/ ctx[12];
			if (dirty & /*rotation*/ 8) torus_changes.rotation = /*rotation*/ ctx[3];
			if (dirty & /*index*/ 8192) torus_changes.radius = 4.7 * (1 - /*index*/ ctx[13] * 0.04);
			torus.$set(torus_changes);
		},
		i(local) {
			if (current) return;
			transition_in(torus.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(torus.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(torus, detaching);
		}
	};
}

// (53:6) <Material         color="#fff"         metalness={0.85}         roughness={0.7}         opacity={0.6}         transparent={true}       >
function create_default_slot_3(ctx) {
	let particle;
	let current;

	particle = new Particle({
			props: {
				rotationalVelocity: [Math.random() * 0.03, Math.random() * 0.03, Math.random() * 0.03],
				$$slots: {
					default: [
						create_default_slot_4,
						({ rotation }) => ({ 3: rotation }),
						({ rotation }) => rotation ? 8 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(particle.$$.fragment);
		},
		m(target, anchor) {
			mount_component(particle, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const particle_changes = {};

			if (dirty & /*$$scope, position, rotation, index*/ 28680) {
				particle_changes.$$scope = { dirty, ctx };
			}

			particle.$set(particle_changes);
		},
		i(local) {
			if (current) return;
			transition_in(particle.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(particle.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(particle, detaching);
		}
	};
}

// (46:4) <LinearCloner       instances={14}       spaceBetween={0}       direction={[0, 0, 1]}       let:position       let:index     >
function create_default_slot_2(ctx) {
	let material;
	let current;

	material = new Material({
			props: {
				color: "#fff",
				metalness: 0.85,
				roughness: 0.7,
				opacity: 0.6,
				transparent: true,
				$$slots: { default: [create_default_slot_3] },
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

			if (dirty & /*$$scope, position, rotation, index*/ 28680) {
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

// (38:2) <Group position={[0, 0, 0]}>
function create_default_slot_1(ctx) {
	let orbitexample;
	let t0;
	let gridcloner;
	let t1;
	let linearcloner;
	let current;
	orbitexample = new OrbitExample({});

	gridcloner = new /*GridCloner*/ ctx[7]({
			props: {
				instances: [7, 7, 7],
				spaceBetween: /*spaceBetween*/ ctx[1],
				rotation: /*rotation*/ ctx[3],
				$$slots: {
					default: [
						create_default_slot_5,
						({ position }) => ({ 12: position }),
						({ position }) => position ? 4096 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	linearcloner = new /*LinearCloner*/ ctx[6]({
			props: {
				instances: 14,
				spaceBetween: 0,
				direction: [0, 0, 1],
				$$slots: {
					default: [
						create_default_slot_2,
						({ position, index }) => ({ 12: position, 13: index }),
						({ position, index }) => (position ? 4096 : 0) | (index ? 8192 : 0)
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(orbitexample.$$.fragment);
			t0 = space();
			create_component(gridcloner.$$.fragment);
			t1 = space();
			create_component(linearcloner.$$.fragment);
		},
		m(target, anchor) {
			mount_component(orbitexample, target, anchor);
			insert(target, t0, anchor);
			mount_component(gridcloner, target, anchor);
			insert(target, t1, anchor);
			mount_component(linearcloner, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const gridcloner_changes = {};
			if (dirty & /*spaceBetween*/ 2) gridcloner_changes.spaceBetween = /*spaceBetween*/ ctx[1];
			if (dirty & /*rotation*/ 8) gridcloner_changes.rotation = /*rotation*/ ctx[3];

			if (dirty & /*$$scope, position*/ 20480) {
				gridcloner_changes.$$scope = { dirty, ctx };
			}

			gridcloner.$set(gridcloner_changes);
			const linearcloner_changes = {};

			if (dirty & /*$$scope, position, rotation, index*/ 28680) {
				linearcloner_changes.$$scope = { dirty, ctx };
			}

			linearcloner.$set(linearcloner_changes);
		},
		i(local) {
			if (current) return;
			transition_in(orbitexample.$$.fragment, local);
			transition_in(gridcloner.$$.fragment, local);
			transition_in(linearcloner.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(orbitexample.$$.fragment, local);
			transition_out(gridcloner.$$.fragment, local);
			transition_out(linearcloner.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(orbitexample, detaching);
			if (detaching) detach(t0);
			destroy_component(gridcloner, detaching);
			if (detaching) detach(t1);
			destroy_component(linearcloner, detaching);
		}
	};
}

// (34:0) <Scene {width} height={450} bind:time background="#67727e">
function create_default_slot(ctx) {
	let ambientlight;
	let t0;
	let directionallight;
	let t1;
	let group;
	let current;
	ambientlight = new AmbientLight({ props: { intensity: 0.3 } });
	directionallight = new DirectionalLight({});

	group = new Group({
			props: {
				position: [0, 0, 0],
				$$slots: { default: [create_default_slot_1] },
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(ambientlight.$$.fragment);
			t0 = space();
			create_component(directionallight.$$.fragment);
			t1 = space();
			create_component(group.$$.fragment);
		},
		m(target, anchor) {
			mount_component(ambientlight, target, anchor);
			insert(target, t0, anchor);
			mount_component(directionallight, target, anchor);
			insert(target, t1, anchor);
			mount_component(group, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const group_changes = {};

			if (dirty & /*$$scope, rotation, spaceBetween*/ 16394) {
				group_changes.$$scope = { dirty, ctx };
			}

			group.$set(group_changes);
		},
		i(local) {
			if (current) return;
			transition_in(ambientlight.$$.fragment, local);
			transition_in(directionallight.$$.fragment, local);
			transition_in(group.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(ambientlight.$$.fragment, local);
			transition_out(directionallight.$$.fragment, local);
			transition_out(group.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(ambientlight, detaching);
			if (detaching) detach(t0);
			destroy_component(directionallight, detaching);
			if (detaching) detach(t1);
			destroy_component(group, detaching);
		}
	};
}

function create_fragment(ctx) {
	let scene;
	let updating_time;
	let current;

	function scene_time_binding(value) {
		/*scene_time_binding*/ ctx[11].call(null, value);
	}

	let scene_props = {
		width: /*width*/ ctx[0],
		height: 450,
		background: "#67727e",
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*time*/ ctx[2] !== void 0) {
		scene_props.time = /*time*/ ctx[2];
	}

	scene = new Scene({ props: scene_props });
	binding_callbacks.push(() => bind(scene, "time", scene_time_binding));

	return {
		c() {
			create_component(scene.$$.fragment);
		},
		m(target, anchor) {
			mount_component(scene, target, anchor);
			current = true;
		},
		p(ctx, [dirty]) {
			const scene_changes = {};
			if (dirty & /*width*/ 1) scene_changes.width = /*width*/ ctx[0];

			if (dirty & /*$$scope, rotation, spaceBetween*/ 16394) {
				scene_changes.$$scope = { dirty, ctx };
			}

			if (!updating_time && dirty & /*time*/ 4) {
				updating_time = true;
				scene_changes.time = /*time*/ ctx[2];
				add_flush_callback(() => updating_time = false);
			}

			scene.$set(scene_changes);
		},
		i(local) {
			if (current) return;
			transition_in(scene.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(scene.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(scene, detaching);
		}
	};
}

const spaceBetweenVariance = 0.01;
const cubeSize = 0.35;

function instance($$self, $$props, $$invalidate) {
	let medianSpaceBetween;

	let $time,
		$$unsubscribe_time = noop,
		$$subscribe_time = () => ($$unsubscribe_time(), $$unsubscribe_time = subscribe(time, $$value => $$invalidate(10, $time = $$value)), time);

	$$self.$$.on_destroy.push(() => $$unsubscribe_time());
	const { Cube, Torus } = primitives;
	const { LinearCloner, GridCloner } = mograph;
	let { width } = $$props;
	let { height } = $$props;
	let rotation = [0.8, 0.8, 0.8];
	let spaceBetween = 1;
	let time;

	function scene_time_binding(value) {
		time = value;
		$$subscribe_time($$invalidate(2, time));
	}

	$$self.$$set = $$props => {
		if ("width" in $$props) $$invalidate(0, width = $$props.width);
		if ("height" in $$props) $$invalidate(8, height = $$props.height);
	};

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*time, medianSpaceBetween, rotation, $time*/ 1548) {
			$: if (time && medianSpaceBetween) {
				$$invalidate(3, rotation = rotation.map(n => n += 0.01));
				$$invalidate(1, spaceBetween = medianSpaceBetween + Math.sin($time / 600) * spaceBetweenVariance);
			}
		}

		if ($$self.$$.dirty & /*spaceBetween*/ 2) {
			$: console.log(spaceBetween);
		}
	};

	$: $$invalidate(9, medianSpaceBetween = cubeSize + spaceBetweenVariance + 0.005);

	return [
		width,
		spaceBetween,
		time,
		rotation,
		Cube,
		Torus,
		LinearCloner,
		GridCloner,
		height,
		medianSpaceBetween,
		$time,
		scene_time_binding
	];
}

class Cloner extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { width: 0, height: 8 });
	}
}

export default Cloner;