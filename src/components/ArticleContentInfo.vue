<template>
<div class="ArticleContentInfo">
    <div class="tags"></div>
    <div class="info">{{viewCount()}} 人阅读</div>
</div>
</template>

<script>
import listItems from "@/assets/Article/list.json";

export default {
    name: "ArticleContentInfo",
    data() {
        return {
            listItems : listItems,
            view: listItems[0].view
        }
    },
    methods: {
        viewCount() {
            return this.view
        }
    }
}
</script>
