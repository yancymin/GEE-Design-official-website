<template>
   <div class="brand main">
        <Header title='极验品牌' des='Geetest Brand VI' :style="bgc" :src="imgSrc"/>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
import url from "@/assets/img_brand_header.png";

export default {
  name: "brand",
  data() {
    return {
      imgSrc: url,
      bgc: "background-color: #5285E1;"
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="scss" scoped>
</style>
