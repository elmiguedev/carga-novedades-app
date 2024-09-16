<template>

  <v-data-table-server v-model:items-per-page="novedades.limit" @update:options="cargarNovedades" :headers="headers"
    :items="novedades.items" :loading="loading" :items-length="novedades.total">
    <template v-slot:item.fecha="{ item }">
      <span>{{ new Date(item.fecha).toLocaleString() }}</span>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-btn variant="outlined" color="primary" size="small" @click="anular(item)">Anular</v-btn>
    </template>
  </v-data-table-server>

</template>
<script lang="ts">
import { Novedad } from '../../../core/models/Novedad'
export default {
  props: ["novedades", "loading"],
  emits: ["anular", "cargarNovedades"],
  data() {
    return {
      headers: [
        { title: "Id", key: "id" },
        { title: "Fecha", key: "fecha" },
        { title: "Titulo", key: "titulo" },
        { title: "Descripcion", key: "descripcion" },
        { title: "UsuarioId", key: "usuarioId" },
        { title: "Acciones", key: "actions" },
      ]
    }
  },
  methods: {
    anular(novedad: Novedad) {
      this.$emit("anular", novedad);
    },
    cargarNovedades({ page, itemsPerPage, sortBy }) {
      console.log(" > ", page, itemsPerPage, sortBy)
      this.$emit("cargarNovedades", {
        page: page - 1,
        limit: itemsPerPage,
      })
    },
  }
}
</script>