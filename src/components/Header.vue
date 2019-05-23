<template>
  <div class="header" id="header" :style="'background-image:' + 'url(' + imageSrc +')'">
    <div class="text-box">
      <h1><pre>{{title}}</pre></h1>
      <p>{{ des }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: String,
    des: String,
    imageSrc: String
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
  background-color: #153261;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: all 0.2s;

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

@media screen and (max-width: 540px) {
  .header {
    width: calc(100% + 40px);
    height: 200px;

    .text-box {
      margin-left: 20px;
    }
  }
}
</style>
