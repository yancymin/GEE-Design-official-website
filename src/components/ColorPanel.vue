<template>
    <div class="colorpanel">
        <div class="color-wrap">
            <div class="colorpanel-color" :style="'background-color:' + color"></div>
            <p>{{ colorName }}</p>
        </div>
        <div class="tag-wrap">
            <div class="color-tag">
                <span>HEX</span>
                <p class="color-val copy">{{ hexVal }}</p>
            </div>
            <div class="color-tag">
                <span>RGB</span>
                <p class="color-val copy">{{ rgbVal }}</p>
            </div>
            <div class="color-tag">
                <span>CMYK</span>
                <p class="color-val copy">{{ cmykVal }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ColorPanel",
  props: {
    color: String,
    colorName: String,
    hexVal: String,
    rgbVal: String,
    cmykVal: String
  }
};
</script>

<style lang="scss" scoped>
.colorpanel {
  width: 604px;
  height: 56px;
  border-radius: 3px;
  background-color: #f6f8fb;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 22px 64px 22px 32px;
  margin-bottom: 6px;

  .color-wrap {
    display: flex;
    align-items: center;

    p {
      font-size: 18px;
      color: #3b426b;
      font-weight: 500;
      margin-left: 22px;
    }
  }

  .colorpanel-color {
    width: 56px;
    height: 56px;
    border-radius: 56px;
    background-color: rgb(98, 133, 230);
  }

  & span {
    width: 100%;
    height: 20px;
    font-size: 14px;
    font-weight: 500;
    color: #3b426b;
    background-color: #d8dde6;
    border-radius: 3px;
    padding: 2px 8px;
  }

  .tag-wrap {
    display: flex;
    justify-content: space-between;
    height: 52px;
    margin-top: 6px;
    margin-right: -14px;

    .color-tag {
      width: 90px;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    p {
      font-size: 13px;
      font-weight: 500;
      color: #3b426b;
      text-align: left;
      margin-top: 8px;
    }
  }
}

@media screen and (max-width: 414px) {
  .colorpanel {
    width: auto;
    height: 140px;
    flex-direction: column;
    align-items: flex-start;
    padding: 22px 32px 22px 32px;
    white-space: nowrap;

    .tag-wrap {
      .color-tag {
        margin-right: 8px;
      }
    }
  }
}
</style>
