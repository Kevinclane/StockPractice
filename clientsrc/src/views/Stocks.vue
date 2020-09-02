<template>
  <div class="Stocks container">
    <div class="row">
      <div class="col-10 offset-1 col-md-4 offset-md-4 d-flex align-items-center flex-column">
        <p>Search for a new stock (APPL, TSLA, etc)</p>
        <form @submit.prevent="searchStockName">
          <input type="text" name="stockName" id="stockName" />
          <button>Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stocks",
};
</script>