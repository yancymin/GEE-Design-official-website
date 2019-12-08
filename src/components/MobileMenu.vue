<template>
  <div class="wrap-box">
    <div :class="{MenuShow:isShow}" id="menu" class="mobile-menu">
      <img id="icon-close" class="icon-close" src="../assets/close.svg" alt @click="closeMenu">
      <div class="logo">
        <img src="../assets/logo.svg" alt>
      </div>
      <div class="wrap" @click="closeMenu">
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
          <a target="_blank" href="https://bookmark.geetest.design">Bookmarks</a>
          <a target="_blank" href="https://geetest.com">极验官网</a>
          <a target="_blank" href="https://dribbble.com/geetest">Dribbble</a>
          <!-- <a target="_blank" href="https://github.com/GeeTeam">Github</a> -->
        </div>
      </div>
      <div class="footer">
        <img src="../assets/logo_watermask.svg" alt>
        <p>Copyright © 2018 GEETEST</p>
      </div>
    </div>

    <div class="mobile-header" id="mobile-header" >
      <img @click="showMenu" id="icon-menu" class="icon-menu" src="../assets/icon-menu.svg" alt>
      <div class="logo">
        <img src="../assets/logo.svg" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0,
      isShow: false
      // isLeave: false
    }
  },
  methods: {
    showMenu () {
      this.isShow = true
      // this.isLeave = true;
    },
    closeMenu () {
      this.isShow = false
      // this.isLeave = false;
    }
  }
}
</script>

<style lang="scss" scoped>
$transition-normal: all 0.2s ease;

.headerLeave {
  transform: translateY(-30%);
  opacity: 0;
}

.MenuShow {
  opacity: 1 !important;
  z-index: 10000 !important;
  transform:  translateY(0) !important;

  .wrap {
    > a {
      transform: translateY(-8px) scale(1.1);
      animation: listShow 0.2s ease-out forwards !important;
      @keyframes listShow {
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }
      @mixin delay($time) {
        animation-delay: $time !important;
      }

      &:nth-of-type(1) {
        @include delay(0.1s);
      }
      &:nth-of-type(2) {
        @include delay(0.14s);
      }
      &:nth-of-type(3) {
        @include delay(0.18s);
      }
      &:nth-of-type(4) {
        @include delay(0.22s);
      }
      &:nth-of-type(5) {
        @include delay(0.26s);
      }
      &:nth-of-type(6) {
        @include delay(0.3s);
      }
      &:nth-of-type(7) {
        @include delay(0.34s);
      }
    }
  }
}

@mixin icon {
  display: inline-block;
  z-index: 100;
  width: 16px;
  height: 16px;
  background-size: 16px 16px;
  background-repeat: no-repeat;
  margin-right: 18px;
  margin-bottom: -2px;
}

.mobile-menu {
  display: flex;
  z-index: -1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3873ff;
  transition: all 0.25s ease-in-out;
  opacity: 0;
  /* transform: translateY(-2%); */

  .icon-close {
    position: fixed;
    right: 20px;
    top: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }

  .logo {
    position: fixed;
    left: 20px;
    top: 18px;

    img {
      height: 38px;
    }
  }
  .wrap {
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    text-align: center;
    line-height: 45px;
    width: 100%;

    & > a {
      max-width: 380px;
      display: flex !important;
      justify-content: center;
      opacity: 0;
      will-change: transform;
    }

    .link-wrap {
      width: 43%;
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
      width: calc(100% - 40px);
      height: 46px;
      display: block;
      margin-bottom: 12px;
      border-radius: 3px;
      transition: $transition-normal;
      will-change: all;
      font-size: 18px;
      background-color: #3965ef;

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

      &:hover {
        font-weight: 600;
      }

  &::before {
        content: "";
        position: absolute;
        left: 0;
        z-index: -99;
        opacity: 0;
        width:  100%;
        height: 100%;
        margin-bottom: 2px;
        border-radius: 3px;
        background-color: #3965ef;
        transition: $transition-normal;
        /* transform: scale(0.93); */
    }

      &.router-link-active {
        background-color: #ffffff;
        color: #3973ff;
        font-weight: 600;
        animation: sidebarActive 0.2s ease-in;
        will-change: animation;
      }
    }
    .links {
      width: calc(100% - 40px);
      height: 50px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
      position: fixed;
      left: 0;
      bottom: 66px;
      margin: 0 20px;

      span {
        width: 28px;
        height: 1px;
        opacity: 0.4;
        background-color: #fff;
        margin-bottom: 30px;
      }

      & > a {
        opacity: 0.8;
        margin: 0 20px;
      }
      //   & > a:hover {
      //     text-decoration-line: underline;
      //   }
    }
  }
  .footer {
    width: 100vw;
    position: fixed;
    bottom: 24px;
    text-align: center;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;

    & > img {
      width: 80px;
      margin-left: 20px;
    }

    & > p {
      text-align: right;
      font-size: 12px;
      color: #ffffff;
      opacity: 0.4;
      margin-right: 20px;
    }
  }
}

.mobile-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: calc(100% - 40px);
  height: 38px;
  background-color: #3973ff;
  padding: 18px 20px;
  box-shadow: 0 2px 4px #0e2b7063;
  transition: all 0.2s ease-out;

  .icon-menu {
    position: fixed;
    right: 20px;
    top: 25px;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  .logo {
    height: 38px;
    img {
      height: 100%;
    }
  }
}

/* @media screen and (min-width: 540px) {
  .mobile-menu {
    display: none;
  }

  .mobile-header {
    display: none;
  }
} */

@media screen and (min-width: 540px) {
  .mobile-menu {
    display: none;
  }

  .mobile-header {
    display: none;
  }
}
</style>
