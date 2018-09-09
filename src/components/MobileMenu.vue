<template>
    <div class="wrap-box">
        <div class="mobile-menu" id="menu">
            <img id="icon-close" class="icon-close" src="../assets/close.svg" alt="" @click="closeMenu">
            <div class="logo">
                <img src="../assets/logo.svg" alt="">
            </div>
            <div class="wrap" @click="closeMenu">
                <router-link to="/brand">
                    <span>极验品牌</span>
                    <i></i>
                </router-link>
                <router-link to="/make">
                    <span>极验制造</span>
                    <i></i>
                </router-link>
                <router-link to="/interface">
                    <span>用户界面</span>
                    <i></i>
                </router-link>
                <router-link to="/product">
                    <span>安全矩阵</span>
                    <i></i>
                </router-link>
                <router-link to="/resource">
                    <span>资源下载</span>
                    <i></i>
                </router-link>
                <router-link to="/about">
                    <span>关于我们</span>
                    <i></i>
                </router-link>
                <div class="links">
                    <a target="_blank" href="https://geetest.com">极验官网</a>
                    <a target="_blank" href="https://dribbble.com/geetest">Dribbble</a>
                    <a target="_blank" href="https://github.com/GeeTeam">Github</a>
                </div>
            </div>
            <div class="footer">
                <img src="../assets/logo_watermask.svg" alt="">
                <p>Copyright © 2018 GEETEST</p>
            </div>
        </div>

        <div class="mobile-header" id="mobile-header">
            <div @click="showMenu" class="touch-box">
                <img id="icon-menu" class="icon-menu" src="../assets/icon-menu.svg" alt="">
            </div>
            <div class="logo">
                <img src="../assets/logo.svg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    showMenu() {
      let menu = document.querySelector("#menu");
      menu.style.display = "flex";
      menu.style.zIndex = "1000";
    },
    closeMenu() {
      let menu = document.querySelector("#menu");
      menu.style.display = "none";
      menu.style.zIndex = "-1";
    }
  }
};
</script>

<style lang="scss" scoped>
$transition-normal: all 0.2s ease;
.mobile-menu {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3873ff;
  transition: all 0.3s ease-in-out;

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
    & > a {
      width: calc(100vw - 40px);
      height: 46px;
      display: block;
      margin-bottom: 6px;
      border-radius: 3px;
      transition: $transition-normal;
      will-change: all;
      font-size: 18px;

      &:hover {
        font-weight: 600;
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
      & > a:hover {
        // text-decoration-line: underline;
      }
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
  z-index: 100;
  width: 100%;
  height: 38px;
  background-color: #3973ff;
  padding: 18px 20px;
  box-shadow: 0 2px 4px #0e2b7063;


  .icon-menu {
    position: fixed;
    right: 20px;
    top: 25px;
    width: 24px;
    height: 24px;
  }

  .logo {
    height: 38px;
    img {
      height: 100%;
    }
  }
}

@media screen and (max-width: 1220px) {
  .mobile-menu {
    display: none;
  }
}

@media screen and (max-width: 414px) {
  .mobile-menu {
    display: none;
  }
}
</style>
