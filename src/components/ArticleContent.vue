<template>
  <div class="ArticleContent">
    <Header :title="this.title" :imageSrc="this.imageSrc" style="background-blend-mode: soft-light;filter: opacity(0.8);"/>
    <slot></slot>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "ArticleContent",
  props: { title: String,  imageSrc: String },
  components: {
    Header
  },
  data() {
    return {
      title: title,
      imageSrc: imageSrc
    };
  }
};
</script>

<style lang="scss" scoped>
.ArticleContent {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
