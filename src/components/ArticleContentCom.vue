<template>
  <div class="ArticleContentCom">
    <articleHeader :title="title" :imageSrc="imageSrc"/>
    <AnchorScroll :jsonData="jsonData"/>
    <BackTop/>
  </div>
</template>

<script>
import articleHeader from "@/components/articleHeader.vue";
import BackTop from "@/components/BackTop.vue";
import AnchorScroll from "@/components/AnchorScroll";

export default {
  name: "ArticleContentCom",
  props: ["listItems", "title", "imageSrc", "jsonData"],
  // props: {
  //   listItems: Array,
  //   title: String,
  //   image: String,
  //   jsonData:Array
  // },
  components: {
    articleHeader,
    BackTop,
    AnchorScroll
  }
};
</script>

<style lang="scss">
.ArticleContentCom {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .articleHeader {
    /* background-blend-mode: soft-light;
    filter: opacity(0.8); */
  }
}
</style>
