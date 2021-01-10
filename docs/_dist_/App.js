import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	add_flush_callback,
	add_render_callback,
	bind,
	binding_callbacks,
	check_outros,
	create_component,
	destroy_component,
	detach,
	empty,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	safe_not_equal,
	space,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import Scene from "./components/Scene.js";
import { Emitter, Forces } from "./components/mograph/index.js";

import {
	Cube,
	Icosahedron,
	Octahedron,
	Sphere,
	Tetrahedron,
	Torus,
	TorusKnot
} from "./components/primitives/index.js";

import { AmbientLight, DirectionalLight } from "./components/lights/index.js";

function create_if_block(ctx) {
	let scene;
	let updating_ctx;
	let current;

	function scene_ctx_binding(value) {
		/*scene_ctx_binding*/ ctx[6].call(null, value);
	}

	let scene_props = {
		background: "#111",
		width: /*width*/ ctx[1],
		height: /*height*/ ctx[2],
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	};

	if (/*sceneCtx*/ ctx[0] !== void 0) {
		scene_props.ctx = /*sceneCtx*/ ctx[0];
	}

	scene = new Scene({ props: scene_props });
	binding_callbacks.push(() => bind(scene, "ctx", scene_ctx_binding));

	return {
		c() {
			create_component(scene.$$.fragment);
		},
		m(target, anchor) {
			mount_component(scene, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const scene_changes = {};
			if (dirty & /*width*/ 2) scene_changes.width = /*width*/ ctx[1];
			if (dirty & /*height*/ 4) scene_changes.height = /*height*/ ctx[2];

			if (dirty & /*$$scope, emitterPosition*/ 520) {
				scene_changes.$$scope = { dirty, ctx };
			}

			if (!updating_ctx && dirty & /*sceneCtx*/ 1) {
				updating_ctx = true;
				scene_changes.ctx = /*sceneCtx*/ ctx[0];
				add_flush_callback(() => updating_ctx = false);
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

// (37:4) <Emitter       let:position       let:rotation       position={emitterPosition}       size={[0.5, 0.5, 0.5]}       particlesPerSecond={50}       velocity={0.14}       direction={[0, 2, 1]}       forces={[gravity]}       directionVariance={0.4}       lifespan={3000}     >
function create_default_slot_2(ctx) {
	let icosahedron;
	let current;

	icosahedron = new Icosahedron({
			props: {
				size: 0.09,
				position: /*position*/ ctx[8],
				rotation: /*rotation*/ ctx[7]
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
			if (dirty & /*position*/ 256) icosahedron_changes.position = /*position*/ ctx[8];
			if (dirty & /*rotation*/ 128) icosahedron_changes.rotation = /*rotation*/ ctx[7];
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

// (52:4) <Forces       rotation={[0.2, 0.2, 0.2]}       velocity={[0, 0, 0]}       rotationalVelocity={[0.02, 0.02, 0.09]}       let:rotation     >
function create_default_slot_1(ctx) {
	let cube;
	let current;

	cube = new Cube({
			props: {
				color: "#f7901e",
				size: 1,
				rotation: /*rotation*/ ctx[7],
				position: [0, 0, -2]
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
			if (dirty & /*rotation*/ 128) cube_changes.rotation = /*rotation*/ ctx[7];
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

// (34:2) <Scene background="#111" {width} {height} bind:ctx={sceneCtx}>
function create_default_slot(ctx) {
	let ambientlight;
	let t0;
	let directionallight;
	let t1;
	let emitter;
	let t2;
	let forces;
	let current;
	ambientlight = new AmbientLight({});
	directionallight = new DirectionalLight({});

	emitter = new Emitter({
			props: {
				position: /*emitterPosition*/ ctx[3],
				size: [0.5, 0.5, 0.5],
				particlesPerSecond: 50,
				velocity: 0.14,
				direction: [0, 2, 1],
				forces: [/*gravity*/ ctx[4]],
				directionVariance: 0.4,
				lifespan: 3000,
				$$slots: {
					default: [
						create_default_slot_2,
						({ position, rotation }) => ({ 8: position, 7: rotation }),
						({ position, rotation }) => (position ? 256 : 0) | (rotation ? 128 : 0)
					]
				},
				$$scope: { ctx }
			}
		});

	forces = new Forces({
			props: {
				rotation: [0.2, 0.2, 0.2],
				velocity: [0, 0, 0],
				rotationalVelocity: [0.02, 0.02, 0.09],
				$$slots: {
					default: [
						create_default_slot_1,
						({ rotation }) => ({ 7: rotation }),
						({ rotation }) => rotation ? 128 : 0
					]
				},
				$$scope: { ctx }
			}
		});

	return {
		c() {
			create_component(ambientlight.$$.fragment);
			t0 = space();
			create_component(directionallight.$$.fragment);
			t1 = space();
			create_component(emitter.$$.fragment);
			t2 = space();
			create_component(forces.$$.fragment);
		},
		m(target, anchor) {
			mount_component(ambientlight, target, anchor);
			insert(target, t0, anchor);
			mount_component(directionallight, target, anchor);
			insert(target, t1, anchor);
			mount_component(emitter, target, anchor);
			insert(target, t2, anchor);
			mount_component(forces, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const emitter_changes = {};
			if (dirty & /*emitterPosition*/ 8) emitter_changes.position = /*emitterPosition*/ ctx[3];

			if (dirty & /*$$scope, position, rotation*/ 896) {
				emitter_changes.$$scope = { dirty, ctx };
			}

			emitter.$set(emitter_changes);
			const forces_changes = {};

			if (dirty & /*$$scope, rotation*/ 640) {
				forces_changes.$$scope = { dirty, ctx };
			}

			forces.$set(forces_changes);
		},
		i(local) {
			if (current) return;
			transition_in(ambientlight.$$.fragment, local);
			transition_in(directionallight.$$.fragment, local);
			transition_in(emitter.$$.fragment, local);
			transition_in(forces.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(ambientlight.$$.fragment, local);
			transition_out(directionallight.$$.fragment, local);
			transition_out(emitter.$$.fragment, local);
			transition_out(forces.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(ambientlight, detaching);
			if (detaching) detach(t0);
			destroy_component(directionallight, detaching);
			if (detaching) detach(t1);
			destroy_component(emitter, detaching);
			if (detaching) detach(t2);
			destroy_component(forces, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[5]);
	let if_block = /*width*/ ctx[1] && /*height*/ ctx[2] && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(window, "resize", /*onwindowresize*/ ctx[5]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*width*/ ctx[1] && /*height*/ ctx[2]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*width, height*/ 6) {
						transition_in(if_block, 1);
					}
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					transition_in(if_block, 1);
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				group_outros();

				transition_out(if_block, 1, 1, () => {
					if_block = null;
				});

				check_outros();
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block);
			current = true;
		},
		o(local) {
			transition_out(if_block);
			current = false;
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let width;
	let height;
	let sceneCtx;
	const emitterPosition = [0, 0, -10];

	const gravity = {
		direction: [0, -0.01, 0],
		rotation: [0, 0, 0]
	};

	function onwindowresize() {
		$$invalidate(1, width = window.innerWidth)
		$$invalidate(2, height = window.innerHeight)
	}

	function scene_ctx_binding(value) {
		sceneCtx = value;
		$$invalidate(0, sceneCtx);
	}

	$$self.$$.update = () => {
		if ($$self.$$.dirty & /*sceneCtx*/ 1) {
			$: sceneCtx && sceneCtx.time.subscribe(t => {
				$$invalidate(3, emitterPosition[0] = Math.sin(t / 1000), emitterPosition);
			});
		}
	};

	return [
		sceneCtx,
		width,
		height,
		emitterPosition,
		gravity,
		onwindowresize,
		scene_ctx_binding
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;