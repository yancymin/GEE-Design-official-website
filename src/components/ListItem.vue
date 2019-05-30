<template>
<div class="ListItem">
    <router-link :to="{path: listItems.link, query: itermJson}">
        <div class="header">
            <h2>{{listItems.title}}</h2>
            <div class="item-info">
                <span>{{listItems.time}}</span>
                <span>{{viewCount()}} 人阅读</span>
            </div>
        </div>
        <div class="cover-wrap"> <img class="cover" :src="listItems.cover"></img></div>
        <div class="des">{{listItems.des}}</div>
    </router-link>
</div>
</template>

<script>
export default {
    name: "ListItem",
    props: ["listItems"],
    data() {
        const {
            time,
            tags,
            view
        } = this.listItems
        return {
            itermJson: {
                time,
                tags,
                view
            }
        }
    },
    methods: {
        viewCount() {
            return this.listItems.view
        }
    }
}
</script>

<style lang="scss" scoped>
.ListItem {
    position: relative;
    width: 100%;
    padding: 48px 0;
    border-bottom: 1px solid #E1E7FF;
    transition: all 0.3s ease;

    .cover-wrap {
        display: block;
        width: 100%;
        overflow: hidden;
        border-radius: 4px;
    }

    a {
        display: inline-block;
        z-index: 998;
        width: 100%;
        height: 100%;
        position: relative;
    }

    &::before {
        content: "";
        z-index: 998;
        display: block;
        position: absolute;
        margin-top: 2px;
        width: 24px;
        height: 24px;
        right: 0;
        background-image: url("../assets/Article/title_arrow.svg");
        transform: translateX(-100%);
        opacity: 0;
        transition: all 0.2s ease-out;
        transition-delay: 0.04s;
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
        /* box-shadow: 0 20px 60px rgba(61, 79, 127, 0.17); */
        /* background-color: #F7F9FC; */
    }

    &:hover {
        cursor: pointer;

        &::before {
            opacity: 1;
            transform: translateX(0);
        }

        &::after {
            opacity: 1;
        }

        img {
            transform: scale(1.03);
        }

    }

    img {
        width: 100%;
        overflow: hidden;
        border-radius: 3px;
        transition: all 0.25s ease-out;
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
            transition: all 0.2s ease-out;
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
        margin-top: 24px;
    }

}
</style>
