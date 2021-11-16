<template>
  <div class="Component">
    <div class="container">
      <div class="row">
        <h1>Component emit test</h1>
      </div>
      <div v-if="basket.length > 0">
        <div class="row">
          <div class="col-3" v-for="product in basket" :key="product.id">
            <ComponentEmit
              v-bind:product="product"
              role="recap"
              @ajout_panier="addBasket"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <h1>Produits</h1>
      </div>
      <div class="row">
        <div class="col-3" v-for="product in products" :key="product.id">
          <ComponentEmit
            v-bind:product="product"
            @ajout_panier="addBasket"
            role="commande"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ComponentEmit from "@/components/Component/ComponentEmit.vue";
//Ajout d'un basket

export default {
  name: "Component",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "burger",
          price: "13",
          description: "Un bon burger",
        },
        {
          id: 2,
          name: "tacos",
          price: "6",
          description: "Le bon tacos des familles avec maxi suplément",
        },
        {
          id: 3,
          name: "tacos bazooka",
          price: "9",
          description: "Bon bah, c'est la fin..",
        },
      ],
      basket: [],
    };
  },
  computed: {},
  methods: {
    addBasket(product) {
      this.basket.push(product);
    },
  },
  components: {
    ComponentEmit,
  },
};
</script>
