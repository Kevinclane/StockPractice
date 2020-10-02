<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between row"
  >
    <div class="col-12 d-flex justify-content-between">
      <router-link class="navbar-brand" :to="{ name: 'home' }"
        >Mud Stock</router-link
      >
      <button
        class="btn btn-success"
        @click="login"
        v-if="!$auth.isAuthenticated"
      >
        Login
      </button>
      <button class="btn btn-danger" @click="logout" v-else>logout</button>
      <router-link class="navbar-brand" :to="{ name: 'stockPractice' }"
        >Stock Practice</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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

<style>
</style>
