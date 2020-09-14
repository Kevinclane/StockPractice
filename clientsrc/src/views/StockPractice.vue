<template>
  <div class="StockPractice">
    <div class="container-fluid">
      <StockPracticeNavbar />
    </div>
    <div class="container">
      <UserInfo />
      <div class="row my-2">
        <div class="col">
          <router-link class="navbar-brand btn btn-success" :to="{ name: 'stocks' }">Browse Stocks</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo.vue";
import StockPracticeNavbar from "@/components/StockPracticeNavbar.vue";
export default {
  name: "StockPractice",
  mounted() {
    this.$store.dispatch("getAllBasicStockInfo");
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  components: {
    StockPracticeNavbar,
    UserInfo,
  },
};
</script>