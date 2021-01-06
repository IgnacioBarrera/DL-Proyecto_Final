<template>
    <el-card class="bodyCard text-center">
        <div v-if="this.$route.params.id">
            <b-form class="container mt-5" @submit.prevent="editando">
    <!-- Nombre -->
            <b-form-group 
            id="input-group-1" 
            label="Nombre" 
            label-for="input-1"
            >
                <b-form-input 
                id="input-1" 
                v-model="contactenos.nombre"
                required 
                ></b-form-input>
            </b-form-group>
    <!-- Correo -->
            <b-form-group 
            id="input-group-2" 
            label="correo" 
            label-for="input-2"
            >
                <b-form-input 
                id="input-2" 
                v-model="contactenos.correo"
                required
                ></b-form-input>
            </b-form-group>
    <!-- Mensaje -->
            <b-form-group 
            id="input-group-3" 
            label="Mensaje" 
            label-for="input-3"
            >
                <b-form-input 
                id="input-3" 
                v-model="contactenos.mensaje" 
                required 
                ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" class="mx-2">Editar</b-button>
            <b-button class="mx-2" @click="$router.push('/vistacontacto')">Volver</b-button>

            </b-form>
        </div>
    </el-card>
</template>

<script>
export default {
    name: "Editar",
    data() {
        return {
            contactenos: {
                nombre: '',
                correo: '',
                mensaje: ''
            }
        }
    },
    created() {
        let contactenos = {};
        contactenos = this.$store.getters.enviarContacto.find(resp => resp.id === this.$route.params.id)
        if(contactenos) {
            this.contactenos.nombre = contactenos.nombre;
            this.contactenos.correo = contactenos.correo;
            this.contactenos.mensaje = contactenos.mensaje;
            this.contactenos.id = contactenos.id;
        }
    },
    methods: {
        editando() {
            this.$confirm('¿Seguro que deseas editar', {
                confirmButtonText: 'Editar',
                cancelButtonText: 'Cancelar',
                type: 'warning',
                center: true
            }).then(() => {
                this.$store.dispatch("actualizarContacto", this.contactenos);
                this.$message({
                message: 'Contacto editado',
                type: 'success'
                });
                this.$router.push('/vistacontacto');
            }).catch(() => {
                this.$message.error('Cancelado');
                console.log('No se edito')
            })
        
        }
    },
}
</script>

<style>

</style>