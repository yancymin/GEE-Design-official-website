<template>
    <div class="product" id="main">
        <Header title="产品矩阵" des="Geetest Product matrix" />
        <div class="container">
            <div class="product-matrix bottom-80">
                <h3>产品矩阵</h3>
                <p class="bottom-40">Geetest 产品矩阵我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是 我是文案我是文案我是文案我是文案我是文案我是文案文案。</p>
                <img class="bottom-40" src="../assets/Product/product1.png" alt="">
                <p class="bottom-40">Geetest 产品矩阵我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是文案我是 我是文案我是文案我是文案我是文案我是文案我是文案文案。</p>
            </div>

            <div class="product-color bottom-80">
                <h3>产品颜色</h3>
                <p class="bottom-40">产品矩阵的图形标志也能反映其产品的应用属性，通过视觉与形态的设计，体现出产品传递出来的理念与 文化；其图形标志是品牌呈现的关键元素，不可重新绘制或者擅自改变它。</p>
                <div class="bottom-40">
                    <img class="box-border" src="../assets/Product/product2.png" alt="">
                    <img src="../assets/Product/product3.png" alt="">
                </div>
                <div class="color-wrap">
                    <ColorPanel :color='color.blue1' colorName='矩阵浅蓝' hexVal='#2684FF' rgbVal='38, 132, 255' cmykVal='77, 47, 0, 0' />
                    <ColorPanel :color='color.blue2' colorName='矩阵深蓝' hexVal='#0052CC' rgbVal='0, 82, 204' cmykVal='89, 68, 0, 0' />
                    <ColorPanel :color='color.white' colorName='矩阵白' hexVal='#FFFFF' rgbVal='255, 255, 255' cmykVal='0, 0, 0, 0' />
                    <ColorPanel :color='color.gray' colorName='矩阵灰' hexVal='#9099A8' rgbVal='144, 153, 168' cmykVal='50, 37, 27, 0' />
                </div>
            </div>

            <div class="typeface bottom-80">
                <h3>产品标志字体</h3>
                <p class="bottom-40">品牌专用字体是品牌视觉识别的重要部分。品牌专用字体风格有助于建立品 牌独特的美感。方正兰亭黑做为腾讯云的中文品牌专用字体，被用于品牌产 品及品牌视觉传达中。我们需要遵循右页所述的品牌字体运用示例，以确保 品牌视觉传达的一致性。</p>
                <img class="box-border" src="../assets/Product/product8.png" alt="">
            </div>

            <div class="size-arrangement bottom-80">
                <h3>尺寸排列</h3>
                <p class="bottom-80">目前产品标志的主要应用场景为官网，配合官网设计标志尺寸定为两种，24px 和 20px，与文字间隔尺寸 统一为 10px；后续会有印刷尺寸的规范持续更新。</p>
                <div class="pic-box">
                    <div>
                        <img src="../assets/Product/product4.png" alt="">
                    </div>
                    <div>
                        <img src="../assets/Product/product5.png" alt="">
                    </div>
                </div>
            </div>

            <div class="logo-alignment">
                <h3>徽标对齐</h3>
                <p class="bottom-30">在水平行中使用完整徽标时，底部对齐到徽标中文本的基线。在堆叠的垂直列中，左对齐标识中最左侧的文 字，徽标采用中轴对齐。</p>
                <img class="bottom-40" src="../assets/Product/product6.png" alt="">
            </div>

            <div class="limited-use">
                <h3>使用限制</h3>
                <p class="bottom-40">为了保持产品矩阵标识的完整性，促进品牌的一致性，请不要滥用它。下面列出了一些徽标错误使用方法</p>
                <img src="../assets/Product/product7.png" alt="">
            </div>
            <span class="timestamp">更新于 2018.9.1</span>
            <Back-top />
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Scroll from "@/components/Scroll.vue";
import BackTop from "@/components/BackTop.vue";
import ColorPanel from "@/components/ColorPanel.vue";
import AnchorScroll from "@/components/AnchorScroll.vue";

export default {
  name: "product",
  components: {
    Header,
    Scroll,
    BackTop,
    ColorPanel,
    AnchorScroll
  },
  data() {
    return {
      color: {
        blue1: "#2684FF;",
        blue2: "#0052CC;",
        white: "#fff; border: 1px solid #F1F3F4;",
        gray: "#9099A8"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.product {
  .container {
    .product-matrix {
      width: 100%;
    }
    .product-color {
      width: 100%;
      & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        img {
          width: calc(50% - 10px);
          height: calc(50% - 10px);
        }
      }

      .color-wrap {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
      }
    }

    .size-arrangement {
      width: 100%;

      .pic-box {
        width: 100%;
        display: flex;
        justify-content: space-between;

        div {
          width: calc(50% - 10px);
          height: calc(50% - 10px);
          position: relative;

          &::before {
            content: "24px";
            position: absolute;
            top: -40px;
            display: block;
            width: 52px;
            height: 24px;
            border-radius: 3px;
            font-size: 14px;
            font-weight: 500;
            line-height: 23px;
            color: #3b426b;
            background-color: #d8dde6;
            text-align: center;
          }
        }
      }
    }

    .logo-alignment {
      width: 100%;
    }

    .limited-use {
      width: 100%;
    }
  }
}

span {
  position: relative;
  bottom: -76px;
  left: -308px;
  color: #bcc2de;
  font-size: 12px;
  line-height: 17px;
}

@media screen and (max-width: 414px) {
  .colorpanel {
    width: 100%;
  }
}
</style>
