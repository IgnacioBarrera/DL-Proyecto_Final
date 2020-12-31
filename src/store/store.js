import Vue from 'vue';
import Vuex from 'vuex';
import {db} from "../main";

/* importando  Api*/
import { apiGet } from '@/services/apiConexion';

//import router from '../router/router';



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contactenos: [],
    apiDatos: []
  },
  getters: {
    enviarApiDatos(state){
      return state.apiDatos;
    },
    /* Coleccion de contactenos */
    enviarContacto(state) {
      return state.contactenos;
    }
  },
  mutations: {
    /* llamando Api */
    mutandoApiDatos (state, valores) {
      state.apiDatos = valores;
    },

    /* coleccion de contactenos */
    mutarContacto(state, arreglo) {
      state.contactenos = arreglo;
    }
  },
  actions: {

    /* coleccion de trabaja con nosotros */
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

    /* coleccion de contactenos */
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

    traerContacto({commit}) {
      db.collection('contactenos').onSnapshot(resp => {
        let arreglo = [];
        resp.forEach(element => {
          arreglo.push({
            id: element.id,
            nombre: element.data().nombre,
            correo: element.data().correo,
            mensaje: element.data().mensaje,
          });
        });
        commit('mutarContacto', arreglo);
      })
    },

    actualizarContacto(context, contactos) {
      db.collection('contactenos').doc(contactos.id).update({
        nombre: contactos.nombre,
        correo: contactos.correo,
        mensaje: contactos.mensaje
      })

    },

    eliminarContato(context, id) {
      db.collection('contactenos').doc(id).delete().then(() => {
        console.log('Eliminado');
      }).catch(error => {
        console.log(error);
      })
    },

    
    /* llamando a la api */
    async traerApiDatos ({commit}) {
      let datos = await apiGet();
      commit('mutandoApiDatos', datos.results)
    }
  },
})
