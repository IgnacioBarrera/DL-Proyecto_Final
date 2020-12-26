import Vue from 'vue';
import Vuex from 'vuex';
import {db} from "../main";

/* importando  Api*/
import { apiGet } from '@/services/apiConexion';

//import router from '../router/router';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    apiDatos: []
  },
  getters: {
    enviarApiDatos(state){
      return state.apiDatos;
    }
  },
  mutations: {

    mutandoApiDatos (state, valores) {
      state.apiDatos = valores;
    }
  },
  actions: {
    enviandoTrabajo(context,form){
      db.collection('trabaja_con_nosotros').add({
        correo: form.correo,
        nombre: form.nombre,
        profesion: form.profesion,
        telefono: form.telefono,
      });
      form.correo = '';
      form.nombre = '';
      form.profesion = '';
      form.telefono = '';
    },
    enviandoContacto(context,form){
      db.collection('contactenos').add({
        correo: form.correo,
        mensaje: form.mensaje,
        nombre: form.nombre,
      });
      form.correo = '';
      form.mensaje = '';
      form.nombre = '';
    },
    /* llamando a la api */
    async traerApiDatos ({commit}) {
      let datos = await apiGet();
      commit('mutandoApiDatos', datos.results)
    }
  },
})
