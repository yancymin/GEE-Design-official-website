<template>
    <div class="sidebar">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
        </div>
        <div class="wrap">
            <router-link to="/brand">极验品牌</router-link>
            <router-link to="/about">极验制造</router-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$transition:all 0.3s ease;
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  display: flex;
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
      transition: $transition;

      &:hover {
          background-color: #3965EF;
      }
    }
  }
}
</style>
