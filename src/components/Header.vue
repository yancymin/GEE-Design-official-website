<template>
  <div class="header" id="header">
    <div class="text-box">
      <h1>{{ title }}</h1>
      <p>{{ des }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: String,
    des: String,
  }
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 250px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #292f3a;
  background-image: url(../assets/header_bg.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .text-box {
    z-index: 2;
    width: 700px;
    height: 250px;
    text-align: left;
    margin-top: 40px;

    & > h1 {
      color: #fff;
      font-size: 43px;
      font-weight: 500;
    }

    & > p {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 1220px) {
}

@media screen and (max-width: 414px) {
  .header {
    width: calc(100% + 40px);
    height: 200px;

    .text-box {
      margin-left: 20px;
    }
  }
}
</style>

