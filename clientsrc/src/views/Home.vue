<template>
  <div class="home">
    <div class="container-fuid">
      <Navbar />
    </div>
    <div class="container">
      <div class="row">
        <div class="col">Eric's Stocks</div>
      </div>
      <div class="row">
        <Stocks v-for="stock in stocks" :key="stock.name" :stock="stock" />
      </div>
      <div class="col-12">
        <button @click="toggleStockForm">Add Stock</button>
      </div>
      <div v-if="addStockForm == true" class="container-fluid my-2">
        <div class="row">
          <div class="col">
            <form @submit.prevent="addMyStock">
              <input
                v-model="newStock.symbol"
                type="text"
                name="symbol"
                id="symbol"
                placeholder="symbol"
              />
              <input
                v-model="newStock.shares"
                type="text"
                name="shares"
                id="shares"
                placeholder="shares"
              />
              <input
                v-model="newStock.boughtAt"
                type="number"
                name="shares"
                id="share"
                placeholder="price bought at"
              />
              <button type="submit">ADD</button>
              <button @click="toggleStockForm">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Stocks from "@/components/StockComponent.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "home",
  data() {
    return {
      addStockForm: false,
      newStock: {},
    };
  },
  mounted() {},
  computed: {
    stocks() {
      return this.$store.state.stocks;
    },
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    addMyStock() {
      let obj = {
        stock: this.newStock,
        id: this.user.id,
      };
      this.$store.dispatch("addMyStock", this.obj);
      this.newStock = {};
    },
    toggleStockForm() {
      this.addStockForm = !this.addStockForm;
    },
  },
  components: {
    Stocks,
    Navbar,
  },
};
</script>


<style scoped>
</style>