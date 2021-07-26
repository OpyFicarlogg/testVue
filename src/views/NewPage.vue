<template>
  <div class="newPage">
    <h1>This is an new Page</h1>
    <p @click="changeValue">{{ test }}</p>
    <Increment exemple="test" />
    <hr class="side" />
    <Articles />
  </div>
</template>

<script>
import Increment from "@/components/New/Increment.vue";
import Articles from "@/components/New/Articles.vue";

export default {
  name: "New",
  data() {
    return {
      test: "Click me :)",
    };
  },
  methods: {
    changeValue() {
      var oldValue = this.test;
      this.test = "DON'T CLICK ME YOU FOOL";
      setInterval(() => {
        this.test = oldValue;
      }, 3000);
    },
  },
  components: {
    Increment,
    Articles,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
hr.side {
  border: solid #ddd;
  border-width: 1px 0 0;
  clear: both;
  margin: 22px 0 21px;
  height: 0;
}
</style>
