<template>
  <div id="app">
    <img id="logo" src="./assets/carboneum_logo.png">
    <CrowdsaleStat/>
  </div>
</template>

<script>
import CrowdsaleStat from './components/CrowdsaleStat.vue'

export default {
  name: 'app',
  components: {
    CrowdsaleStat
  }
}
</script>

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
