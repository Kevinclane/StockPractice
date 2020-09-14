<template>
  <div class="Stocks">
    <div class="container-fluid">
      <StockPracticeNavbar />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-10 offset-1 col-md-4 offset-md-4 d-flex align-items-center flex-column">
          <p>Search for a new stock by name or symbol</p>
          <form @submit.prevent="searchStockName">
            <input type="text" name="stockName" id="stockName" v-model="newStock.symbol" />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StockPracticeNavbar from "@/components/StockPracticeNavbar.vue";
export default {
  name: "Stocks",
  data() {
    return {
      newStock: {},
    };
  },
  methods: {
    searchStockName() {
      let data = this.$store.dispatch("findStock", this.newStock.symbol);
      if (data) {
        console.log(data);
      }
    },
  },
  components: {
    StockPracticeNavbar,
  },
};
</script>