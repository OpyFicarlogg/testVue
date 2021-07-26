<template>
  <div class="Increment">
    <hr />
    <p @click="increment">Clicked {{ value }} times.</p>
    <p @click="increment">Total click {{ totalGeneral }} times.</p>
    <div class="jumbotron">Paramètre envoyé: {{ exemple }}</div>
  </div>
</template>

<script>
export default {
  name: "Increment",
  props: ["exemple"],
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    totalGeneral() {
      return this.$store.state.totalVueX;
    },
    doubleDuTotal() {
      return this.$store.getters.doubleDuTotal;
    },
  },
  methods: {
    increment() {
      this.value += 1;
      this.$store.commit("setTotal", this.totalGeneral + 1);
    },
  },
};
</script>
