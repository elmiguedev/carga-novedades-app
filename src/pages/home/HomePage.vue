<template>
  <v-sheet>
    <v-container class="d-flex flex-column align-center">
      <v-toolbar border density="compact" class=" mb-10">
        <v-spacer></v-spacer>
        <v-btn @click="logout">
          Cerrar sesión
        </v-btn>
      </v-toolbar>
      <h1 class="mb-4">Carga de novedades</h1>
      <BotonNuevaNovedad @submit="guardarNovedad" />
      <TablaNovedades :novedades="novedades" :loading="loading" @anular="anularNovedad"
        @cargarNovedades="getNovedades" />
    </v-container>
  </v-sheet>
</template>
<script lang="ts">

import { AuthService } from '../../core/services/AuthService'
import { NovedadService } from '../../core/services/NovedadService'
import TablaNovedades from './components/TablaNovedades.vue'
import BotonNuevaNovedad from './components/BotonNuevaNovedad.vue'

export default {
  components: {
    TablaNovedades,
    BotonNuevaNovedad
  },
  data() {
    return {
      novedades: {
        items: [],
        total: 0,
        page: 0,
        limit: 10
      },
      loading: false
    }
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/login');
    },
    async getNovedades(params?: any) {
      this.loading = true;
      this.novedades = await NovedadService.obtenerTodo({
        page: params?.page || 0,
        limit: params?.limit || 10
      });
      this.loading = false;
      console.log(this.novedades)
    },
    async guardarNovedad(novedad: any) {
      await NovedadService.agregar(novedad);
      await this.getNovedades();
    },
    async anularNovedad(novedad: any) {
      await NovedadService.anular({
        id: novedad.id,
        motivo: ""
      });
      await this.getNovedades();
    },
  },
}
</script>