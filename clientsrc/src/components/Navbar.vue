<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between row">
    <div class="col-12 d-flex justify-content-between">
      <router-link class="navbar-brand" :to="{ name: 'home' }">Mud Stock</router-link>
      <router-link class="navbar-brand" :to="{ name: 'stockPractice' }">Stock Practice</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  methods: {},
};
</script>

<style>
</style>
