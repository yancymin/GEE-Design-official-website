<template>
   <div class="brand main">
        <Header title='极验品牌' des='Geetest Brand VI' :style="bgc" :src="imgSrc"/>
        <div class="anchor-wrap">
               <div> 
                    <Scroll title="title-gift" href="#anchor-overview" des="品牌概述"/>
                    <Scroll title="title-gift" href="#anchor-logo" des="品牌标识"/>
                </div>
        </div>
        <div class="container">
           
            <div class="overview bottom-68"  id="anchor-overview">
                <h3>
                    品牌概述
                </h3>
                <p class="bottom-30">
                    极验是全球领先的交互安全技术服务提供商，于2012年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和APP提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。
                </p>
                <img class="bottom-20" src="../assets/Brand/content_brand1.png" alt="">
            </div>
            

            <span>更新于 2018.9.1</span>
            <Back-top />
        </div>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
import url from "@/assets/img_visual_header.png";
import Scroll from "@/components/Scroll.vue";
import BackTop from "@/components/BackTop.vue";

export default {
  name: "brand",
  data() {
    return {
      // imgSrc: url,
      bgc: "background-color: #313131;"
    };
  },
  components: {
    Header,
    Scroll,
    BackTop
  }
};
</script>

<style lang="scss" scoped>
.brand {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .anchor-wrap {
    position: fixed;
    width: 200px;
    top: 40vh;

    & > div {
      position: absolute;
      width: 100%;
      left: 500px;
    }
  }

  .brand-logo {
    width: 700px;

    div {
      width: 700px;
      height: 230px;
      display: flex;
      justify-content: space-between;

      & > img {
        width: 220px;
      }
    }
  }

  .brand-color {
    .color-wrap {
      width: 700px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .color-box {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 198px;
        height: 122px;
        background-color: #fff;
        padding: 12px;

        & > figure {
          width: 175px;
          font-size: 13px;
          font-weight: 500;
          line-height: 18px;
          color: #fff;
        }

        & > h4 {
          font-size: 18px;
          font-weight: 500;
          line-height: 25px;
          color: #fff;
        }

        &:nth-of-type(1) {
          background-color: #3873ff;
        }
        &:nth-of-type(2) {
          background-color: #fff;

          h4 {
            color: #002059;
          }

          figure {
            color: #002059;
          }
        }
        &:nth-of-type(3) {
          background-color: #292f3a;
        }
        &:nth-of-type(4) {
          background-color: #566d97;
        }
        &:nth-of-type(5) {
          background-color: #2fc4ff;
        }
        &:nth-of-type(6) {
          background-color: #ffca55; 
        }
      }
    }
  }

  .brand-application {
    width: 100%;
  }
}

.others {
  width: 100%;

  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .box-row {
      width: 700px;
      display: flex;
      justify-content: space-between;
      flex-direction: row;

      img {
        width: 340px;
        height: 100%;
      }
    }
  }
}

span {
  position: relative;
  bottom: -76px;
  left: -308px;
  color: #bcc2de;
  font-size: 12px;
  line-height: 17px;
}
</style>
