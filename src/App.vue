<template>
  <div id="app">
    <SideBar/>
    <MobileMenu/>
    <router-view/>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'
import MobileMenu from '@/components/MobileMenu.vue'

export default {
  name: 'home',
  components: {
    SideBar, Header, MobileMenu
  }
}
</script>

<style lang="scss">
@import './style/contentStyle.scss';
@import './style/anchorStyle.scss';
@import './style/mainStyle.scss';

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
  text-decoration: none;
  font-size: 13px;
  cursor: pointer;
}

#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Microsoft YaHei',
    '微软雅黑', 'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5f6591;
  // display: flex;
  // justify-content: flex-end;
  background-color: #fcfdfe;
}

::selection {
  background: #3873ff;
  color: #fff;
}

img {
  display: block;
}
</style>
