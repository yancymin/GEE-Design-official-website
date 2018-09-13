<template>
  <div class="Back-top">
    <a href="#main"><img src="../assets/icon_toparrow.svg" alt=""></a>
  </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {},
  created() {
    window.onscroll = function() {
      var backTop = document.querySelector(".Back-top");
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        backTop.style.display = "block";
      } else {
        backTop.style.display = "none";
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.Back-top {
  display: none;
  position: fixed;
  bottom: 24px;
  right: 24px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 34px;
    width: 34px;
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(44, 71, 146, 0.17),
      0 -1px 1px rgba(44, 71, 146, 0.08);
    transition: all 0.18s ease-out;

    &:hover {
      box-shadow: 0 2px 12px 0 rgba(44, 71, 146, 0.17);
      transform: scale(1.07) translateY(-3px);
      border: none;

      img {
        opacity: 1;
      }
    }

    img {
      width: 38%;
      opacity: 0.6;
      transition: all 0.18s;
    }
  }
}
</style>
