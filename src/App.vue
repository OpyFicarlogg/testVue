<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About</router-link> |
    <router-link to="/Component">Component</router-link> |
    <router-link to="/newPage">NewPage</router-link> |
    <router-link to="/css">Css</router-link> |
    <router-link to="/wish">Wish</router-link> |
    <router-link to="/grid">Grid</router-link> |
    <router-link to="/flex">Flex</router-link> |
    <router-link to="/topachat">Topachat</router-link> |
    <router-link to="/sandbox">Sandbox</router-link>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
