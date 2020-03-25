<template>
  <div id="main">
    <ArticleContentCom
      title="我们如何开始构建 GEE-UI 设计系统"
      imageSrc="/image/cover-20200325.jpg"
      :jsonData="jsonData"
    />
    <div class="container">
      <ArticleContentInfo />
      <img src="/articleImg/2020-03-25/image1.png" alt />
      <p>2019年，极验（Geetest）已和 29 万家企业达成合作，每天提供超过 12 亿次的安全防护。随着我们的成长和市场变化，我们的产品设计和用户体验必须保持高质量和一致性。在这样的背景下，以前的后台难以满足公司产品的日趋发展，于是便有了 GEE-UI 这个项目。</p>
      <p>很高兴向大家介绍 GEE-UI，这是极验（Geetest）第一个成型的内部产品后台设计系统，它包含了可复用的 Web UI 组件、视觉样式和设计准则。</p>
      <p>构建 GEE-UI 的过程远比预期困难许多，在缺乏构建「设计系统」经验的情况下摸索试错，对我们团队而言是一次较大的挑战。现在回头看整个的过程，更像是一段充实的学习旅途。</p>
      <p>最近我们的设计团队把 GEE-UI 进行了系统详尽地整理沉淀，发布了第一个可供公司内部公开的版本。这篇文章是关于我们如何构建和思考的。</p>
      <h1 :id="'anchor-'+jsonData[0].id">开端</h1>
      <p>为什么要构建一套完整可复用的设计系统呢？回答这个问题之前，我们先回到当时团队遇到的问题中来，在实际问题中一步步找到答案。</p>
      <h2>缺少统一的视觉语言</h2>
      <p>随着极验（Geetest）产品线的扩增，在没有对产品后台整合之前，每个产品都是单独的管理后台。不同的产品线由不同的设计师负责，设计师的工作很大程度上是在没有一个统一视觉准则的指导下进行的。由此可见，当时的情况对公司和客户来说都会有品牌认知和用户体验上的困扰。因为部分客户是同时在使用我们的多个产品，可以想象他在使用同一家公司提供的产品，却登录不同后台进行管理设置时的心理。</p>
      <img src="/articleImg/2020-03-25/image2.png" alt />
      <h2>无法复用造成的资源浪费</h2>
      <p>往往时间和人工成本才是最大的成本开销。在不统一、凌乱无序的生产流程中会产生大量的资源浪费，比如说，由于我们之前所有产品都有所属的不同后台，而不同后台之间并没有以一套行之有效的设计标准进行约束统一，大家都「各自为政」，然后遇到产品迭代也不会选取别个后台已有的 UI 控件（当然，这个问题涉及很多的其他情况，但是这里仅仅是说这里的情况），不断重复地造轮子耗费资源。</p>
      <h2>非单一真实来源的设计资源</h2>
      <p>
        <a href="https://en.wikipedia.org/wiki/Single_source_of_truth">Single source of truth</a> 是信息系统设计中的概念，大意是指所有资源，应以一个特定来源为准，目的在于避免重覆数据。其余所有数值，都应由该单一资源来源所计算或读取。我们来站在设计师的角度看待「非单一真实来源的设计资源」，在 Sketch 时代（对了，我们强烈推荐 Figma）如果没有对 Symbols, Styles 统一的管理分发，大量的 Symbols 和 Styles 零散在不同设计文件、不同设计师的手中，文件传来传去却没一个为准则的原始来源，一旦时间稍长这就会是灾难性问题。
      </p>
      <h2>工程师和设计师之间不同的「语言」体系</h2>
      <p>一个普遍问题是设计和开发团队已经分开工作，工程和设计成了一种松散的关系。在设计与前端开发之间的界限越来越薄的今天，出现互相使用两套语言描述相同的事物的问题确实不应该。工程师偏重逻辑优先，设计师则视觉先行，缺少前期的沟通和互相专业知识的补充。</p>
      <p>以上原因仅是比较重要的几个，问题在眼前有待解决，急迫感使我们寻求方法。因此，当时和前端组、产品经理共同讨论，应当把以前不足的地方规范化。</p>
      <h1 :id="'anchor-'+jsonData[1].id">Design System 的定制化</h1>
      <p>近些年来，只要是在 UI 设计圈，大家都对 “Design System ” 有所耳闻，也有很多企业打造自己的设计系统。何种体量的公司才拥有自己的设计系统？所谓优秀的设计系统是否就要大而全？该如何起步？一系列问题摆在了我们面前。</p>
      <h2>起步的难点</h2>
      <p>经验主义让我们退缩。对于没经验，从前没涉及过的事物总会有人心的畏惧感，而且还是着手做像「构建设计系统」这样大的项目。不过幸运的是，我们尚能在庞大的互联网中找到许多优秀的设计系统进行学习和借鉴，在这个方面一点也不用忌讳或是回避，我们确实在没经验的情况下向各个设计系统学习了很多。</p>
      <p>一切开始之前是要让团队成员看到价值。这件事做与不做，成功与否，最终效果如何和大家投入的热情程度，我觉得让团队成员理解到这是一个有价值的项目是非常有必要的。毕竟大家都不想投入精力在一个价值产出比失衡的事情上。</p>
      <p>我们平常手上都有其他的任务，时间安排便成了一个问题。不消说，虽然对构建设计系统没有经验，但是能够想到这一件耗时耗力的事情。那就需要有一个统筹的任务计划来对时间进行合理的安排。</p>
      <h2>「弹性」和「颗粒度」的选择</h2>
      <p>设计系统具有不同的自定义级别。设计系统的适用性，完完全全立足于自身条件，如果是一家中型科技公司，那就是根据这个中型公司的需要来做定制化。设计系统的级别是和公司的级别挂钩的。</p>
      <img src="/articleImg/2020-03-25/image3.png" alt />
      <p>在浏览了大量的设计系统过后，会发现不同的设计系统之间有相同部分的同时有许多不一样的地方，都各自有不一样的「弹性」和「颗粒度」的选择。有的设计系统相对在规范上约束力较强，有些则是在某个范围内的宽松，有的拥有多而全的组件库和详尽的分析解释，有的则只在自己业务需要上进行归纳总结。所以，合理的需求评估，量化出大致的覆盖范围是我们构建 GEE-UI 开始的工作。</p>
      <p>长远的设计观也会影响一个设计系统在「弹性」和「颗粒度」上做出怎样的规划。考虑到之后的扩展程度，必须在前期规划阶段就要做出准确的判断，因此需要考虑得更进一步，把时间维度拉得更长来验证与思考设计系统。</p>
      <p>初版的 GEE-UI 包含了现存后台的所有 UI 控件类型，这一阶段我们主要把重心先放在了组件风格统一、基础样式统一和组件可复用的工作上。</p>
      <h1 :id="'anchor-'+jsonData[2].id">构建过程</h1>
      <h2>全局架构</h2>
      <p>在起步阶段要有一个全局的认识。我们统计了现有后台已知的问题（包含视觉、交互与前端完成度），待优化的空间，以及需要把哪些 Web UI 控件抽象构建为全局组件的收集，这部分统计工作完成后初步形成了整个设计系统的大致骨架，然后开始细化丰富。</p>
      <img src="/articleImg/2020-03-25/image4.png" alt />
      <p>我们还在这一阶段确定了指导原则，这 4 项原则是团队共同的指导方针，它们有助于塑造我们的设计方法，并在整个过程中协助我们在产品设计过程中评估权衡。</p>
      <ul>
        <li>连贯一致</li>
        <p>面对众多的元素和组件，在确保最大程度的灵活性和模块化的前提下，要求所有组件在设计交互上的连贯一致。</p>
        <li>信息抽象化</li>
        <p>设计和交互应当从较大的范围上全局思考，透过众多复杂化的功能抽离出重要的信息，构建必要的内容而不是盲目堆砌。</p>
        <li>共享语言</li>
        <p>通过为设计师和开发工程师创建一种统一的共享语言，快速的响应问题，不断的有效传达以构建高效的沟通环境。</p>
        <li>持续更新</li>
        <p>设计系统是持续演变的，我们鼓励分享好的想法，采纳各个渠道的建设性意见，努力打造一个成长型的设计系统。</p>
      </ul>
      <h2>视觉风格</h2>
      <p>在确定视觉风格的时候正是我们官网改版的时期，新官网给人的感觉简洁干练，以聚焦重点剔除繁杂为特点，最后我们决定 GEE-UI 延续新官网的视觉理念。官网改版时候拟定的视觉规范也适用到 GEE-UI 中。</p>
      <img src="/articleImg/2020-03-25/image5.gif" alt />
      <h2>可交互的 UI Demo 驱动设计</h2>
      <p>组件库是 GEE-UI 的核心，特别是基础 Web 组件的设计需要投入许多的耐心与各种状态下的细节考量。在这一方面，我们设计部自己前端实现了基础 Web UI 控件的可交互 Demo 来用于验证设计，我们也倾向于设计需要在真实数据和真实场景中得到反馈的理念。有了真实可交互的 Demo 过后，我们发现了很多在一纸设计稿中难以考虑到的情况，透过一步步修正来完善设计。</p>
      <img src="/articleImg/2020-03-25/image6.png" alt />
      <img src="/articleImg/2020-03-25/image7.gif" class="demo-gif" alt />
      <h2>团队协同</h2>
      <p>
        我们团队在 GEE-UI 构建过程中协作方式的探索让我们更加紧密。起初 GEE-UI 的设计工具我们依然用的 Sketch，像 Sketch 这样基于本地文件的设计工具或多或少在多人协作时会遇到同步的问题，有时候稍有放松对流程的管理便会导致后续的麻烦。设计团队里的资源不透明，一而再，再而三重复设计相同的元素，增加设计投入成本（人力及时间）。所以，我们快速转到了 Figma 中，虽然前期会有一些学习成本或者是语言上的问题（这里推荐我们团队成员做的
        <a href="https://figma.cool/cn">Figma 中文插件 - FigmaCN</a>），但这些都瑕不掩瑜，Figma 带给我们团队协作的提升是非常明显的，特别是 Figma Plugin 上线后更是在操作层面带来了进一步的增强。
      </p>
      <img src="/articleImg/2020-03-25/image8.jpg" alt />
      <img src="/articleImg/2020-03-25/image9.jpg" alt />
      <p>我们用 Asana 进行项目管理，透明的进度追踪和任务分配对于一个大型设计项目来说尤为重要，Asana 在这点上做得非常棒，我们现在也依赖它来做其他设计任务的管理。</p>
      <img src="/articleImg/2020-03-25/image10.jpg" alt />
      <h1 :id="'anchor-'+jsonData[3].id">今天的 GEE-UI</h1>
      <p>在 2020 年的 3 月，我们完成了 GEE-UI 设计系统的初版，覆盖 23 个 Web UI 组件、6 个可视化图表，包含基本规范如，颜色、文字、间距、布局、插图等。</p>
      <p>我们设计部经过一个月的文档撰写和两周的前端开发，为 Gee-UI 设计系统搭建了公司内部的文档网站，方便设计师、工程师和产品经理的查阅。</p>
      <img src="/articleImg/2020-03-25/image11.png" alt />
      <img src="/articleImg/2020-03-25/image12.png" class="img" alt />
      <p>GEE-UI 目前已用于线上产品后台，整合了极验（Geetest）的所有产品。GEE-UI 使设计和开发过程更加的高效和统一，通过减少决策过程中的摩擦，我们使团队可以将精力集中在重要的问题上。</p>
      <img src="/articleImg/2020-03-25/image13.png" alt />
      <img src="/articleImg/2020-03-25/image14.png" class="img" alt />
      <h1 :id="'anchor-'+jsonData[4].id">这仅仅是开始</h1>
      <p>我们不断更新规范高效化的流程，追求设计落地的实际应用才是设计任务完结的理念。GEE-UI 设计系统的构建过程漫长且充满挑战，我们拥抱错误和质疑，只为一步步朝着更加专业的方向努力。</p>
      <p class="ref">
        “Design systems are always evolving, and the way you share and encourage adoption of new iterations will evolve along the way as well.”
        – Diana Mounter, Design Systems Manager at GitHub
        <br />设计系统是持续演变的，不断分享、鼓励採纳，有助于新的迭代。
      </p>
      <h1 :id="'anchor-'+jsonData[5].id">参考资料</h1>
      <p>
        Design Systems Repo | A Collection of Design System Resources
        <br />
        <a href="https://designsystemsrepo.com">https://designsystemsrepo.com</a>
      </p>
      <p>
        Web Fundamentals | Google Developers
        <br />
        <a
          href="https://developers.google.com/web/fundamentals"
        >https://developers.google.com/web/fundamentals</a>
      </p>
      <p>
        Shopify Polaris
        <br />
        <a href="https://polaris.shopify.com">https://polaris.shopify.com</a>
      </p>
      <p>
        Material Design | Google
        <br />
        <a href="https://material.io">https://material.io</a>
      </p>
      <p>
        Carbon Design System
        <br />
        <a href="https://www.carbondesignsystem.com">https://www.carbondesignsystem.com</a>
      </p>
      <p>
        Atlassian Design
        <br />
        <a href="https://atlassian.design">https://atlassian.design</a>
      </p>
      <p>
        Clarity Design · 协作产品 UI 设计语言
        <br />
        <a href="https://design.teambition.com">https://design.teambition.com</a>
      </p>
      <p>
        Design Systems: A practical guide to creating design languages for digital products by Alla Kholmatova
        <br />
        <a
          href="https://www.goodreads.com/book/show/35857970-design-systems"
        >https://www.goodreads.com/book/show/35857970-design-systems</a>
      </p>
      <p>
        Atomic Design by Brad Frost
        <br />
        <a
          href="https://www.goodreads.com/book/show/35496817-atomic-design"
        >https://www.goodreads.com/book/show/35496817-atomic-design</a>
      </p>
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
        title: '开端',
        id: '开端'
      },
      {
        title: 'DesignSystem的定制化',
        id: 'DesignSystem的定制化'
      },
      {
        title: '构建过程',
        id: '构建过程'
      },
      {
        title: '今天的GEE-UI',
        id: '今天的GEE-UI'
      },
      {
        title: '这仅仅是开始',
        id: '这仅仅是开始'
      },
      {
        title: '参考资料',
        id: '参考资料'
      }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/style/article.scss';

.ref {
  padding: 12px 0 12px 20px;
  border-left: 4px solid #9fa3be;
  box-sizing: border-box;
  opacity: 0.7;
}

h2 {
  margin-top: 24px;
  font-size: 16px;
  color: #3b426b;
}

li {
  font-size: 15px;
  line-height: 25px;
  color: #5f6591;
  list-style-type: disc !important;
  margin-left: 20px;
  font-weight: 600;
}

p {
  margin: 12px 0;
}

.demo-gif {
  max-width: 600px;
  align-self: center;
  margin-top: 0;
}

.img {
  margin-top: 0;
}
</style>
