<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./style/contentStyle.scss";
@import "./style/anchorStyle.scss";

html,
body,
* {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
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
  color: #5f6591;
  display: flex;
  justify-content: flex-end;
  background-color: #fcfdfe;
}
.main {
  width: calc(100vw - 250px);
  transition: all 0.3s ease;
}
::selection {
  background: #3873ff;
  color: #fff;
}

img {
  display: block;
}

@media screen and (max-width: 1220px) {
  #app {
    justify-content: center;
  }
  .main {
    width: 100vw;
  }
}
</style>
