import { createRouter, createWebHistory } from 'vue-router';
import Characters from '../pages/Characters.vue';
import Episodes from '../pages/Episodes.vue';
import Locations from '../pages/Locations.vue';
import CharacterDetail from '../pages/CharacterDetail.vue';
import EpisodeDetail from '../pages/EpisodeDetail.vue';
import LocationDetail from '../pages/LocationDetail.vue';

const routes = [
  { path: '/', redirect: '/characters' },
  { path: '/characters', component: Characters },
  { path: '/episodes', component: Episodes },
  { path: '/locations', component: Locations },
  { path: '/character/:id', component: CharacterDetail },
  { path: '/episode/:id', component: EpisodeDetail },
  { path: '/location/:id', component: LocationDetail }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
