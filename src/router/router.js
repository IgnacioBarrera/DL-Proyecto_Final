import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue')
  },
  {
    path: '/trabajaConNosotros',
    name: 'TrabajaConNosotros',
    component: () => import(/* webpackChunkName: "TrabajaConNosotros" */ '../views/TrabajaConNosotros.vue')
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "TrabajaConNosotros" */ '../views/Perfil.vue')
  },

  /* Esta ruta puede vamos aplicarla solo para cuando el usuario este registrado */
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "TrabajaConNosotros" */ '../views/Registro.vue'),
    meta:{
      login: true
    }

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
