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
          <Avatar jobName="Designer" name="YorKun" :imgSrc="imgSrc.york" :href1="href.york.website" :iconSrc1="iconSrc.website" :href2="href.york.dribbble" :iconSrc2="iconSrc.dribbble" />
          <Avatar jobName="Designer" name="Yancy Min" :imgSrc="imgSrc.yancy" :href1="href.york.website" :iconSrc1="iconSrc.website" :href2="href.york.dribbble" :iconSrc2="iconSrc.dribbble" />
          <Avatar jobName="Designer" name="Charlie Liu" :imgSrc="imgSrc.liuchang" :href1="href.york.website" :iconSrc1="iconSrc.website" :href2="href.york.dribbble" :iconSrc2="iconSrc.dribbble" />
          <Avatar jobName="Designer" name="河马" :imgSrc="imgSrc.baoxiaohan" :href1="href.york.website" :href2="href.york.dribbble" :iconSrc2="iconSrc.dribbble" />
          <Avatar jobName="Product manager" name="陈国庆" :imgSrc="imgSrc.chenguoqing" />
          <Avatar jobName="Product manager" name="汪智勇" :imgSrc="imgSrc.wangzhiyong" />
          <Avatar jobName="Front-end engineer" name="任华翔" :imgSrc="imgSrc.renhuaxiang" />
          <Avatar jobName="IOS engineer" name="许伟" :imgSrc="imgSrc.xuwei" />
          <Avatar jobName="Python engineer" name="陈禹" :imgSrc="imgSrc.chenyu" />
          <Avatar jobName="Machine Learning" name="刘忠雨" :imgSrc="imgSrc.liuzhongyu" />
          <Avatar jobName="Central China business" name="石琪" :imgSrc="imgSrc.shiqi" />
        </div>
      </div>
      <Back-top />

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
import Chenguoqing from "@/assets/About/avatarPic5.png";
import Wangzhiyong from "@/assets/About/avatarPic6.png";
import Renhuaxiang from "@/assets/About/avatarPic7.png";
import Xuwei from "@/assets/About/avatarPic8.png";
import Chenyu from "@/assets/About/avatarPic9.png";
import Liuzhongyu from "@/assets/About/avatarPic10.png";
import Shiqi from "@/assets/About/avatarPic11.png";

import Website from "@/assets/About/website.svg";
import Dribbble from "@/assets/About/dribbble.svg";

export default {
  name: "about",
  data() {
    return {
      imgSrc: {
        york: York,
        yancy: Yancy,
        liuchang: Liuchang,
        baoxiaohan: Baoxiaohan,
        chenguoqing: Chenguoqing,
        wangzhiyong: Wangzhiyong,
        renhuaxiang: Renhuaxiang,
        xuwei: Xuwei,
        chenyu: Chenyu,
        liuzhongyu: Liuzhongyu,
        shiqi: Shiqi
      },
      href: {
        york: {
          website: "http://yorkun.com",
          dribbble: "https://dribbble.com/yorkun"
        },
        yancy: {
          website: "https://yancymin.design",
          dribbble: "https://dribbble.com/YancyMin"
        },
        liuchang: {
          website: "http://yorkun.com",
          dribbble: "https://dribbble.com/DCharlie"
        },
        baoxiaohan: {
          dribbble: "https://dribbble.com/Bhippo"
        }
      },
      iconSrc: {
        website: Website,
        dribbble: Dribbble
      }
    };
  },
  components: {
    Header,
    Scroll,
    BackTop,
    Avatar
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
        &:nth-of-type(-n + 4) /deep/ p {
          top: -26px;
          left: 5px;
        }

        &:nth-of-type(n + 5) /deep/ .pic::before {
          display: none;
        }

        &:nth-of-type(n + 5) /deep/ a {
          display: none;
        }

        &:nth-of-type(11) /deep/ p {
          top: -34px;
          line-height: 10px;
        }

        &:nth-of-type(4) {
          padding: 0;
        }

        &:nth-of-type(4) /deep/ .social-icons a:nth-child(1) {
            display: none;
        }

        &:nth-of-type(7) /deep/ p {
          left: 0;
        }

        &:nth-of-type(8) {
          padding: 0;
        }
      }
    }
  }
}

@media screen and (max-width: 414px) {
  .about {
    .avatar-team {
      .avatar-wrap {
        justify-content: center;
        .avatar {
          padding: 0 44px 0 0;
          &:nth-of-type(4) {
            padding-right: 44px;
          }
          &:nth-of-type(8) {
            padding-right: 44px;
          }
        }
      }
    }
  }
}
</style>
