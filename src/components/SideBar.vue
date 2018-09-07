<template>
  <div class="sidebar" id="sidebar">
    <div class="logo">
      <img src="../assets/logo.svg" alt="">
    </div>
    <div class="wrap">
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
        <span></span>
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
#sidebar {
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
    margin-top: 88px;
    text-align: center;
    line-height: 40px;
    & > a {
      width: 230px;
      height: 40px;
      display: block;
      margin-bottom: 2px;
      border-radius: 3px;
      transition: $transition-normal;
      will-change: all;

      &:hover {
        font-weight: 500;
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

      // &:active::before {
      //   transform: scale(0.95);
      // }

      &.router-link-active {
        background-color: #ffffff;
        color: #3973ff;
        font-weight: 600;
        animation: sidebarActive 0.2s ease-in;
        will-change: animation;
      }
    }
    .links {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      margin-top: 40px;
      margin-left: 8px;
      span {
        width: 28px;
        height: 1px;
        opacity: 0.4;
        background-color: #fff;
        margin-bottom: 40px;
      }
      & > a:hover {
        text-decoration-line: underline;
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
    & > img {
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
        width: 80px;
        overflow: hidden;
        margin-bottom: 8px;

        &::before {
          content: "";
          position: absolute;
          left: 0;
          z-index: -99;
          opacity: 0;
          width: 80px;
          height: 40px;
          margin-bottom: 2px;
          border-radius: 3px;
          background-color: #3965ef;
          transition: $transition-normal;
          transform: scale(0.93);
        }
      }

      .links {
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

@media screen and (max-width: 320px) {
  #sidebar {
    @media screen and (max-width: 320px) {
      display: none;
    }
  }
}
</style>
