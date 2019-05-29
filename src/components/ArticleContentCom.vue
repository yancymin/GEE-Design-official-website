<template>
  <div class="ArticleContentCom">
    <articleHeader :title="title" :imageSrc="imageSrc"/>
    <!-- <ArticleContentInfo :listItems="listItems"/> -->
    <BackTop/>
  </div>
</template>

<script>
import articleHeader from "@/components/articleHeader.vue";
import BackTop from "@/components/BackTop.vue";
// import ArticleContentInfo from "@/components/ArticleContentInfo.vue";


export default {
  name: "ArticleContentCom",
  props: ["listItems", "title", "imageSrc"],
  components: {
    articleHeader,BackTop,
  },
  data() {
    return {
      // listItems: this.listItems,
    }
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
