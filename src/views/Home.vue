<template>
  <div class="home">
    <SideBar/>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'

export default {
  name: 'home',
  components: {
    SideBar
  }
}
</script>
