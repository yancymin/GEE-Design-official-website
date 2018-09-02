<template>
   <div class="brand main">
        <Header title='极验品牌' description='G－BRAND' />
   </div>
</template>

<script>
import Header from '@/components/Header.vue'
import url from '@/assets/img_headerbg.png'
export default {
  name: 'brand',
  data() {
      return {
          urlimg: url
      }
  },
  mounted(){
      this.urlimg = url
    //   console.log(url)
  },
  created(){
    //   console.log(this.urlimg)
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

</style>

