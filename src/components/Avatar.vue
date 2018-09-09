<template>
    <div class="avatar">
        <div class="pic" :style="'background-image:' + 'url(' + imgSrc +')'"></div>
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
    jobName: String
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

  .pic {
    width: 110px;
    height: 110px;
    border-radius: 110px;
    background-color: #ebeffe;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
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
  }
}
</style>
