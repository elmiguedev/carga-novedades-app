<template>
  <v-container>
    <v-card variant="outlined">
      <v-row no-gutters>
        <v-col cols="4">
          <v-sheet class="pa-2 ma-2">
            <v-text-field @keyup.enter="onFilter" variant="outlined" v-model="search" placeholder="Buscar novedades"></v-text-field>
          </v-sheet>
        </v-col>
        <v-col>
          <v-sheet class="pa-2 ma-2">
            <v-checkbox color="primary" @change="onFilter" label="Mostrar anuladas" v-model="showAnuladas"></v-checkbox>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>
<script lang="ts">
export default {
  emits: ['onFilter'],
  data() {
    return {
      search: "",
      showAnuladas: false
    }
  },
  methods: {
    onFilter() {
      this.$emit('onFilter', {
        search: this.search,
        showAnuladas: this.showAnuladas
      })
    }
  }
}

</script>