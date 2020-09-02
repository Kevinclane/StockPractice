<template>
  <div class="UserInfo row bg-primary text-light">
    <div class="col-12 bg-white text-dark py-2">Your Portfolio</div>
    <div class="col-2 border-black d-flex align-items-center justify-content-center">Last Price</div>
    <div class="col-1 border-black d-flex align-items-center justify-content-center">Sym</div>
    <div class="col-1 border-black d-flex align-items-center justify-content-center">#</div>
    <div class="col-2 border-black d-flex align-items-center justify-content-center">Market Value</div>
    <div class="col-2 border-black d-flex align-items-center justify-content-center">Portfolio %</div>
    <div class="col-2 border-black d-flex align-items-center justify-content-center">Avg Cost</div>
    <div class="col-2 border-black d-flex align-items-center justify-content-center">Return</div>
    <div class="col-12">
      <div class="row">
        <StockBarInfo v-for="stock in stocks" :key="stock.name" :stock="stock" />
      </div>
    </div>
  </div>
</template>

<script>
import StockBarInfo from "@/components/StockBarInfo";
export default {
  name: "UserInfo",
  mounted() {
    this.$store.dispatch("getMyStocks");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    stocks() {
      return this.$store.state.stocksFollowing;
    },
  },
  components: {
    StockBarInfo,
  },
};
</script>

<style scoped>
.border-black {
  border: 2px solid black !important;
}
</style>