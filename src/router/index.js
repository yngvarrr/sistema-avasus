import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/modulos',
    name: 'Módulos',
    component: () => import(/* webpackChunkName: "modulos" */ '../views/MódulosAvasus.vue')
  },
  {
    path: '/infos',
    name: 'Informações',
    component: () => import(/* webpackChunkName: "infos" */ '../views/InfosCurso.vue')
  },
  {
    path: '/parceiros',
    name: 'Parceiros',
    component: () => import(/* webpackChunkName: "parceiros" */ '../views/ParceirosAvasus.vue')
  },
  {
    path: '/transparencia',
    name: 'Transparencia',
    component: () => import(/* webpackChunkName: "transparencia" */ '../views/TransparenciaAvasus.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router
