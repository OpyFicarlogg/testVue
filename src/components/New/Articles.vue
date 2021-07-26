<template>
  <div class="container">
    <h1 class="display-6" v-bind:title="message">CheckList</h1>
    <div class="addArt">
      <input type="text" class="inputText" v-model="message" />
      <button
        type="button"
        :class="buttonColor"
        @click="addToArts"
        v-if="message != ''"
      >
        Add to Todo
      </button>
    </div>
    <div class="artList">
      <div
        class="jumbotron art"
        v-for="art in arts"
        v-bind:key="art.article.id"
      >
        <!-- @click="inverser"-->
        <div class="artValue" v-if="!art.hidden">{{ art.article.content }}</div>
        <input
          class="artInput"
          type="text"
          v-model="art.article.content"
          v-if="art.hidden"
          @change="setUpdate(art, $event)"
          @keyup.enter="editArts(art)"
          @focusout="editArts(art)"
        />

        <div class="artOptions">
          <button
            type="button"
            :class="[art.update ? 'btn btn-warning' : buttonColor]"
            @click="editArts(art)"
          >
            <BIconPencilSquare />
          </button>
          <button
            type="button"
            :class="buttonColor"
            @click="deleteArts(art.article.id)"
          >
            <BIconTrash />
          </button>
        </div>
      </div>
    </div>
  </div>
  <button type="button" :class="buttonColor" @click="changeColor()">
    Change color
  </button>
</template>

<script>
export default {
  name: "Articles",
  data() {
    return {
      buttonColor: "btn btn-dark",
      message: "test",
      arts: [
        { article: { id: 0, content: "Kebab" }, hidden: false, update: false },
        { article: { id: 1, content: "Tacos" }, hidden: false, update: false },
        { article: { id: 2, content: "Burger" }, hidden: false, update: false },
      ],
    };
  },
  methods: {
    changeColor() {
      this.buttonColor =
        this.buttonColor == "btn btn-dark"
          ? "btn btn-secondary"
          : "btn btn-dark";
    },
    inverser() {
      this.arts.reverse();
    },
    addToArts() {
      var newArt = {
        article: { id: this.getNextId(this.arts), content: this.message },
        hidden: false,
        update: false,
      };
      this.arts.push(newArt);
      this.message = "";
    },
    deleteArts(id) {
      //Delete en base avec l'id, puis suppression dans la l'ihm
      this.arts = this.arts.filter((item) => item.article.id != id);
    },
    editArts(art) {
      this.sel;
      if (art.hidden == true) {
        art.hidden = false;
      } else {
        art.hidden = true;
      }
    },
    setUpdate(art, event) {
      //https://stackoverflow.com/questions/36968153/vue-js-reference-div-id-on-v-onclick
      console.log(event.currentTarget.className);
      art.update = true;

      //Modifier la couleur du bouton par ex
    },
    getNextId(obj) {
      return (
        Math.max.apply(
          Math,
          obj.map((o) => {
            return o.article.id;
          })
        ) + 1
      );
    },
  },
};
</script>

<style scoped>
.artList {
  margin-top: 10px;
  display: inline-grid;
}

.art,
.inputText,
.artOptions,
.artValue {
  display: inline-block;
  text-align: left;
  margin: 10px 10px;
}

.artOptions {
  padding-left: 10px;
}

.addArt {
  margin-bottom: 10px;
}

hr.side {
  border: solid #ddd;
  border-width: 1px 0 0;
  clear: both;
  margin: 22px 0 21px;
  height: 0;
}

button {
  margin-right: 10px;
}
</style>
