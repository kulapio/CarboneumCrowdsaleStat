<template>
  <div id="app">
    <img id="logo" src="./assets/carboneum_logo.png">
    <div class="breadcrumbs">
      <a href='/#/'>Home</a>
      <a href='/#/About'>About</a>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style scoped>
.breadcrumbs a {
  margin: 0.5em;
  padding: 0.5em;
}
</style>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 250px;
}
</style>
