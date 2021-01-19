import Home from '../pages/Home.js';
import Orbit from '../pages/Orbit.js';
import Cloner from '../pages/Cloner.js';
import Tree from '../pages/tree/Tree.js';

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
