<template>
  <div class="home">
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
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
