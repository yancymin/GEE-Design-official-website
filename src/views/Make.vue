<template>
  <div class="make main" id="main">
    <Loading />
    <Header title="极验制造" des="G-MAKE" :imageSrc='imageSrc' />
    <div class="container">
      <div class="overview bottom-80">
        <h3>
          属于极验小伙伴的礼物
        </h3>
        <p>
          极验制造 G－MAKE 是极验内部孵化的全新品牌，由极验用户体验设计中心的设计部负责。G－MAKE 在极验统一的品牌视觉识别系统下，衍生出更具创新、新颖、个性的一个有趣形象。在“极验制造”这个品牌下，我们输出了一系列文化周边产品，发放给公司员工、合作伙伴、活动嘉宾以及特邀访客，希望给他们传递出我们充满活力、创造力的形象。
        </p>
      </div>
      <div class="brand-logo bottom-80 article" :id="'anchor-' + jsonData[0].id">
        <h3>
          品牌标志
        </h3>
        <p class="bottom-40">
          极验制造的标志由图形 “g” 和文字标志 “MAKE” 组成，其元素间的相对大小和位置是固定的，不能重新绘制或者擅自组合。文字标志不能单独使用，但图形标志可以单独使用。
        </p>
        <img class="box-border bottom-30" src="../assets/Make/content_make1.png" alt="">
        <img class="bottom-30" src="../assets/Make/content_make2.png" alt="">
        <div class="img-list-box">
          <div><img class="box-border" src="../assets/Make/content_make3.png" alt=""></div>
          <div class="center-pic"><img src="../assets/Make/content_make4.png" alt=""></div>
          <div><img src="../assets/Make/content_make5.png" alt=""></div>
        </div>
      </div>
      <div class="brand-color bottom-80 article" :id="'anchor-' + jsonData[1].id">
        <h3>品牌标准色</h3>
        <p class="bottom-40">极验制造的标准色延续了极验品牌，由极验蓝和极验蓝黑作为标志配色、极验白和极验铬黄等作为视觉延展。以下颜色可以运用在任何有关衍生物料中。极验制造品牌的极验蓝作为品牌主色，搭配极验白一起应用，保持干净、干练的形象。极验蓝黑和极验金作为辅色进行品牌的视觉延展。Web 色以 RGB 色值为准，平面物料以四色印刷 CMYK 色值为准。</p>
        <div class="color-wrap">
          <ColorPanel :color='color.blue' colorName='极验蓝' hexVal='#3873FF' rgbVal='56, 115, 255' cmykVal='100, 23, 10, 0' />
          <ColorPanel :color='color.white' colorName='极验白' hexVal='#FFFFFF' rgbVal='255, 255, 255' cmykVal='0, 0, 0, 0' />
          <ColorPanel :color='color.black' colorName='极验蓝黑' hexVal='#292F3A' rgbVal='41, 47, 58' cmykVal='85, 79, 65, 42' />
          <ColorPanel :color='color.gray' colorName='极验蓝灰' hexVal='#566D97' rgbVal='89, 109, 151' cmykVal='60, 15, 10, 30' />
          <ColorPanel :color='color.blueLight' colorName='极验水蓝' hexVal='#26B9FF' rgbVal='38, 185, 255' cmykVal='67, 13, 0, 0' />
          <ColorPanel :color='color.yellow' colorName='极验铬黄' hexVal='#FFCA55' rgbVal='255, 202, 85' cmykVal='0, 20, 100, 0' />
        </div>

      </div>
      <div class="brand-application bottom-80 article" :id="'anchor-' + jsonData[2].id">
        <h3>品牌应用</h3>
        <p class="bottom-40">将极验制造的视觉品牌形象应用在各产品中，以统一的设计方式建立完整的一套系统。</p>
        <img class="bottom-30" src="../assets/Make/content_make6.png" alt="">
        <img class="box-border bottom-30" src="../assets/Make/content_make7.png" alt="">
      </div>
      <div class="gee-tee bottom-80 article" :id="'anchor-' + jsonData[3].id">
        <h3>GEE Tee</h3>
        <p class="bottom-40">GEE Tee 是极验制造的文化服装系列产品。极验每年都会制作主题衫、节日衫和卫衣，用于发放给公司员工或赠送给合作伙伴等。GEE Tee 是极验的一个窗口，希望能传递给穿着者和周围人充满活力、富有创造力的形象。</p>
        <img class="bottom-30" src="../assets/Make/content_make8.png" alt="">
      </div>
      <div class="others article" :id="'anchor-' + jsonData[4].id">
        <h3>其它产品</h3>
        <p class="bottom-40">极验制造除了 GEE Tee 外，还有更多周边产品。</p>
        <div class="others-content">
          <div class="bottom-30"><img src="../assets/Make/content_make9-1.jpg" alt=""></div>
          <div class="bottom-30"><img src="../assets/Make/content_make9.png" alt=""></div>
          <div class="box-row bottom-30"><img src="../assets/Make/content_make10.png" alt=""><img src="../assets/Make/content_make11.png" alt=""></div>
          <div class="bottom-30"><img src="../assets/Make/content_make12.png" alt=""></div>
          <div class="box-row bottom-30"><img src="../assets/Make/content_make13.png" alt=""><img src="../assets/Make/content_make14.png" alt=""></div>
          <div class="bottom-30"><img src="../assets/Make/content_make15.png" alt=""></div>
          <div class="box-row"><img src="../assets/Make/content_make16.png" alt=""><img src="../assets/Make/content_make17.png" alt=""></div>
        </div>
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
import Scroll from '@/components/Scroll.vue'
import BackTop from '@/components/BackTop.vue'
import ColorPanel from '@/components/ColorPanel.vue'
import AnchorScroll from '@/components/AnchorScroll'
import Loading from '@/components/Loading'

import HeaderImage from '@/assets/Header/4.jpg'

export default {
  name: 'Make',
  data () {
    return {
      imageSrc: HeaderImage,
      color: {
        blue: '#3873FF;',
        white: '#fff; border: 1px solid #F1F3F4;',
        black: '#292F3A;',
        gray: '#566D97;',
        blueLight: '#26B9FF;',
        yellow: '#FFCA55;'
      },
      jsonData: [
        { title: '品牌标志', id: 'logo' },
        { title: '标准色', id: 'color' },
        { title: '应用', id: 'app' },
        { title: 'GEE Tee', id: 'geetee' },
        { title: '其它', id: 'others' }
      ]
    }
  },
  components: {
    Header,
    Scroll,
    BackTop,
    ColorPanel,
    AnchorScroll,
    Loading
  },
  mounted () {
    this.$progress.done()
  }
}
</script>

<style lang="scss" scoped>
.make {
  .overview {
    width: 100%;
  }

  .brand-logo {
    width: 100%;
    .img-list-box {
      .center-pic {
        margin: 0 30px;
      }
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div {
        width: calc(100% - 60px);
      }
    }
  }
  .brand-color {
    width: 100%;

    .color-wrap {
      width: 100%;
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

  .gee-tee {
    width: 100%;
  }
}

.others {
  width: 100%;
  .others-content {
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
      height: 100%;
    }
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

.active {
  background-color: rgb(30, 105, 53);
  opacity: 0.2;
}

@media screen and (max-width: 1220px) {
    .others {
    .others-content {
      .box-row {
        width: 100%;
        flex-direction: column;

        img {
          width: 100%;

          &:first-of-type {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .color-wrap {
    .colorpanel {
      width: 100%;
    }
  }
  .others {
    .others-content {
      .box-row {
        width: 100%;
        flex-direction: column;

        img {
          width: 100%;

          &:first-of-type {
            margin-bottom: 30px;
          }
        }
      }
    }
  }
}
</style>
