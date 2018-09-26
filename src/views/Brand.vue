<template>
  <div class="brand main" id="main">
    <loading />
    <Header title='极验品牌' des='Geetest Brand VI' :imageSrc='imageSrc' />
    <div class="container">
      <div class="overview bottom-80 article" :id="'anchor-'+jsonData[0].id">
        <h3>
          品牌概述
        </h3>
        <p class="bottom-30">
          极验是全球领先的交互安全技术服务提供商，于 2012 年在武汉成立。全球首创“行为式验证”技术，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和 APP 提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。我们的目标是让互联网交互更加美好。
        </p>
        <img src="../assets/Brand/brand1.png" alt="">
      </div>

        <div class="logo bottom-80 article" :id="'anchor-'+jsonData[1].id">
          <h3>品牌标志</h3>
          <p class="bottom-30">
            极验 (Geetest) 标志由两元素组成：图形标志、文字标志。其元素间的相对大小和位置是固定的，并且文字标志不能单独使用。极验的标志只能从设计软件文件中直接拷贝使用，而不是重新绘制或者擅自组合。本规范的各种电子格式文件可在极验用户体验设计中心的资源下载页面进行下载。
          </p>
          <p class="bottom-40">
            极验标志的组合形式有四种：1. 标准标识；2. 带有 Slogan 的标识；3. 中文标识；4. 单独的图形。这四种组合的标识根据不同的场景来使用，除此以外，不允许擅自组合。
          </p>
          <img class="bottom-30  box-border" src="../assets/Brand/brand2.png" alt="">
          <div class="pic-wrap bottom-30">
            <div><img class="box-border" src="../assets/Brand/brand3.png" alt=""></div>
              <div><img class="box-border" src="../assets/Brand/brand4.png" alt=""></div>
              </div>
              <img class="bottom-40  box-border" src="../assets/Brand/brand5.png" alt="">
              <p class="bottom-40">
                为了保证品牌标志的完整性以及保持品牌统一性，极验标志在不同的场景中，要避免不规范的使用样式。
              </p>
              <img src="../assets/Brand/brand6.png" alt="">
      </div>

              <div class="color bottom-80 article" :id="'anchor-'+jsonData[2].id">
                <h3>品牌标准色</h3>
                <p class="bottom-40">
                  下图所示为极验品牌的规范颜色色板，这些颜色可以运用在任何品牌有关的产品设计和衍生物料中。极验标识由极验蓝、极验蓝黑构成；极验产品由极验蓝、极验青、极验淡紫和极验橘红色构成；极验视觉的延展由极验白、极验浅灰等构成。Web 色以 RGB 色值为准，平面物料以四色印刷 CMYK 色值为准。
                </p>
                <div class="colorpanel-wrap bottom-40">
                  <ColorPanel :color='color.blue' colorName='极验蓝' hexVal='#3873FF' rgbVal='56, 115, 255' cmykVal='79, 56, 0, 0' />
                  <ColorPanel :color='color.blueLight' colorName='极验水蓝' hexVal='#26B9FF' rgbVal='38, 185, 255' cmykVal='67, 13, 0, 0' />
                  <ColorPanel :color='color.white' colorName='极验白' hexVal='#FFFFFF' rgbVal='255, 255, 255' cmykVal='0, 0, 0, 0' />
                  <ColorPanel :color='color.green' colorName='极验青' hexVal='#35D2A2' rgbVal='53, 210, 162' cmykVal='65, 0, 51, 0' />
                  <ColorPanel :color='color.purpel' colorName='极验淡紫' hexVal='#9B5CF5' rgbVal='155, 92, 245' cmykVal='63, 67, 0, 0' />
                  <ColorPanel :color='color.orange' colorName='极验橘红' hexVal='#FD6F2A' rgbVal='253, 111, 42' cmykVal='0, 70, 82, 0' />
                  <ColorPanel :color='color.black' colorName='极验蓝黑' hexVal='#292F3A' rgbVal='41, 47, 58' cmykVal='85, 79, 65, 42' />
                  <ColorPanel :color='color.gray' colorName='极验浅灰' hexVal='#D8DDE6' rgbVal='216, 221, 230' cmykVal='18, 11, 7, 0' />
                </div>
                <p class="bottom-40">
                  合适恰当的颜色比例使用可确保所有用户正确认知极验品牌。使用极验品牌色时，极验蓝 (01) 应做为品牌主色；极验蓝 (01) 与大面积的极验白 (03) 一起使用，可体现清新干净的极验品牌形象；极验白 (03)和极验蓝黑 (07) 一起使用会有利于浏览的高对比性；其它的辅色则有助于极验产品和平面应用的使用和延展。
                </p>
                <img src="../assets/Brand/brand7.png" alt="">
      </div>

                <div class="fontface article" :id="'anchor-'+jsonData[3].id">
                  <h3>品牌专用字体</h3>
                  <p class="bottom-40">
                    思源黑体 (SourceHanSansSc) 做为极验的中文品牌专用字体，被用于极验产品及视觉传达中。我们需要遵循下图所述的品牌字体运用示例，以确保极验品牌视觉设计传达的一致性。
                  </p>
                  <img class="bottom-30  box-border" src="../assets/Brand/brand8.png" alt="">
                  <img class="box-border" src="../assets/Brand/brand9.png" alt="">
      </div>
                  <div class="footer-info">
                    <span class="timestamp bottom-info">更新于 2018.9.1</span>
                    <span class="copyright bottom-info">Copyright © 2018 Geetest Inc. All Rights Reserved.</span>
                  </div>
                  <AnchorScroll :jsonData="jsonData" />
                  <Back-top />
                </div>
              </div>
</template>

<script>
import Header from '@/components/Header.vue'
import BackTop from '@/components/BackTop.vue'
import ColorPanel from '@/components/ColorPanel.vue'
import AnchorScroll from '@/components/AnchorScroll'
import Loading from '@/components/Loading'

import HeaderImage from '@/assets/Header/6.jpg'

export default {
  name: 'brand',
  data () {
    return {
      imageSrc: HeaderImage,
      color: {
        blue: '#3873FF;',
        blueLight: '#26B9FF;',
        white: '#fff; border: 1px solid #F1F3F4;',
        green: '#35D2A2;',
        purpel: '#9B5CF5;',
        orange: '#FD6F2A;',
        black: '#292F3A;',
        gray: '#D8DDE6;'
      },
      jsonData: [
        { title: '品牌概述', id: 'overview' },
        { title: '品牌标志', id: 'sign' },
        { title: '标准色', id: 'color' },
        { title: '字体', id: 'fonts' }
      ]
    }
  },
  components: {
    Header,
    // Scroll,
    AnchorScroll,
    BackTop,
    ColorPanel,
    Loading
  }
  // mounted() {
  //   let headerBg = document.querySelector('#header');
  //   headerBg.style.animation = "1s onloadScale";
  // }
}
</script>

<style lang="scss" scoped>
.brand {
  .container {
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
    }
  }
  .fixed-panel {
    position: fixed;
    right: 0;
    top: 50%;
    li {
      list-style: none;
      a {
        font-size: 15px;
        color: #5f6591;
        line-height: 32px;
        transition: all 0.2s;
      }
      a.active {
        color: #fff;
        background-color: blue;
      }
    }
  }
}

@media screen and (max-width: 1220px) {
  #main {
    .colorpanel {
      width: auto;
    }
    .color {
      img {
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 414px) {
  #main {
    .color {
      img {
        width: 90%;
      }
    }
  }
}
</style>
