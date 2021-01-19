<script>
  import { pages } from './config';
  import Scene from '../components/Scene.svelte';
  import Icosahedron from '../components/primitives/Icosahedron.svelte';
  import AmbientLight from '../components/lights/AmbientLight.svelte';
  import DirectionalLight from '../components/lights/DirectionalLight.svelte';
  import Particle from '../components/mograph/Particle.svelte';
  import Material from '../components/materials/Material.svelte';

  let w, h;
</script>

<div class="main-grid">
  <section class="header">
    <Scene width={120} height={120} background="#333">
      <AmbientLight intensity={1} />
      <DirectionalLight />
      <Material metalness={0} roughness={0.8} color="#fff" wireframe={true}>
        <Particle
          position={[0, 0, 100]}
          rotationalVelocity={[0.008, 0.008, 0]}
          let:rotation
        >
          <Icosahedron size={3} detail={1} {rotation} />
        </Particle>
      </Material>
    </Scene>
    <div class="header-text">
      <strong>@6eDesign/svelte-three</strong>
      <emphasis>npm i -D @6eDesign/svelte-three</emphasis>
    </div>
    <slot name="header" />
  </section>

  <section class="sidebar">
    <ul>
      {#each pages as { path, linkText }}
        <li>
          <a href={path}>{linkText}</a>
        </li>
      {/each}
    </ul>
  </section>

  <section class="content" bind:clientWidth={w} bind:clientHeight={h}>
    {#if w && h}
      <slot width={w} height={h} />
    {/if}
  </section>
</div>

<style>
  :global(body) {
    background: #eee;
    margin: 0;
  }
  .main-grid {
    display: grid;
    grid-template-areas:
      'header header header header header header'
      'sidebar content content content content content';
    min-height: 100vh;
    grid-template-rows: auto 1fr;
    grid-template-columns: 220px auto;
  }

  .header {
    padding: 12px;
    display: grid;
    grid-template-columns: 120px auto;
    grid-area: header;
    background: #333;
    color: #fff;
    box-shadow: 0px 2px 22px 14px rgba(0, 0, 0, 0.11);
    height: 120px;
    align-items: center;
    z-index: 1;
    grid-gap: 30px;
  }

  .header-text {
    display: grid;
    grid-gap: 3px;
  }
  .header-text strong {
    font-size: 1.3em;
  }

  .header-text emphasis {
    font-weight: 200;
    font-size: 1.2em;
    color: greenyellow;
  }

  .sidebar {
    grid-area: sidebar;
    background: #eee;
    padding: 0;
    display: grid;
  }

  .sidebar ul {
    list-style-type: none;
    margin: 0;
    padding: 18px 0 0 0;
  }
  .sidebar li a {
    font-weight: bold;
    text-decoration: none;
    color: #333;
    height: 28px;
    display: grid;
    align-items: center;
    transition: all 120ms ease-in-out;
    transform: scale(1);
    padding: 12px 30px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background: #f7f4f4;
  }

  .sidebar li a:hover {
    transform: scale(1.04);
    z-index: 2;
  }

  .content {
    grid-area: content;
  }

  h1 {
    margin: 0;
    font-size: 18px;
  }
</style>
