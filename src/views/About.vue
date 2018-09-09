<template>
  <div class="about" id="main">
    <Header title="极验用户体验设计" des="GEE Design" />
    <div class="container">
      <div class="about-us bottom-80">
        <h3>极验用户体验体验设计中心</h3>
        <p class="bottom-40">
          极验用户体验设计中心 (GEE Design)是极验公司的核心部门之一。我们坚持以用户为中心的设计理念，以提升产品的用户体验为使命，探寻可用性和体验之间的最佳设计方案。
        </p>
        <img class="bottom-40" src="../assets/About/about1.png" alt="">
        <p>极验一直致力于消灭扰人的验证码，用先进的技术来解决互联网中的交互安全问题。在与网络黑产的安全拉锯战中，我们仍然以用户为中心，不断提升产品的交互体验，并保证产品体验与安全的平衡；极验给 B 端客户提供安全保障的同时也需要给 C 端用户创造更好的交互体验，让 B 端更好的连接 C 端。极验的安全产品须保持设计的一致性，提高客户的工作效率，降低用户的学习成本；极验作为互联网的毛细血管，坚持不断创新、打破束缚，勇于使用新技术解决问题，在产品的设计上不断探索、升级。</p>
      </div>
      <div class="avatar-team">
        <h3>关于我们</h3>
        <p class="bottom-40">我们关注用户体验的各个层面，功能、安全、交互、视觉…</p>
        <div class="avatar-wrap">
          <Avatar jobName="Designer" name="Yorkun" :imgSrc="imgSrc.york" />
          <Avatar jobName="Designer" name="Yancy Min" :imgSrc="imgSrc.yancy"/>
          <Avatar jobName="Designer" name="刘畅" :imgSrc="imgSrc.liuchang"/>
          <Avatar jobName="Designer" name="包小唅" :imgSrc="imgSrc.baoxiaohan"/>
          <Avatar jobName="Designer" name="Yorkun" :imgSrc="imgSrc.york"/>
          <Avatar jobName="Designer" name="Yorkun" :imgSrc="imgSrc.york"/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Scroll from "@/components/Scroll.vue";
import BackTop from "@/components/BackTop.vue";
import Avatar from "@/components/Avatar.vue";
import York from "@/assets/About/avatarPic1.png";
import Yancy from "@/assets/About/avatarPic2.png";
import Liuchang from "@/assets/About/avatarPic3.png";
import Baoxiaohan from "@/assets/About/avatarPic4.png";

export default {
  name: "about",
  data () {
    return {
      imgSrc: {
        york: York,
        yancy: Yancy,
        liuchang: Liuchang,
        baoxiaohan: Baoxiaohan,
      }
    };
  },
  components: {
    Header,
    Scroll,
    BackTop,
    Avatar,
  }
};
</script>

<style lang="scss" scoped>
.about {
  .about-us {
    width: 100%;
  }

  .avatar-team {
    width: 100%;

    .avatar-wrap {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;

      .avatar {
        &:nth-of-type(4) {
          padding: 0;
        }
      }
    }
  }
}
</style>
