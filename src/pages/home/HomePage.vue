<template>
  <h1>Home page</h1>
  <button @click="logout">Logout</button>
</template>
<script lang="ts">

import { AuthService } from '../../core/services/AuthService'

export default {
  methods: {
    logout() {
      AuthService.logout();
      this.$router.push('/login');
    }
  }
}
</script>