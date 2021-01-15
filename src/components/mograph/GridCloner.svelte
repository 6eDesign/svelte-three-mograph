<script>
  import Group from './Group.svelte';
  import Cloner from './Cloner.svelte';

  export let position = [0, 0, 0];
  export let rotation = [0, 0, 0];
  export let instances = [1, 1, 1];
  export let spaceBetween = 0.75;
</script>

<Group {position} {rotation}>
  <Cloner
    direction={[0, 0, 1]}
    instances={instances[0]}
    {spaceBetween}
    let:position
  >
    <Group {position}>
      <Cloner
        direction={[0, 1, 0]}
        instances={instances[1]}
        {spaceBetween}
        let:position
      >
        <Group {position}>
          <Cloner
            direction={[1, 0, 0]}
            instances={instances[2]}
            {spaceBetween}
            let:position
          >
            <slot {position} />
          </Cloner>
        </Group>
      </Cloner>
    </Group>
  </Cloner>
</Group>
