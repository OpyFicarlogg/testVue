<template>
  <div class="container">
    <div class="page-header">
      <h1>Custom jumbotron</h1>
    </div>
    <!-- https://www.booglit.com/bootstrap-4-jumbotron/ -->
    <div class="jumbotron j-black">hey!</div>
    <div class="jumbotron j-vue">hey!</div>

    <!--http://www.conseil-webmaster.com/formation/bootstrap/jumbotron-bootstrap.php-->
    <div class="page-header">
      <h1>Jumbotron <small>Examples</small></h1>
    </div>

    <div class="jumbotron">
      <h1>Bonjour tout le monde!</h1>
      <p>
        Ingeniis anim cernantur possumus, voluptate relinqueret et commodo est
        sed iis legam probant in si dolor incididunt despicationes. Quid
        occaecat hic coniunctione, nescius duis esse singulis anim eu illum ubi
        nostrud ab amet mentitum exercitation. Deserunt ea quae cernantur an
        legam occaecat quamquam et incurreret elit ab occaecat coniunctione,
        incididunt veniam an aliquip.
      </p>
      <p>
        <a
          href="#"
          class="btn btn-primary btn-lg"
          role="button"
          title="En savoir +"
          >En savoir +</a
        >
      </p>
    </div>

    <div class="jumbotron">
      <!--   https://www.pierre-giraud.com/bootstrap-apprendre-cours/badge-jumbotron/ -->
      <h1 class="display-4">Badge exemples</h1>
      <p class="lead">Phrase d'accroche ou n'importe quel autre contenu...</p>
      <hr class="my-4" />
      <p>Les badges</p>

      <button type="button" class="btn btn-primary mb-5">
        Mon compte
        <span class="badge badge-light">3</span>
        <span class="sr-only">Messages non lus</span>
      </button>

      <h2>
        Cours HTML et CSS version PDF
        <span class="badge badge-warning">Nouveau !</span>
      </h2>
      <h4>
        Cours HTML et CSS version PDF
        <span class="badge badge-warning">Nouveau !</span>
      </h4>

      <span class="badge badge-pill badge-success">Badge-pill</span>
    </div>

    <!-- https://getbootstrap.com/docs/4.0/components/jumbotron/  sans corner et full width-->
    <div class="jumbotron jumbotron-fluid">
      <div class="container-fluid">
        <h1 class="display-4">Fluid jumbotron</h1>
        <p class="lead">
          This is a modified jumbotron that occupies the entire horizontal space
          of its parent.
        </p>
      </div>
    </div>

    <h1 class="display-6">row+ col-6 multiple éléments</h1>
    <div class="row">
      <div class="col">
        <p class="jumbotron">col1</p>
        <p class="jumbotron">col1</p>
        <p class="jumbotron">col1</p>
        <p class="jumbotron">col1</p>
      </div>
      <div class="col-6">
        <p class="jumbotron">col2</p>
        <p class="jumbotron">col2</p>
        <p class="jumbotron">col2</p>
        <p class="jumbotron">col2</p>
      </div>
    </div>
    <h1 class="display-6">row+ col-3 one element</h1>
    <div class="row">
      <div class="col-3">
        <p class="jumbotron">Col1</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col2</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col3</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col4</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col5</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col6</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col7</p>
      </div>
      <div class="col-3">
        <p class="jumbotron">Col8</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "TestCssBootstrap",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.j-black {
  background-color: aliceblue;
  color: rgb(110, 107, 107);
  text-align: center;
}
.j-vue {
  background-image: url("~@/assets/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  color: rgb(0, 0, 0);
  text-align: center;
}
</style>
