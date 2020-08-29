<template>
  <div class="home container">
    <div class="row">
      <Stocks v-for="stock in stocks" :key="stock.name" :stock="stock" />
    </div>
  </div>
</template>


<script>
import Stocks from "@/components/StockComponent.vue";
export default {
  name: "home",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("StockQuote");
  },
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
  },
  methods: {},
  components: {
    Stocks,
  },
};
</script>


<style scoped>
</style>