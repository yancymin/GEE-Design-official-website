<template>
  <div class="brand main" id="main">
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
        <img src="../assets/Brand/brand1.png" alt="">
      </div>

      <div class="logo bottom-80">
        <h3>标志</h3>
        <p class="bottom-40">
          极验是全球领先的交互安全技术服务提供商，于2012年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和APP提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。
        </p>
        <img class="bottom-30  box-border" src="../assets/Brand/brand2.png" alt="">
        <div class="pic-wrap bottom-30">
          <div><img class="box-border" src="../assets/Brand/brand3.png" alt=""></div>
          <div><img class="box-border" src="../assets/Brand/brand4.png" alt=""></div>
        </div>
        <img class="bottom-40  box-border" src="../assets/Brand/brand5.png" alt="">
        <p class="bottom-40">
          极验是全球领先的交互安全技术服务提供商，于2012年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和APP提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。
        </p>
        <img src="../assets/Brand/brand6.png" alt="">
      </div>

      <div class="color bottom-80">
        <h3>品牌色</h3>
        <p class="bottom-40">
          品牌色在腾讯云品牌视觉传达中起到了核心作用。右图所示为腾讯云品牌 规范颜色色板示意，这些颜色可以运用在任何品牌有关衍生物料中。腾讯 云的每一个品牌色都有着精准匹配合适的Pantone色彩。关于平面印刷物， 一般情况下须使用对应的Pantone色值(单色);若因条件限制无法使用 Pantone色彩，选取对应的CMYK色值做为第二选择。关于显示器作业，须使 用RGB色值或十六进制值。
        </p>
        <div class="colorpanel-wrap bottom-40">
          <ColorPanel :color='color.blue' colorName='极验蓝' hexVal='#3873FF' rgbVal='56, 115, 255' cmykVal='79, 56, 0, 0' />
          <ColorPanel :color='color.blueLight' colorName='极验水蓝' hexVal='#26B9FF' rgbVal='38, 185, 255' cmykVal='67, 13, 0, 0' />
          <ColorPanel :color='color.green' colorName='极验绿' hexVal='#35D2A2' rgbVal='53, 210, 162' cmykVal='65, 0, 51, 0' />
          <ColorPanel :color='color.purpel' colorName='极验紫' hexVal='#9B5CF5' rgbVal='155, 92, 245' cmykVal='63, 67, 0, 0' />
          <ColorPanel :color='color.orange' colorName='极验橘' hexVal='#FD6F2A' rgbVal='253, 111, 42' cmykVal='0, 70, 82, 0' />
          <ColorPanel :color='color.black' colorName='极验蓝黑' hexVal='#292F3A' rgbVal='41, 47, 58' cmykVal='85, 79, 65, 42' />
          <ColorPanel :color='color.gray' colorName='极验浅灰' hexVal='#D8DDE6' rgbVal='216, 221, 230' cmykVal='18, 11, 7, 0' />
        </div>
        <p class="bottom-40">
          极验是全球领先的交互安全技术服务提供商，于2012年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和APP提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。
        </p>
        <img src="../assets/Brand/brand7.png" alt="">
      </div>

      <div class="fontface">
        <h3>品牌专用字体</h3>
        <p class="bottom-40">
          品牌专用字体是品牌视觉识别的重要部分。品牌专用字体风格有助于建立品 牌独特的美感。方正兰亭黑做为腾讯云的中文品牌专用字体，被用于品牌产 品及品牌视觉传达中。我们需要遵循右页所述的品牌字体运用示例，以确保 品牌视觉传达的一致性。 规范颜色色板示意，这些颜色可以运用在任何品牌有关衍生物料中。腾讯 云的每一个品牌色都有着精准匹配合适的Pantone色彩。关于平面印刷物， 一般情况下须使用对应的Pantone色值(单色);若因条件限制无法使用 Pantone色彩，选取对应的CMYK色值做为第二选择。关于显示器作业，须使 用RGB色值或十六进制值。
        </p>
        <img class="bottom-30  box-border" src="../assets/Brand/brand8.png" alt="">
        <img class="box-border" src="../assets/Brand/brand9.png" alt="">
      </div>
      <span class="timestamp">更新于 2018.9.1</span>
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
        gray: "#D8DDE6;"
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
  .overview {
    width: 100%;
  }

  .logo {
    width: 100%;

    .pic-wrap {
      width: 100%;
      display: flex;
      justify-content: space-between;

      & > div {
        width: calc(50% - 10px);
        height: calc(50% - 10px);
        img {
          width: 100%;
        }
      }
    }
  }
  .color {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    .colorpanel-wrap {
      width: 100%;
    }

    img {
      width: 480px;
      align-self: center;
    }

    // .text-pic {
    //   width: 100%;
    //   display: flex;
    //   justify-content: space-between;
    //   // align-items: center;

    //   p {
    //       margin-right: 60px;
    //   }

    //   img {
    //     width: 300px;
    //     // flex-grow: 2;
    //   }
    // }
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


@media screen and (max-width: 414px) {
#main {
  .color {
    img {
      width: 100%;
    }
  }
}
}
</style>
