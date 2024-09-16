<template>
  <v-btn color="primary" text="Nueva novedad" variant="outlined" @click="open"> </v-btn>
  <v-dialog v-model="dialog">
    <NuevaNovedad @submit="handleSubmit" />
  </v-dialog>
</template>

<script lang="ts">
import NuevaNovedad from './NuevaNovedad.vue'
import { NovedadRequest } from "../../../core/domain/novedades/NovedadRequest";
export default {
  components: {
    NuevaNovedad
  },
  emits: ['submit'],
  data() {
    return {
      dialog: false
    }
  },
  methods: {
    open() {
      this.dialog = true;
    },
    handleSubmit(novedad: any) {
      console.log("dialog > ", novedad);
      this.$emit('submit', novedad);
      this.dialog = false
    }
  }
}
</script>