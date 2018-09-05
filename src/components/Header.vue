<template>
    <div class="header">
        <div class="text-box">
            <h1>{{ title }}</h1>
            <p>{{ des }}</p>
        </div>
        <img alt="" class="bg" :src="src" :style="{'background-color': 'bgc'}"/>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    des: String,
    src: String,
    bgc: String
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 250px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #292f3a;
  //   background-image: url(../assets/img_headerbg.png);
  //   background-position: 50% 50%;
  //   background-size: auto 250px;
  //   background-repeat: no-repeat;
  //   margin-left: 250px;

  .bg {
    width: auto;
    height: 250px;
    position: absolute;
    top: 0;
  }

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
</style>
