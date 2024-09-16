<template>
  <main class="d-flex flex-column align-center justify-center h-screen">
    <h1 class="mb-4">Login</h1>
    <v-sheet class="mx-auto" width="300">
      <v-form @submit.prevent>
        <v-text-field variant="outlined" v-model="usuario" placeholder="Usuario"></v-text-field>
        <v-text-field variant="outlined" v-model="clave" placeholder="Clave" type="password"></v-text-field>
        <v-alert v-if="error" class="mb-5" :text="error" type="error" variant="outlined"></v-alert>
        <v-btn size="large" color="primary" variant="tonal" type="submit" block @click="login">Iniciar sesión</v-btn>
      </v-form>
    </v-sheet>
  </main>
</template>

<script lang="ts">
import { AuthService } from '../../core/services/AuthService'
export default {
  data() {
    return {
      usuario: '',
      clave: '',
      error: undefined
    }
  },
  methods: {
    async login() {
      try {
        this.error = undefined;
        await AuthService.login({
          usuario: this.usuario,
          clave: this.clave
        });
        this.$router.push('/');
      } catch (error) {
        this.error = "Credenciales Incorrectas"
        console.log(">> error")
      }

    }
  }
}
</script>