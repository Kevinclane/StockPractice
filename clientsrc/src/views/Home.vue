<template>
  <div class="home container-fluid">
    <Navbar />
    <div class="row">
      <div class="col">Eric's Stocks</div>
    </div>
    <div class="row">
      <Stocks v-for="stock in stocks" :key="stock.name" :stock="stock" />
    </div>
  </div>
</template>


<script>
import Stocks from "@/components/StockComponent.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getAllBasicStockInfo");
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  methods: {},
  components: {
    Stocks,
    Navbar,
  },
};
</script>


<style scoped>
</style>