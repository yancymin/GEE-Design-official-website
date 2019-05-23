<template>
  <div id="main">
       <router-view></router-view>
    <Header title="文章列表" des="Design Article " :imageSrc="imageSrc"/>
    <BackTop/>
    <div class="container">
      <ListItem v-for="(item, i) in listItems" :key="i" :listItems="listItems[i]"/>
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
    margin: 62px 0 !important;
    padding: 0 !important;
    border-top: 1px solid #E1E7FF;
    border-bottom: none !important;

}
</style>
