<template>
  <div id="main">
    <ArticleContentCom
      title="Geetest T-shirt 2019 设计回顾"
      imageSrc="/image/cover-20190718.jpg"
      :jsonData="jsonData"
    />
    <div class="container">
      <ArticleContentInfo />
      <h1 :id="'anchor-'+jsonData[0].id">GEE Tee</h1>
      <p>极验每年都会制作主题衫、节日衫和卫衣，用于发放给公司员工或赠送给合作伙伴等。GEE Tee 是极验的一个窗口，希望能传递给穿着者和周围人充满活力、富有创造力的形象。</p>
      <h1 :id="'anchor-'+jsonData[1].id">设计方案</h1>
      <p>设计内部选出了具有代表性的 4 个方案，通过全员投票的方式最终选出二号方案作为 2019 年春夏款 GEE Tee 的设计。</p>
      <img style="margin-bottom: 0;" src="/articleImg/2019-07-18/image9.jpg" alt />
      <img src="/articleImg/2019-07-18/image1.jpg" alt />
      <p>
        二号方案在设计意想之初定位在贴近技术的走向上。作为一家技术驱动型的互联网公司，开发工程师对于
        <a
          href="https://zh.wikipedia.org/zh-hans/Git"
          target="_blank"
        >“Git Version Control”</a>「分散式版本控制」 是非常的熟悉，每天都在使用。无论是前端、后端、iOS、Android 等开发，Git 都能让大家产生共鸣。
      </p>
      <img src="/articleImg/2019-07-18/image3.jpg" alt />
      <p>Git 的概念比较容易可视化表现，也具有强烈的技术风格，所以二号方案便锁定在以 “Git Version Control” 作为灵感基础。</p>
      <img src="/articleImg/2019-07-18/image4.jpg" alt />
      <a href="https://unsplash.com/photos/842ofHC6MaI" target="_blank">
        <img style="margin: 0;" src="/articleImg/2019-07-18/image11.jpg" alt />
      </a>
      <img src="/articleImg/2019-07-18/image5.png" alt />
      <h1 :id="'anchor-'+jsonData[2].id">设计实施</h1>
      <p>极验 Logo 和 “Git” 的可视化表现上有视觉相似的地方，最后的设计成果透过三次设计演变完成。</p>
      <img src="/articleImg/2019-07-18/image6.jpg" alt />
      <img style="margin: 0;" src="/articleImg/2019-07-18/image2.jpg" alt />
      <img style="margin-bottom: 0;" src="/articleImg/2019-07-18/image10.jpg" alt />
      <img style="margin-bottom: 0;" src="/articleImg/2019-07-18/image7.jpg" alt />
      <img style="margin-bottom: 0;" src="/articleImg/2019-07-18/image8.jpg" alt />
    </div>
  </div>
</template>

<script>
import ArticleContentCom from "@/components/ArticleContentCom.vue";
import ArticleContentInfo from "@/components/ArticleContentInfo.vue";

export default {
  components: {
    ArticleContentCom,
    ArticleContentInfo
  },
  data() {
    return {
      jsonData: [
        {
          title: "GEE Tee",
          id: "前言"
        },
        {
          title: "设计方案",
          id: "验证码真的安全吗？"
        },
        {
          title: "设计实施",
          id: "验证码耗费用户太多时间"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/article.scss";
</style>