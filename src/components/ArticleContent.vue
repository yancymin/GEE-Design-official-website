<template>
  <div class="ArticleContent">
    <articleHeader :title="this.title" :imageSrc="this.imageSrc"/>
    <slot></slot>
  </div>
</template>

<script>
import articleHeader from "@/components/articleHeader.vue";

export default {
  name: "ArticleContent",
  props: { title: String, imageSrc: String },
  components: {
    articleHeader
  },
  data() {
    return {
      title: title,
      imageSrc: imageSrc
    };
  }
};
</script>

<style lang="scss">
.ArticleContent {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  & .articleHeader {
    background-blend-mode: soft-light;
    filter: opacity(0.8);
  }
}
</style>
