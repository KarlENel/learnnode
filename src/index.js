import './style.scss';
import {createApp} from 'vue';
import { createWebHistory, createWebHashHistory ,createMemoryHistory, createRouter } from 'vue-router'

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import NotFound from './pages/NotFound.vue';
import RickandMorty from './pages/RickandMorty.vue';

const routes = [
    { path: '/', name: 'ToDo', component: ToDo },
    { path: '/modals', name: 'Modals', component: Modals },
    { path: '/chuck', name: 'ChuckNorris', component: ChuckNorris },
    { path: '/RickandMorty', name: 'RickandMorty', component: RickandMorty },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { showInTab: false }},
  ]

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  });

import App from './App.vue';

let app = createApp(App).use(router).mount('#app');