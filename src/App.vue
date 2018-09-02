<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
</script>

<style lang="scss">
html,
body,
* {
  margin: 0;
  padding: 0;
}
a {
  color: #fff;
  text-decoration-line: none;
  font-size: 13px;
  cursor: pointer;
}
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Microsoft YaHei",
    "微软雅黑", "Droid Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #002059;
  display: flex;
  justify-content: flex-end;
}
.main {
  width: calc(100vw - 250px);
}
</style>
