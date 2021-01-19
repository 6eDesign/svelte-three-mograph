import Home from '../pages/Home.svelte';
import Orbit from '../pages/Orbit.svelte';
import Cloner from '../pages/Cloner.svelte';
import Tree from '../pages/tree/Tree.svelte';

export const pages = [
  {
    path: '/',
    component: Home,
    linkText: 'Home',
  },
  {
    path: '/examples/orbit',
    component: Orbit,
    linkText: 'Orbit',
  },
  {
    path: '/examples/cloner',
    component: Cloner,
    linkText: 'Cloner',
  },
  // {
  //   path: '/examples/tree',
  //   component: Tree,
  //   linkText: 'Tree',
  // },
];
