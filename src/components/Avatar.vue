<template>
    <div class="avatar">
        <div class="pic-wrap">
            <div class="pic" :style="'background-image:' + 'url(' + imgSrc +')'"></div>
            <div class="social-icons">
                <a :href='href1' target="blank" :style="'background-image:' + 'url(' + iconSrc1 +')'"></a>
                <a :href='href2' target="blank" :style="'background-image:' + 'url(' + iconSrc2 +')'"></a>
            </div>
        </div>
        <div class="job-title">
            <span>
            </span>
            <p>{{ jobName }}</p>
        </div>
        <div class="name">{{ name }}</div>
    </div>
</template>

<script>
export default {
  name: "Avatar",
  props: {
    imgSrc: String,
    name: String,
    jobName: String,
    href1: String,
    href2: String,
    iconSrc1: String,
    iconSrc2: String
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  position: relative;
  width: 110px;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  padding: 0 78px 0 0;

  &:hover .pic-wrap .pic::before {
    opacity: 0.9;
  }
  &:hover .pic-wrap .social-icons > a {
    opacity: 1;
  }
  //   &:hover .pic-wrap .pic {
  //     transform: scale(1.1);
  //   }

  .pic-wrap {
    .social-icons {
      width: 110px;
      height: 30px;
      position: absolute;
      display: flex;
      justify-content: center;
      top: 48px;

      a {
        display: block;
        opacity: 0;
        width: 20px;
        height: 20px;
        // background-color: rgb(181, 22, 22);
        transition: all 0.3s;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 20px 20px;
        margin: 0 6px;
        transition: all 0.2s cubic-bezier(0.165, 0.84, 0.44, 1);
        will-change: transition;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    .pic {
      width: 110px;
      height: 110px;
      border-radius: 110px;
      background-color: #ebeffe;
      background-repeat: no-repeat;
      background-position: center;
      background-size: 100%;
      //   transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      //   transition-delay: 0.08s;

      &::before {
        content: "";
        display: block;
        opacity: 0;
        width: 110px;
        height: 110px;
        border-radius: 110px;
        // background-color: #000000;
        background-color: #3973ff;
        mix-blend-mode: multiply;
        transition: all 0.2s ease-in;
      }
    }
  }

  .job-title {
    position: absolute;
    top: 76px;
    left: 37px;
    width: auto;
    height: 40px;
    text-align: center;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    cursor: default;

    span {
      display: block;
      width: 100%;
      height: 100%;
      mix-blend-mode: multiply;
      background-color: #46d7ff;
      border-radius: 40px 40px 40px 0;
    }

    p {
      position: relative;
      top: -32px;
      color: #fff;
      margin: 0 12px;
    }
  }

  .name {
    align-self: center;
    margin-top: 20px;
    cursor: default;
  }
}
</style>
