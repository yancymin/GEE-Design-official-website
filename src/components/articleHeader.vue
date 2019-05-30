<template>
  <div class="articleHeader" id="header">
    <transition name="fade" appear>
      <div class="text-box">
        <h1>{{title}}</h1>
        <p>{{ des }}</p>
      </div>
    </transition>
    <transition name="headerShow" appear>
      <span :style="'background-image:' + 'url(' + imageSrc +')'"></span>
    </transition>
  </div>
</template>

<script>
export default {
  name: "articleHeader",
  props: {
    title: String,
    des: String,
    imageSrc: String
  }
};
</script>

<style lang="scss" scoped>
span {
  position: absolute;
  width: 100%;
  height: 250px;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: #153261;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #070707;
    opacity: 0.6;
  }
}
.articleHeader {
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
  overflow: hidden;

  .text-box {
    z-index: 2;
    width: 700px;
    height: 250px;
    text-align: left;
    margin-top: 40px;

    & > h1 {
      color: #fff;
      font-size: 40px;
      font-weight: 500;
      margin-top: 16px;
    }

    & > p {
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

@media screen and (max-width: 540px) {
  .articleHeader {
    width: calc(100% + 40px);
    height: 200px;

    .text-box {
      margin-left: 20px;

      h1 {
        font-size: 32px;
      }
    }
  }
}

@media screen and (max-width: 1220px) {
  .articleHeader .text-box {
    width: 80%;
  }
}
</style>
