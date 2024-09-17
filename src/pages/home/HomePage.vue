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
      <NovedadesFiltros @onFilter="handleFilters" />
      <TablaNovedades :novedades="novedades" :loading="loading" @onAnular="anularNovedad"
        @onPaginacion="handlePaginacion" />
    </v-container>
  </v-sheet>
</template>
<script lang="ts">

import { AuthService } from '../../core/services/AuthService'
import { NovedadService } from '../../core/services/NovedadService'
import TablaNovedades from './components/TablaNovedades.vue'
import BotonNuevaNovedad from './components/BotonNuevaNovedad.vue'
import NovedadesFiltros from './components/NovedadesFiltros.vue'

export default {
  components: {
    TablaNovedades,
    BotonNuevaNovedad,
    NovedadesFiltros
  },
  data() {
    return {
      novedades: {
        items: [],
        limit: 10,
        page: 0,
        total: 0
      },
      loading: false,
      filtros: {
        search: "",
        showAnuladas: false,
      },
      paginacion: {
        page: 0,
        limit: 10,
      }
    }
  },
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/login');
    },
    async getNovedades() {
      this.loading = true;
      this.novedades = await NovedadService.obtenerTodo({
        page: this.paginacion.page || 0,
        limit: this.paginacion.limit || 10,
        showAnuladas: this.filtros.showAnuladas,
        search: this.filtros.search,
      });
      this.loading = false;
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
    async handleFilters(filters:any) {
      this.filtros = filters;
      await this.getNovedades();
    },
    async handlePaginacion(paginacion: any) {
      this.paginacion = {
        page: paginacion.page,
        limit: paginacion.limit
      };
      await this.getNovedades();
    }
  },
}
</script>