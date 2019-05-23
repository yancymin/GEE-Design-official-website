<template>
<div class="ListItem">
    <router-link to="/article/2019-5-23">
    <div class="header">
        <h2>{{listItems.title}}</h2>
        <div class="item-info">
            <span>{{listItems.time}}</span>
            <span>{{listItems.view}}</span>
        </div>
    </div>
    <img class="cover" :src="listItems.cover"></img>
    <div class="des">{{listItems.des}}</div>
    </router-link>
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
    position: relative;
    width: 100%;
    padding: 48px 0;
    border-bottom: 1px solid #E1E7FF;
    transition: all 0.3s ease;

    a {
        z-index: 999;
    }

    /* &:after {
        z-index: 0;
        opacity: 0;
        position: absolute;
        top: 4%;
        left: -4%;
        content: "";
        display: block;
        width: 108%;
        height: 92%;
        border-radius: 3px;
        transition: all 0.3s ease;
        box-shadow: 0 2px 2px 0 rgba(44, 71, 146, 0.17), 0 -1px 1px 0 rgba(44, 71, 146, 0.08);
    } */

    &:hover {
        cursor: pointer;

        /* &:after {
            opacity: 1;
        } */

        h2 {
            color: #002059 !important;
        }

    }

    img {
        width: 100%;
        overflow: hidden;
        border-radius: 3px;
        margin-bottom: 24px;
    }

    .header {
        margin-bottom: 24px;

        h2 {
            color: rgba(0, 33, 89, 0.7);
            font-size: 22px;
            font-weight: 500;
            line-height: 29px;
            margin-bottom: 6px;
            cursor: pointer;
            transition: all 0.3s ease;
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
