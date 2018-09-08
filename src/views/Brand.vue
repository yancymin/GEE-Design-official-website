<template>
  <div class="brand main">
    <Header title='极验品牌' des='Geetest Brand VI' :style="bgc" />
    <div class="anchor-wrap">
      <ul class="ul scroll">
        <li v-for="(subItem, subIndex) in jsonData" :key="subIndex">
          <a href="javascript:void(0)" @click="goAnchor('#anchor-' + subItem.english, subIndex)" :class="{active: subIndex === nowSubIndex}">{{ subItem.chinese }}</a>
        </li>
      </ul>
    </div>
    <div class="container">

      <div class="overview bottom-80" id="anchor-overview">
        <h3>
          品牌概述
        </h3>
        <p class="bottom-30">
          极验是全球领先的交互安全技术服务提供商，于2012年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和APP提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。
        </p>
        <img class="bottom-20" src="../assets/Brand/content_brand1.png" alt="">
      </div>

      <ColorPanel :color='color.blue' colorName='极验蓝' hexVal='#3873FF' rgbVal='56, 115, 255' cmykVal='79, 56, 0, 0' />
      <ColorPanel :color='color.blueLight' colorName='极验水蓝' hexVal='#26B9FF' rgbVal='38, 185, 255' cmykVal='67, 13, 0, 0' />
      <ColorPanel :color='color.green' colorName='极验绿' hexVal='#35D2A2' rgbVal='53, 210, 162' cmykVal='65, 0, 51, 0' />
      <ColorPanel :color='color.purpel' colorName='极验紫' hexVal='#9B5CF5' rgbVal='155, 92, 245' cmykVal='63, 67, 0, 0' />
      <ColorPanel :color='color.orange' colorName='极验橘' hexVal='#FD6F2A' rgbVal='253, 111, 42' cmykVal='0, 70, 82, 0' />
      <ColorPanel :color='color.black' colorName='极验蓝黑' hexVal='#292F3A' rgbVal='41, 47, 58' cmykVal='85, 79, 65, 42' />
      <ColorPanel :color='color.gray' colorName='极验浅灰' hexVal='#D8DDE6' rgbVal='216, 221, 230' cmykVal='18, 11, 7, 0' />


      <span>更新于 2018.9.1</span>
      <Back-top />
    </div>
  </div> 
</template>

<script>
import Header from "@/components/Header.vue";
import Scroll from "@/components/Scroll.vue";
import BackTop from "@/components/BackTop.vue";
import ColorPanel from "@/components/ColorPanel.vue";

export default {
  name: "brand",
  data() {
    return {
      bgc: "background-color: #292F3A;",
      color: {
        blue: "#3873FF;",
        blueLight: "#26B9FF;",
        green: "#35D2A2;",
        purpel: "#9B5CF5;",
        orange: "#FD6F2A;",
        black: "#292F3A;",
        gray: "#D8DDE6;",
      }
    };
  },
  components: {
    Header,
    Scroll,
    BackTop,
    ColorPanel
  }
};
</script>

<style lang="scss" scoped>
.brand {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

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
