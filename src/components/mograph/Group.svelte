<script>
  import { getContext, setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { Group } from 'three';

  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let group = new Group();

  const parent = getContext('group');
  setContext('group', group);

  const sceneCtx = getContext('sceneCtx');

  parent ? parent.add(group) : sceneCtx.scene.add(group);

  $: group.position.set(...position);
  $: group.rotation.set(...rotation);
</script>

<slot {group} />
