<template>
<div class="ListItem">
    <div class="header">
        <h2>{{listItems.title}}</h2>
        <div class="item-info">
            <span>{{listItems.time}}</span>
            <span>{{listItems.view}}</span>
        </div>
    </div>
    <img class="cover" :src="listItems.cover"></img>
    <div class="des">{{listItems.des}}</div>
</div>
</template>

<script>
export default {
    name: "ListItem",
    props: ["listItems"],
};
</script>

<style lang="scss" scoped>
.ListItem {
    width: 700px;
    padding: 48px 0;
    border-bottom: 1px solid #E1E7FF;

    img {
        width: 700px;
        height: 330px;
        overflow: hidden;
        border-radius: 3px;
        margin-bottom: 24px;
    }

    .header {   
        margin-bottom: 24px;

        h2 {
            color: #002059;
            font-size: 22px;
            font-weight: 500;
            line-height: 29px;
            margin-bottom: 6px;
        }

        span {
            color: #BCC2DE;
            font-size: 15px;
            line-height: 25px;

            &:nth-of-type(2) {
                margin-left: 24px;
            }
        }
    }

    .des {
        color: #83879C;
        font-size: 15px;
        line-height: 25px;
    }

}
</style>
