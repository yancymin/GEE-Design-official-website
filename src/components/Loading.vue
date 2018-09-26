<template>
</template>

<script>
import 'muse-ui-progress/dist/muse-ui-progress.css'
import Vue from 'vue'
import MuseUIProgress from 'muse-ui-progress'

Vue.use(MuseUIProgress, {
  zIndex: 2000, // progress z-index
  top: 0, // position fixed top
  speed: 300, // progress speed
  color: '#64F6FF', // color
  size: 3, // progress size
  className: '' // progress custom class
})

export default {
  created () {
    this.$progress.start()
  },
  mounted () {
    this.$progress.done()
  }
}
</script>

// or
MuseUIProgress.start();
MuseUIProgress.done();

<style lang="scss" scoped>
</style>
