<template>
  <div class="jumbotron content-box">
    <div class="row">
      <div class="col-9">
        <span
          ><strong>{{ product.name }}</strong></span
        >
      </div>
      <div class="col-3">
        <span>{{ product.price }}€</span>
      </div>
    </div>
    <div class="row">
      <span class="align-left">{{ subStringDesc }}</span>
    </div>
    <div class="row center">
      <button
        class="btn btn-dark"
        v-if="role == 'commande'"
        @click="addBasket(product)"
      >
        Commander
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ComponentEmit",
  props: ["product", "role"],
  data() {},
  computed: {
    subStringDesc() {
      console.log(this.product.description.length);
      return this.product.description.length > 30
        ? this.product.description.substring(0, 23) + "..plus"
        : this.product.description;
    },
  },
  methods: {
    addBasket(product) {
      this.$emit("ajout_panier", product);
    },
  },
};
</script>

<style scoped>
.center {
  margin-top: 20px;
}
.content-box {
  box-sizing: content-box;
}
.align-left {
  text-align: left;
  margin-top: 25px;
}
</style>
