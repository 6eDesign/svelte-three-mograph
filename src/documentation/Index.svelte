<script>
  import { Router, Route } from '@6edesign/svelte-router';
  import Layout from './Layout.svelte';
  import { pages } from './config';
</script>

<Layout let:width let:height>
  <Router>
    {#each pages as { path, component }}
      <Route {path}>
        <svelte:component this={component} {width} {height} />
      </Route>
    {/each}
  </Router>
</Layout>

<style>
  :global(body) {
    font-family: 'Roboto', sans-serif;
  }
</style>
