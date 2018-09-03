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
::selection {
    background: #3873ff;
    color: #fff;
}

img {
  display: block;
}


// content style

.container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: auto;
    border-top: 1px solid #e1e7ff;
    border-bottom: 1px solid #e1e7ff;
    padding: 48px 0;
    margin: 60px 0 120px 0;

    .bottom-68 {
      margin-bottom: 68px;
    }

    .bottom-30 {
      margin-bottom: 30px;
    }

    .bottom-20 {
      margin-bottom: 20px;
    }

    .box-border {
      border: 1px solid #e5e5e5;
      background-color: #ffffff;
    }
    h3 {
      font-size: 18px;
      font-weight: 500;
      line-height: 29px;
      margin-bottom: 8px;
    }

    p {
      font-size: 15px;
      line-height: 25px;
    }

    img {
      width: 100%;
      height: auto;
    }
}
</style>
