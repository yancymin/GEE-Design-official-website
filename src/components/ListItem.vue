<template>
<div class="ListItem">
    <transition name="fade" appear mode="out-in">
    <router-link :to=listItems.link>
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
    </transition>
</div>
</template>

<script>
// import listItems from "@/assets/Article/list.json";

export default {
    name: "ListItem",
    props: ["listItems"],
    // data() {
    //     return {
    //         listItems: listItems
    //     }
    // }
};
</script>

<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.ListItem {
    position: relative;
    width: 100%;
    padding: 48px 0;
    border-bottom: 1px solid #E1E7FF;
    transition: all 0.3s ease;

    a {
        display: inline-block;
        z-index: 999;
        width: 100%;
        height: 100%;
        position: relative;
    }

    &:after {
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
        /* box-shadow: 0 2px 2px 0 rgba(44, 71, 146, 0.17), 0 -1px 1px 0 rgba(44, 71, 146, 0.08); */
        box-shadow: 0 20px 60px rgba(61, 79, 127, 0.17);
    }

    &:hover {
        cursor: pointer;

        &:after {
            opacity: 1;
        }

        h2 {
            /* color: #3873FF !important; */
        }

        img {
            filter: opacity(0.75);
        }

    }

    img {
        width: 100%;
        overflow: hidden;
        border-radius: 3px;
        margin-bottom: 24px;
        transition: all 0.3s ease;

    }

    .header {
        margin-bottom: 24px;

        h2 {
            color: rgba(0, 33, 89, 1);
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
            transition: all 0.3s ease;

            &:nth-of-type(2) {
                margin-left: 24px;
            }
        }
    }

    .des {
        color: #83879C;
        font-size: 15px;
        line-height: 25px;
        transition: all 0.3s ease;
    }

}
</style>
