<script>
  import Group from './Group.svelte';
  import Cloner from './Cloner.svelte';

  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let instances = 2;
  export let spaceBetween = 0.75;
  export let direction = [0, 1, 0];
</script>

<Group {position} {rotation}>
  <Cloner {...$$props} let:position>
    <slot {position} />
  </Cloner>
</Group>
