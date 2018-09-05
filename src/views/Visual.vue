<template>
<div class="visual main">
        <Header title="视觉设计" des="GEE Visual Design" :src="imgSrc" :style="bgc"/>
        <div class="anchor-wrap">
               <div> 
                    <Scroll title="title-gift" href="#anchor-overview" des="设计概述"/>
                    <Scroll title="title-gift" href="#anchor-uibase" des="UI 基础"/>
                    <Scroll title="title-gift" href="#anchor-imgs" des="图像与图标"/>
                </div>
        </div>
        <div class="container">
           
            <div class="overview bottom-68"  id="anchor-overview">
                <h3>
                    GEE Desgin 设计概述
                </h3>
                <p class="bottom-10">
                    极验作为全球领先的交互安全技术服务提供商，率先利用生物特征与人工智能技术来解决交互安全问题。在极验品牌形象下，极验用户体验设计中心制定了一套 GEE Desgin 规范，来指导设计师进行极验产品的界面设计和视觉设计工作。
                </p>
                <p class="bottom-10">GEE Desgin 的遵循以下三点设计原则：以人为本；整体性；多元化。</p>
                <p  class="bottom-30">极验一直致力于消灭扰人的验证码，用先进的技术来解决互联网中的交互安全问题。在与网络黑产的安全拉锯战中，我们不断提升用户在互联网中的交互体验，并保证产品体验与安全的平衡；极验给 B 端客户提供安全保障的同时也需要给 C 端用户创造更好的交互体验，让 B 端更好的连接 C 端。极验的安全产品须保持设计的一致性，提高客户的工作效率，降低用户的学习成本；极验作为互联网的毛细血管，必须不断创新、打破束缚，勇于使用新技术解决问题，在设计上不断探索、升级。</p>
                <img class="box-border bottom-20" src="../assets/Visual/content_visual1.png" alt="">

            </div>
            <div class="brand-logo bottom-68" id="anchor-uibase">
                <h3>
                    UI 基础
                </h3>
                <p class="bottom-30">
                   “行为验证”验证产品的 UI 基础：验证按钮(test-button)、验证面板(test-card)。
                </p>
                <img class="box-border bottom-30" src="../assets/Visual/content_visual2.png" alt="">
                <p class="bottom-30">
                   我们设计了一个全新而独特的验证按钮，它作为网站与用户的交互控件，提供了安全检验的触发和状态的显示作用。通过前端个性化样式的设置，验证按钮可以很好的放置在客户网站表单中，用户可以清楚的了解到目前的验证状态。相比传统的字符验证码，验证按钮在视觉和交互体验上都要更友好。
                </p>
                <img class="box-border bottom-30" src="../assets/Visual/content_visual3.png" alt="">
                <p class="bottom-30">
                   在按钮的整个交互流程中，我们设计一套符合逻辑、感知流畅的“小球”动效：按钮上的“雷达”会跟随着用户的鼠标而移动，这是极验服务端收集全页面数据的视觉体现；点击按钮后，扫描动画表示极验正在智能检测当前用户和设备的风险等级；在快速的检测之后，按钮会给出检测结果动画，普通用户便能轻松的“一点即过”，整个验证过程不到 1 秒钟。
                </p>
            </div>

            <span>更新于 2018.9.1</span>
            <Back-top />
        </div>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Scroll from "@/components/Scroll.vue";
import BackTop from "@/components/BackTop.vue";
import imgUrl from "@/assets/img_visual_header.png";

export default {
  name: "Visual",
  data() {
    return {
      imgSrc: imgUrl,
      bgc: "background-color: #4B85FF;"
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
.visual {
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
