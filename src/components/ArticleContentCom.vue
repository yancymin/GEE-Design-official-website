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
  components: {
    articleHeader,
    BackTop,
    AnchorScroll
  },
  beforeCreate() {
    let global_loading = document.getElementsByClassName("global_loading");
    global_loading[0].style.opacity = "0";
  }
};
</script>

<style lang="scss">
.global_loading {
  display: none !important;
}
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
