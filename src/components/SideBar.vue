<template>
  <div class="sidebar" id="sidebar">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.svg" alt>
      </router-link>
    </div>
    <div class="wrap">
      <router-link to="/article" class="article-active">
        <div class="link-wrap">
          <i></i>
          <span>文章</span>
        </div>
      </router-link>
      <router-link to="/brand" class="brand-active">
        <div class="link-wrap">
          <i></i>
          <span>极验品牌</span>
        </div>
      </router-link>
      <router-link to="/make" class="make-active">
        <div class="link-wrap">
          <i></i>
          <span>极验制造</span>
        </div>
      </router-link>
      <router-link to="/product" class="product-active">
        <div class="link-wrap">
          <i></i>
          <span>安全矩阵产品</span>
        </div>
      </router-link>
      <router-link to="/interface" class="interface-active">
        <div class="link-wrap">
          <i></i>
          <span>用户界面设计</span>
        </div>
      </router-link>
      <router-link to="/download" class="download-active">
        <div class="link-wrap">
          <i></i>
          <span>资源下载</span>
        </div>
      </router-link>
      <router-link to="/about" class="about-active">
        <div class="link-wrap">
          <i></i>
          <span>关于我们</span>
        </div>
      </router-link>
      <div class="links">
        <span></span>
        <a target="_blank" href="https://geetest.com">极验官网</a>
        <a target="_blank" href="https://dribbble.com/geetest">Dribbble</a>
        <!-- <a target="_blank" href="https://github.com/GeeTeam">Github</a> -->
      </div>
    </div>
    <div class="footer">
      <img src="../assets/logo_watermask.svg" alt>
      <p>Copyright © 2019 GEETEST</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
$transition-normal: all 0.2s ease;

@mixin icon {
  display: inline-block;
  z-index: 100;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  margin-right: 16px;
  margin-bottom: -2px;
}

.sidebar {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3873ff;
  transition: all 0.3s ease-in-out;

  .logo {
    margin-top: 40px;
  }
  .wrap {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    text-align: center;
    line-height: 40px;

    & > a {
      display: flex !important;
     justify-content: center;
    }

    .link-wrap {
      width: 55%;
      text-align: left;
    }


    .article-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/g.png");
      }
    }
    .brand-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/a.png");
      }
    }
    .make-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/b.png");
      }
    }
    .product-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/c.png");
      }
    }
    .interface-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/d.png");
      }
    }
    .download-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/e.png");
      }
    }
    .about-active.router-link-active {
      i {
        @include icon;
        background-image: url("../assets/SideBar/f.png");
      }
    }

    & > a {
      width: 230px;
      height: 40px;
      display: block;
      margin-bottom: 8px;
      border-radius: 3px;
      font-size: 14px;
      transition: $transition-normal;
      will-change: transform;

      &:nth-of-type(1) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/7.png");
        }
      }
      &:nth-of-type(2) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/1.png");
        }
      }
      &:nth-of-type(3) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/2.png");
        }
      }
      &:nth-of-type(4) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/3.png");
        }
      }
      &:nth-of-type(5) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/4.png");
        }
      }
      &:nth-of-type(6) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/5.png");
        }
      }
      &:nth-of-type(7) {
        i {
          @include icon;
          background-image: url("../assets/SideBar/6.png");
        }
      }

      span {
        opacity: 0.85;
      }

      &:hover {
        font-weight: 500;

        span {
          opacity: 1;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: 0;
        z-index: -99;
        opacity: 0;
        width: 230px;
        height: 40px;
        margin-bottom: 2px;
        border-radius: 3px;
        background-color: #3965ef;
        transition: $transition-normal;
        transform: scale(0.93);
      }

      &:hover::before {
        transition-delay: 0.06s;
        transform: scale(1);
        opacity: 1;
      }

      &.router-link-active {
        background-color: #ffffff;
        color: #3973ff;
        font-weight: 600;
        animation: sidebarActive 0.2s ease-in;
        will-change: animation;

        // i {
        //   @include icon;
        //   background-image: url('../assets/SideBar/a.png');
        // }

        span {
          opacity: 1 !important;
        }
      }
    }
    .links {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 30px;
      margin-left: 8px;

      span {
        width: 28px;
        height: 1px;
        opacity: 0.4;
        background-color: #fff;
        margin-bottom: 30px;
        margin-left: 14px;
      }

      a {
        font-size: 14px;
        opacity: 0.85;

        &:hover {
          opacity: 1;
        }
      }

      & > a::after {
        content: "";
        opacity: 0;
        position: relative;
        left: 8px;
        display: inline-block;
        width: 10px;
        height: 10px;
        background-image: url(../assets/icon_linkarrow.svg);
        background-repeat: no-repeat;
        transition: $transition-normal;
      }
      & > a:hover::after {
        content: "";
        opacity: 1;
      }
    }
  }
  .footer {
    position: fixed;
    bottom: 24px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > img {
      width: 77px;
      height: 21px;
      margin-bottom: 4px;
    }
    & > p {
      font-size: 12px;
      color: #ffffff;
      opacity: 0.4;
    }
  }
}

@media screen and (max-width: 1220px) {
  #sidebar {
    width: 100px;

    .logo {
      width: 24px;
      overflow: hidden;

      img {
        width: 100px;
      }
    }

    .wrap {
      & > a {
        width: 90%;
        overflow: hidden;
        margin-bottom: 8px;
        border-radius: 0;
        font-size: 12px;
        font-weight: 500;
        border-radius: 4px;

        span {
          display: none;
        }

        .link-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
        }


        i {
          margin: 0;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          z-index: -99;
          opacity: 0;
          width: 100%;
          height: 40px;
          margin-bottom: 2px;
          border-radius: 3px;
          background-color: #3965ef;
          transition: $transition-normal;
          transform: scale(0.93);
        }

        &:hover::before {
          transition-delay: 0.06s;
          transform: scale(1);
          opacity: 1;
        }
      }

      .links {
        a {
          font-size: 12px;
        }

        span {
          margin-left: 12px;
        }
      }
    }
    .footer {
      display: none;
    }
  }
}

@media screen and (max-width: 540px) {
  #sidebar {
    display: none;
  }
}
</style>
