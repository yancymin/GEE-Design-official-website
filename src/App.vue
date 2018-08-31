<template>
  <div id="app">
     <router-link to="/">Home</router-link>
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang="scss">
  a {
    color: #fff;
    text-decoration-line: none;
    font-size: 13px;
  }
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
