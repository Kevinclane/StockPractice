<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between row">
    <router-link class="navbar-brand" :to="{ name: 'home' }">Mud Stock</router-link>
    <span class="navbar-text">
      <button class="btn btn-success" @click="login" v-if="!$auth.isAuthenticated">Login</button>
      <button class="btn btn-danger" @click="logout" v-else>logout</button>
    </span>
  </nav>
</template>

<script>
export default {
  name: "StockPracticeNavbar",
  methods: {
    async login() {
      await this.$auth.loginWithPopup();
      this.$store.dispatch("setBearer", this.$auth.bearer);
      this.$store.dispatch("getProfile");
      console.log("this.$auth.user: ");
      console.log(this.$auth.user);
    },
    async logout() {
      await this.$auth.logout({ returnTo: window.location.origin });
    },
  },
};
</script>

<style></style>
