<script>
  import { Router, Route } from '@6edesign/svelte-router';
  import Layout from './Layout.svelte';
  import Home from './pages/Home.svelte';
</script>

<Layout>
  <Router hashbang={true}>
    <Route path="/">
      <Home />
    </Route>
  </Router>
</Layout>
