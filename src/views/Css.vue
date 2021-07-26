<template>
  <h1>Css Test page</h1>
  <div class="css">
    <hr class="side" />
    <testCssBootstrap />
    <hr class="side" />
  </div>
</template>

<script>
import testCssBootstrap from "@/components/Css/testCssBootstrap.vue";

export default {
  name: "Css",
  data() {
    return {};
  },
  methods: {},
  components: {
    testCssBootstrap,
  },
};
</script>

<style scoped>
hr.side {
  border: solid #ddd;
  border-width: 1px 0 0;
  clear: both;
  margin: 22px 0 21px;
  height: 0;
}
</style>
