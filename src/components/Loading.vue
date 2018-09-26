<template>
</template>

<script>
import 'muse-ui-progress/dist/muse-ui-progress.css'
import Vue from 'vue'
import MuseUIProgress from 'muse-ui-progress'

Vue.use(MuseUIProgress, {
  zIndex: 2000, // progress z-index
  top: 0, // position fixed top
  speed: 30, // progress speed
  color: '#64F6FF', // color
  size: 3, // progress size
  className: '' // progress custom class
})

export default {
  beforeCreate() {
    // this.$progress.start()
    MuseUIProgress.start()
  },
  mounted() {
    MuseUIProgress.done()
  }
}
</script>

// or
MuseUIProgress.start();
MuseUIProgress.done();

<style lang="scss" scoped>
</style>
