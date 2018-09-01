<template>
    <div class="sidebar">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="wrap">
            <router-link to="/brand">极验品牌</router-link>
            <router-link to="/make">极验制造</router-link>
            <router-link to="/visual">视觉设计</router-link>
            <router-link to="/product">安全矩阵</router-link>
            <router-link to="/resource">资源下载</router-link>
            <router-link to="/about">关于我们</router-link>
            <div class="links">
                <span></span>
                <a href="https://geetest.com">极验官网</a>
                <a href="https://dribbble.com/geetest">Dribbble</a>
                <a href="https://github.com/GeeTeam">Github</a>
            </div>
        </div>
        <div class="footer">
            <img src="../assets/logo_watermask.svg" alt="">
            <p>Copyright © 2018 GEETEST</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$transition-normal: all 0.3s ease;
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #3873ff;
  .logo {
    margin-top: 40px;
  }
  .wrap {
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

      &:hover {
        background-color: #3965ef;
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
</style>
