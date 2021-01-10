<script>
  import { writable } from 'svelte/store';
  import { getContext, setContext } from 'svelte';
  import { Vector3 } from 'three';

  // array of objects with form { direction, rotation } acceleration vector arrays
  export let forces = [];
  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let velocity = [0, 0, 0];
  export let rotationalVelocity = [0, 0, 0];

  const { subscribe, update, set } = writable({
    directionalForce: new Vector3(),
    rotationalForce: new Vector3(),
    position: new Vector3(...position),
    rotation: new Vector3(...rotation),
    velocity: new Vector3(...velocity),
    rotationalVelocity: new Vector3(...rotationalVelocity),
  });

  const forceCtx = {
    subscribe,
    tick: () =>
      update(
        ({
          directionalForce,
          rotationalForce,
          position,
          rotation,
          velocity,
          rotationalVelocity,
        }) => {
          velocity.add(directionalForce);
          rotationalVelocity.add(rotationalForce);
          return {
            directionalForce,
            rotationalForce,
            velocity,
            rotationalVelocity,
            position: position.add(velocity),
            rotation: rotation.add(rotationalVelocity),
          };
        },
      ),
  };

  const { time } = getContext('sceneCtx');
  time.subscribe(forceCtx.tick);

  $: combinedForces = forces.reduce(
    ({ directional, rotational }, { direction, rotation }) => ({
      directional: directional.add(new Vector3(...direction)),
      rotational: rotational.add(new Vector3(...rotation)),
    }),
    {
      directional: new Vector3(),
      rotational: new Vector3(),
    },
  );

  $: update((state) => ({
    ...state,
    directionalForce: combinedForces.directional,
    rotationalForce: combinedForces.rotational,
  }));

  setContext('forceCtx', forceCtx);

  $: posArray = [
    $forceCtx.position.x,
    $forceCtx.position.y,
    $forceCtx.position.z,
  ];
  $: rotArray = [
    $forceCtx.rotation.x,
    $forceCtx.rotation.y,
    $forceCtx.rotation.z,
  ];
</script>

<slot position={posArray} rotation={rotArray} />
