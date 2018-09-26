<template>
  <div class="interface main" id="main">
    <Loading />
    <Header title="用户界面设计" des="User Interface Design" :imageSrc='imageSrc' />
    <div class="container">

      <div class="overview bottom-80 article" :id="'anchor-' + jsonData[0].id">
        <h3>
          行为验证产品概述
        </h3>
        <p class="bottom-10">
          行为验证是基于生物的行为特征，结合人工智能技术的验证安全解决方案，帮助全球 26 万家网站和 APP 智能区分人机，杜绝恶意程序带来的业务损失，每日在用户察觉不到的地方用 AI 抵挡饿了上亿机器脚本攻击。
        </p>
        <p class="bottom-40">行为验证让安全性有了质的飞跃，同时让用户通过验证平均时长降到 1.82 秒，极大的提高了用户的体验。从 2012 年正式推出行为验证产品以来，目前已经有超过 26 万家网站和 APP 使用极验的交互安全服务，每天提供超过 8 亿次的交互安全服务，为上亿网民节约近 30 万小时的宝贵时间。</p>
        <img class="box-border" src="../assets/Interface/interface1.png" alt="">
      </div>

      <div class="ui-base bottom-80 article" :id="'anchor-' + jsonData[1].id">
        <h3>UI 基础</h3>
        <p class="bottom-40">
          “行为验证”验证产品的 UI 基础：<strong>验证按钮(Test-Button)、验证面板(Test-Card)</strong>
        </p>
        <img src="../assets/Interface/interface2.gif" alt="" class="bottom-40">
        <p class="bottom-40">我们设计了一个全新而独特的验证按钮，它作为网站与用户的交互控件，提供了安全检验的触发和状态的显示作用。通过前端个性化样式的设置，验证按钮可以很好的放置在客户网站表单中，用户可以清楚的了解到目前的验证状态。相比传统的字符验证码，验证按钮在视觉和交互体验上都要更友好。</p>
        <img src="../assets/Interface/interface3.png" alt="" class="bottom-40">
        <p class="bottom-10">
          在按钮的整个交互流程中，我们设计一套符合逻辑、感知流畅的“小球”动效：按钮上的“雷达”会跟随着用户的鼠标而移动，这是极验服务端收集全页面数据的视觉体现；点击按钮后，扫描动画表示极验正在智能检测当前用户和设备的风险等级；在快速的检测之后，按钮会给出检测结果动画，普通用户便能轻松的“一点即过”，整个验证过程不到 1 秒钟。
        </p>
        <p class="bottom-40">
          由于用户风险等级、群体架构、语言、以及交互习惯的不同，我们精心设计了多种验证形式，在保证网站安全的同时，提供给 C 端用户较好的验证体验。
        </p>
        <img src="../assets/Interface/interface4.png" alt="" class="bottom-40 box-border">
        <p class="bottom-40">为了保证验证形式视觉和交互的一致性，我们设计了一套通用的验证面板，实现了同类型验证码的快速开发，不同设备的适配，规范定制化 UI 需求，提高了灵活性和开发效率。</p>
        <img src="../assets/Interface/interface5.png" alt="" class="box-border">
      </div>

      <div class="ui-element article" :id="'anchor-' + jsonData[2].id">
        <h3>UI 元素</h3>
        <p class="bottom-30">“行为验证”验证产品的 UI 元素：
          <strong>验证控件(Controls)、功能组件(Insert Group)、反馈条(Check Bar)</strong>
        </p>
        <p class="bottom-40">我们设计了一套直观的、符合自然映射的 UI 控件。我们将滑块控件设计得能更好的引导用户去操作，至 2012 年以来，“滑块拼图行为验证”慢慢改变了用户的使用习惯，将难认、难用的“字符验证码”推下历史舞台。在验证的状态指示上，我们也进行了精心的设计，尽量用图像、动效来替代文字，引导用户的操作，让一切变得“自然”。</p>
        <img src="../assets/Interface/interface6.png" alt="" class="bottom-40">
        <p class="bottom-40">我们设计了能灵活调用的功能条，可以高效率的进行调整，满足各种需求。</p>
        <img src="../assets/Interface/interface7.png" alt="" class="bottom-40">
        <p class="bottom-40">反馈条能直观的向用户展示结果，给予用户一定的成就感和指导用户操作。</p>
        <img src="../assets/Interface/interface8.png" alt="" class="bottom-40">
        <p class="bottom-40">“行为验证”验证产品的 UI 元素能统一更改主题色的，甚至进行个性化的定制，满足客户在业务上的需求。</p>
        <div class="color-wrap bottom-30">
          <ColorPanel :color='color.bilibili' colorName='bilibili' hexVal='#FFCA55' rgbVal='255, 202, 85' />
        </div>
        <img src="../assets/Interface/interface9.png" alt="" class="box-border">
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

import HeaderImage from '@/assets/Header/3.jpg'

export default {
  name: 'interface',
  data () {
    return {
      imageSrc: HeaderImage,
      color: {
        bilibili: '#EF5C8C;'
      },
      jsonData: [
        { title: '产品概述', id: 'overview' },
        { title: 'UI 基础', id: 'base' },
        { title: 'UI 元素', id: 'element' }
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
  mounted: function () {
    let cmyk = document.querySelector('#cmyk')
    cmyk.style.display = 'none'
  }
}
</script>

<style lang="scss" scoped>
.interface {
  .overview {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;

    // img {
    //   width: 440px;
    //   margin-top: 20px;
    //   align-self: center;
    // }
  }

  .ui-base {
    width: 100%;
  }

  .ui-element {
    width: 100%;
  }
}

@media screen and (max-width: 1220px) {
  #main {
    .colorpanel {
      width: auto;
    }
  }
}

@media screen and (max-width: 414px) {
  .interface .overview img {
    width: 100%;
  }
}
</style>
