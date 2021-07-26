<template>
  <div class="Wish">
    <!--<img alt="Vue logo" src="../assets/wish/wish.png"/>-->
    <WishComp />
  </div>
</template>

<script>
// @ is an alias to /src
import WishComp from "@/components/Wish/WishComp.vue";

export default {
  name: "Wish",
  components: {
    WishComp,
  },
};
</script>

<style scoped>
img {
  width: 10%;
  height: auto;
}
</style>
