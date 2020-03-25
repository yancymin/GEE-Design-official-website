<template>
  <div id="main">
    <ArticleContentCom title="极验官网改版-网页设计" imageSrc="/image/cover-20190216.png" :jsonData="jsonData"/>
    <div class="container">
      <ArticleContentInfo/>
      <h1 :id="'anchor-'+jsonData[0].id">项目背景</h1>
      <p>为了满足公司业务需要和提升网站设计品质，极验设计团队对官网进行改版。在视觉上，采用了全新的设计风格，网页和产品的设计语言更加统一；在体验上，梳理了全站的信息流，增加交互动效细节，让网页更利于阅读。整个官网改版前后历时 2 个月。</p>
      <img src="/articleImg/2019-02-16/image1.png" alt>
      <p>极验是全球领先的交互安全技术服务提供商，率先利用生物特征与人工智能技术解决交互安全问题，为企业网站和 APP 提供一站式交互安全解决方案，抵御恶意攻击保护企业资产。</p>
      <img src="/articleImg/2019-02-16/image2.png" alt>
      <h1 :id="'anchor-'+jsonData[1].id">极验网站页面设计</h1>
      <p>极验这次的官网改版相比之前网站，整体选择了浅色调的配色，视觉以简洁、清爽为主。我们给官网做了很多传达力强的轴侧图案，在图标和控件上，没有做过多的扁平设计，而是赋予元素一些质感。除此之外，页面上编排了很多充满细节的交互动效，使白色系的网站看上去更丰富。</p>
      <img src="/articleImg/2019-02-16/image4.gif" alt>
      <img src="/articleImg/2019-02-16/image5.png" alt>
      <h1 :id="'anchor-'+jsonData[2].id">动效前端实现</h1>
      <p>在官网排期允许的情况下，团队进行了尽可能多的动效方面的探索。设计团队在代码层面做了全面细致的代码规范并实现大多数前端动效，还输出包括了：自定义缓动曲线、animation-duration、transition-delay 等 SCSS 全局动效规范文件。设计师在完整的参与到一个创意点（诞生-设计-开发）中，能够分毫不差的还原设计稿和最初的想法。</p>
      <img src="/articleImg/2019-02-16/image7.gif" alt>
      <h6>导航菜单栏动画</h6>
      <img src="/articleImg/2019-02-16/image8.gif" alt>
      <h6>引导聚焦动画</h6>
      <img src="/articleImg/2019-02-16/image9.gif" alt>
      <h6>按钮/控件 Hover 动画</h6>
      <img src="/articleImg/2019-02-16/image10.gif" alt>
      <h6>卡片 Hover 动画</h6>
      <img src="/articleImg/2019-02-16/image11.gif" alt>
      <h6>鼠标跟随 3D 透视效果</h6>
      <img src="/articleImg/2019-02-16/image12.gif" alt>
      <h6>SVG 循环动画</h6>
      <img src="/articleImg/2019-02-16/image13.gif" alt>
      <h6>Logo Hover 缩放</h6>
      <img src="/articleImg/2019-02-16/image14.png" alt>
      <h1 :id="'anchor-'+jsonData[3].id">产品页面设计</h1>
      <p>作为公司产品的介绍页面，能提供非常重要的销售线索，需要很好的把产品展示出来。我们尽可能的将页面做的利于阅读、表述清晰。每个产品只用一页篇幅去展现，用 head 上的锚点帮助客户快速定位。作为 B 端产品，无论对方的是产品经理还是技术负责人，都能在页面上快速获取关键信息。</p>
      <img src="/articleImg/2019-02-16/image16.png" alt>
      <img src="/articleImg/2019-02-16/image17.png" alt>
      <img :id="'anchor-'+jsonData[4].id" src="/articleImg/2019-02-16/image18.png" alt>
      <img :id="'anchor-'+jsonData[5].id" src="/articleImg/2019-02-16/image19.png" alt>
      <img src="/articleImg/2019-02-16/image20.png" alt>
      <img src="/articleImg/2019-02-16/image21.png" alt>
      <h6>官网项目的视觉图形整理</h6>
      <img src="/articleImg/2019-02-16/image22.png" alt>
    </div>
  </div>
</template>

<script>
import ArticleContentCom from '@/components/ArticleContentCom.vue'
import ArticleContentInfo from '@/components/ArticleContentInfo.vue'

export default {
  components: {
    ArticleContentCom,
    ArticleContentInfo
  },
  data () {
    return {
      jsonData: [{
        title: '项目背景',
        id: '项目背景'
      },
      {
        title: '极验网站页面设计',
        id: '极验网站页面设计'
      },
      {
        title: '动效前端实现',
        id: '动效前端实现'
      },
      {
        title: '产品页面设计',
        id: '产品页面设计'
      },
      {
        title: '网站配色',
        id: '网站配色'
      },
      {
        title: '插画配图',
        id: '插画配图'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/article.scss";

.container {
  /* width: 76%; */
}
</style>
