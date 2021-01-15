<script>
</script>

<div class="main-grid">
  <section class="header">
    <h1>@6eDesign/svelte-three</h1>
    <slot name="header" />
  </section>

  <section class="sidebar">
    <ul>
      <li>
        <a href="/getting-started">Getting Started</a>
      </li>
    </ul>
  </section>

  <section class="content">
    <slot />
  </section>
</div>

<style>
  :global(body) {
    background: #111;
    color: #eee;
  }
  .main-grid {
    display: grid;
    grid-template-areas:
      'header'
      'sidebar content content content content content';
  }

  .header {
    grid-area: 'header';
  }

  .sidebar {
    grid-area: 'sidebar';
  }

  .content {
    grid-area: 'content';
  }
</style>
