<template>
  <div class="board">
    <h1>TEST</h1>
  </div>
</template>

<script>
export default {
  name: "board",
  computed: {
    board() {
      //FIXME This does not work on page reload because the activeBoard is empty in the store
      return this.$store.state.activeBoard;
    },
  },
  props: ["boardId"],
};
</script>
