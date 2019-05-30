<template>
  <div id="main">
    <BackTop/>
    <div class="container">
      <ListItem v-for="(item, i) in listItems" :key="i" :listItems="item"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ListItem from "@/components/ListItem.vue";
import BackTop from "@/components/BackTop.vue";
import HeaderImage from "@/assets/Header/2.jpg";
import listItems from "@/assets/Article/list.json";

export default {
  name: "articleList",
  data() {
    return {
      imageSrc: HeaderImage,
      listItems: listItems
    };
  },
  components: {
    Header,
    BackTop,
    ListItem
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 700px;
  margin: 62px 0;
  padding: 0 !important;
  border-bottom: none !important;
}
@media screen and (max-width: 540px) {
  .container {
    margin-top: 0px !important;
  }
}
</style>
