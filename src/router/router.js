import Vue from 'vue';
import VueRouter from 'vue-router';
import Inicio from '../views/Inicio.vue';
import firebase from "firebase";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import(/* webpackChunkName: "Contacto" */ '../views/Contacto.vue'),
  },
  {
    path: '/trabajaConNosotros',
    name: 'TrabajaConNosotros',
    component: () => import(/* webpackChunkName: "TrabajaConNosotros" */ '../views/TrabajaConNosotros.vue'),
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "Perfil" */ '../views/Perfil.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/vistatrabaja',
    name: 'VistaTrabaja',
    component: () => import(/* webpackChunkName: "Vistatrabaja" */ '../views/VistaTrabaja.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/vistacontacto',
    name: 'VistaContacto',
    component: () => import(/* webpackChunkName: "VistaContacto" */ '../views/VistaContacto.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "Editar" */ '../views/Editar.vue'),
    meta:{
      login: true
    } 
  },
  {
    path: '/informes',
    name: 'Informes',
    component: () => import(/* webpackChunkName: "Informes" */ '../views/Informes.vue'),
    meta: {
      login: true
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue'),
  },

  /* Esta ruta puede vamos aplicarla solo para cuando el usuario este registrado */
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "Registro" */ '../views/Registro.vue'),
    meta: {
      login: true
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to,from,next)=>{
  var usuario = firebase.auth().currentUser;
  
  let registroRequerido = to.matched.some(ruta => ruta.meta.login)
  console.log(registroRequerido);

  if (registroRequerido && !usuario) {
      next('/login');
  } else {
    setTimeout(() => {next()},1000)
  }
})

export default router
