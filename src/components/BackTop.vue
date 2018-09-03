<template>
    <div class="Back-top">
        <a href="#body"><img src="../assets/icon_toparrow.svg" alt=""></a>
    </div>
</template>

<script>
export default {
  name: "BackTop",
  props: {}
};
</script>

<style lang="scss" scoped>
.Back-top {
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
    border: 1px solid rgba(225, 227, 232, 0.4);
    border-radius: 3px;
    background-color: #ffffff;
    box-shadow: 0 2px 2px 0 rgba(44, 71, 146, 0.17);
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
      width: 40%;
      opacity: 0.7;
      transition: all 0.18s;
    }
  }
}
</style>
