import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.31.2 */
import {
	SvelteComponent,
	add_render_callback,
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

import {
	Scene,
	Material,
	numbers,
	lights,
	mograph,
	primitives
} from "./components/index.js";

import OrbitExample from "./OrbitExample.js";
import ClonerExample from "./ClonerExample.js";

function create_if_block(ctx) {
	let scene;
	let current;

	scene = new Scene({
			props: {
				background: "#111",
				width: /*width*/ ctx[0],
				height: /*height*/ ctx[1],
				$$slots: { default: [create_default_slot] },
				$$scope: { ctx }
			}
		});

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
			if (dirty & /*width*/ 1) scene_changes.width = /*width*/ ctx[0];
			if (dirty & /*height*/ 2) scene_changes.height = /*height*/ ctx[1];

			if (dirty & /*$$scope*/ 65536) {
				scene_changes.$$scope = { dirty, ctx };
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

// (29:2) <Scene background="#111" {width} {height}>
function create_default_slot(ctx) {
	let ambientlight;
	let t0;
	let directionallight;
	let t1;
	let orbitexample;
	let t2;
	let clonerexample;
	let current;
	ambientlight = new /*AmbientLight*/ ctx[2]({});
	directionallight = new /*DirectionalLight*/ ctx[3]({});
	orbitexample = new OrbitExample({});
	clonerexample = new ClonerExample({});

	return {
		c() {
			create_component(ambientlight.$$.fragment);
			t0 = space();
			create_component(directionallight.$$.fragment);
			t1 = space();
			create_component(orbitexample.$$.fragment);
			t2 = space();
			create_component(clonerexample.$$.fragment);
		},
		m(target, anchor) {
			mount_component(ambientlight, target, anchor);
			insert(target, t0, anchor);
			mount_component(directionallight, target, anchor);
			insert(target, t1, anchor);
			mount_component(orbitexample, target, anchor);
			insert(target, t2, anchor);
			mount_component(clonerexample, target, anchor);
			current = true;
		},
		i(local) {
			if (current) return;
			transition_in(ambientlight.$$.fragment, local);
			transition_in(directionallight.$$.fragment, local);
			transition_in(orbitexample.$$.fragment, local);
			transition_in(clonerexample.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(ambientlight.$$.fragment, local);
			transition_out(directionallight.$$.fragment, local);
			transition_out(orbitexample.$$.fragment, local);
			transition_out(clonerexample.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(ambientlight, detaching);
			if (detaching) detach(t0);
			destroy_component(directionallight, detaching);
			if (detaching) detach(t1);
			destroy_component(orbitexample, detaching);
			if (detaching) detach(t2);
			destroy_component(clonerexample, detaching);
		}
	};
}

function create_fragment(ctx) {
	let if_block_anchor;
	let current;
	let mounted;
	let dispose;
	add_render_callback(/*onwindowresize*/ ctx[4]);
	let if_block = /*width*/ ctx[0] && /*height*/ ctx[1] && create_if_block(ctx);

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
				dispose = listen(window, "resize", /*onwindowresize*/ ctx[4]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (/*width*/ ctx[0] && /*height*/ ctx[1]) {
				if (if_block) {
					if_block.p(ctx, dirty);

					if (dirty & /*width, height*/ 3) {
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
	const { RandomColor } = numbers;
	const { GridCloner, LinearCloner, Emitter, Particle } = mograph;
	const { Icosahedron, Plane, Cube } = primitives;
	const { AmbientLight, DirectionalLight } = lights;
	let width;
	let height;
	let sceneCtx;
	const emitterPosition = [0, 0, -100];
	const gravity = particle => particle.getVector(0, -0.0001, 0);

	function onwindowresize() {
		$$invalidate(0, width = window.innerWidth)
		$$invalidate(1, height = window.innerHeight)
	}

	return [width, height, AmbientLight, DirectionalLight, onwindowresize];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;