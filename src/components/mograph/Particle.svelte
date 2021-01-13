<script>
  import { writable } from 'svelte/store';
  import { getContext, setContext, onDestroy } from 'svelte';
  import { Vector3 } from 'three';
  import { getParticle } from '../../stores/particles';

  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let velocity = [0, 0, 0];
  export let rotationalVelocity = [0, 0, 0];
  export let forces = [];
  export let rotationalForces = [];

  const particle = getParticle({
    position,
    rotation,
    velocity,
    rotationalVelocity,
    forces,
    rotationalForces,
  });

  setContext('particle', particle);

  const { time } = getContext('sceneCtx');
  const unsubscribe = time.subscribe(particle.tick);
  onDestroy(unsubscribe);

  $: posArray = [
    $particle.position.x,
    $particle.position.y,
    $particle.position.z,
  ];
  $: rotArray = [
    $particle.rotation.x,
    $particle.rotation.y,
    $particle.rotation.z,
  ];
</script>

<slot position={posArray} rotation={rotArray} />
