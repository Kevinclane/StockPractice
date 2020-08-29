<template>
  <div class="Stock col-4">
    <div class="card">
      <!-- <img src="..." class="card-img-top" alt="..." /> -->
      <div class="card-body">
        <!-- <h5 class="card-title">{{stock.name}}</h5> -->
        <p class="card-text">Current Price: {{stock.currentPrice}}</p>
        <p class="card-text">High Price: {{stock.highPrice}}</p>
        <p class="card-text">Low Price: {{stock.lowPrice}}</p>
        <p class="card-text">Previous Close Price: {{stock.previousClosePrice}}</p>
        <p class="card-text">Open Price: {{stock.openPrice}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stocks",
  props: ["stock"],
};
</script>