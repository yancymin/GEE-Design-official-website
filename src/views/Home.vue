<template>
  <div class="home">
    <SideBar/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import Header from '@/components/Header.vue'

export default {
  name: 'home',
  components: {
    SideBar, Header
  }
}
</script>
