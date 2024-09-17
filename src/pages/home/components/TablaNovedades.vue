<template>
  <v-data-table-server v-model:items-per-page="novedades.limit" :row-props="rowProps" @update:options="onPaginacion"
    :headers="headers" :items="novedades.items" :loading="loading" :items-length="novedades.total">
    <template v-slot:headers="{ columns }">
      <tr class="">
        <template v-for="column in columns" :key="column.key">
          <th class=" border-b-lg">
            <span class="mr-2 cursor-pointer font-weight-bold" >{{ column.title }}</span>
          </th>
        </template>
      </tr>
    </template>
    <template v-slot:item.fecha="{ item }: any">
      <span>{{ new Date(item.fecha).toLocaleString() }}</span>
    </template>
    <template v-slot:item.actions="{ item }: any">
      <v-btn v-if="!item.anulada" variant="outlined" color="primary" size="small" @click="onAnular(item)">Anular</v-btn>
    </template>
  </v-data-table-server>

</template>
<script lang="ts">
import { Novedad } from '../../../core/domain/novedades/Novedad';

export default {
  props: ["novedades", "loading"],
  emits: ["onAnular", "onPaginacion"],
  data() {
    return {
      headers: [
        { title: "Id", key: "id" , sortable: false, class: "bg-primary"},
        { title: "Fecha", key: "fecha", sortable: false },
        { title: "Titulo", key: "titulo", sortable: false },
        { title: "Descripcion", key: "descripcion", sortable: false },
        { title: "UsuarioId", key: "usuarioId" , sortable: false},
        { title: "Acciones", key: "actions" , sortable: false},
      ]
    }
  },
  methods: {
    onAnular(novedad: Novedad) {
      this.$emit("onAnular", novedad);
    },
    onPaginacion({ page, itemsPerPage, sortBy }: any) {
      console.log(" > ", page, itemsPerPage, sortBy)
      this.$emit("onPaginacion", {
        page: page - 1,
        limit: itemsPerPage,
      })
    },
    rowProps(props: any) {
      if (props.item.anulada) {
        return {
          class: "text-decoration-line-through text-disabled"
        }
      }
    }
  }
}
</script>