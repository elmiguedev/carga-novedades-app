<template>
  <v-sheet class="w-100">
    <v-container class="pa-8">
      <h2 class="mb-4">Nueva novedad</h2>
      <v-form>
        <v-text-field class="w-100" variant="outlined" v-model="titulo" placeholder="titulo"></v-text-field>
        <v-text-field class="w-100" variant="outlined" v-model="descripcion" placeholder="descripcion"></v-text-field>
        <v-btn size="large" color="primary" variant="outlined" block @click="guardarNovedad">Agregar</v-btn>
      </v-form>
    </v-container>
  </v-sheet>
</template>
<script lang="ts">
export default {
  emits: ['submit'],
  data() {
    return {
      titulo: '',
      descripcion: '',
    }
  },
  methods: {
    guardarNovedad() {
      const novedad = {
        titulo: this.titulo,
        descripcion: this.descripcion
      };
      this.$emit('submit', novedad);
    }
  }
}
</script>