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
    apiDatos: [],
    TabajaConNosotros: []
  },
  getters: {
    enviarApiDatos(state){
      return state.apiDatos;
    },
    /* Coleccion de contactenos */
    enviarContacto(state) {
      return state.contactenos;
    },
    /* COLECCION DE TRABAJA CON NOSOTROS */
    enviandoTrabajaConNosotros(state) {
      return state.TabajaConNosotros;
    }
  },
  mutations: {
    /* llamando Api */
    mutandoApiDatos (state, valores) {
      state.apiDatos = valores;
    },

    /* coleccion de contactenos */
    MutandoContacto(state, arreglo) {
      state.contactenos = arreglo;
    },
    /* MUTANDO COLECCION TRABAJA CON NOSOTROS */
    MutandoTrabajo(state, arreglo) {
      state.TabajaConNosotros = arreglo;
    }
  },
  actions: {

    /* CREANDO EN COLECCION TRABAJA CON NOSOTROS UN USUARIO */
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

    /* CREANDO EN COLECCION CONTACTENOS UN USUARIO */
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
    /* TRAIGO CONTACTO */
    TraigoContacto({commit}) {
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
        commit('MutandoContacto', arreglo);
      })
    },
    /* TRAIGO TRABAJA CON NOSOTROS */
    TraigoTrabajo({commit}){
      db.collection('trabaja_con_nosotros').onSnapshot(resp=> {
        let arreglo= [];
        resp.forEach(element => {
          arreglo.push({
            id: element.id,
            nombre: element.data().nombre,
            correo: element.data().correo,
            profesion: element.data().profesion,
            telefono: element.data().telefono,
          });
        });
        commit('MutandoTrabajo',arreglo);
      })
    },
    /* ACTUALIZO EL CONTACTO */
    actualizarContacto(context, contactos) {
      db.collection('contactenos').doc(contactos.id).update({
        nombre: contactos.nombre,
        correo: contactos.correo,
        mensaje: contactos.mensaje
      })

    },
    /* ELIMINO CONTACTO */
    eliminarContacto(context, id) {
      db.collection('contactenos').doc(id).delete().then(() => {
        console.log('Eliminado');
      }).catch(error => {
        console.log(error);
      })
    },
    /* ELIMINAR TRABAJA CON NOSOTROS */
    eliminarTrabaja(context, id) {
      db.collection('trabaja_con_nosotros').doc(id).delete().then(() => {
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
