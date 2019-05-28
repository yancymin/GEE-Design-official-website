<template>
  <div class="ArticleContentCom">
    <articleHeader :title="this.title" :imageSrc="this.imageSrc"/>
    <BackTop/>
  </div>
</template>

<script>
import articleHeader from "@/components/articleHeader.vue";
import BackTop from "@/components/BackTop.vue";

export default {
  name: "ArticleContentCom",
  props: { title: String, imageSrc: String },
  components: {
    articleHeader,BackTop
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
