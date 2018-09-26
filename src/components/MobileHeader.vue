<template>
    <div class="mobile-header" id="header" @click="closeHader">
        <img id="icon-menu" class="icon-menu" src="../assets/icon-menu.svg" alt="">
        <div class="logo">
            <img src="../assets/logo.svg" alt="">
        </div>
    </div>
</template>

<script>
export default {
  name: 'MobileHeader',
  props: {},
  methods: {
    closeHader () {
      //   let iconClos = document.querySelector("#icon-close");
      let headerClose = document.querySelector('#header')
      headerClose.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
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
</style>
