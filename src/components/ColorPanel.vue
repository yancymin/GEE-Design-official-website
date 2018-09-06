<template>
    <div class="colorpanel">
        <div class="colorpanel-color" style="background:{color}"></div>
        <p>{{ colorName }}</p>
        <div class="tag-warp">
            <div class="color-tag">
                <span>{{ hex }}</span>
                <p class="color-val">{{ hexVal }}</p>
            </div>
            <div class="color-tag">
                <span>{{ rgb }}</span>
                <p class="color-val">{{ rgbVal }}</p>
            </div>
            <div class="color-tag">
                <span>{{ cmyk }}</span>
                <p class="color-val">{{ cmykVal }}</p>
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
    hex: String,
    hexVal: String,
    rgb: String,
    hgbVal: String,
    cmyk: String,
    cmykVal: String
  }
};
</script>

<style lang="scss" scoped>
</style>
