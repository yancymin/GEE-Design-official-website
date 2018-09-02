<template>
   <div class="make main">
        <Header title="极验制造" des="G-MAKE" :src="imgSrc"/>
        <div class="container">
            <div class="overview bottom-68">
                <h3>
                    属于极验小伙伴的礼物
                </h3>
                <p>
                    极验制造 G－MAKE 是极验内部孵化的全新品牌，由极验用户体验设计中心的设计部负责。G－MAKE 在极验统一的品牌视觉识别系统下，衍生出更具创新、新颖、个性的一个有趣形象。在“极验制造”这个品牌下，我们输出了一系列文化周边产品，发放给公司员工、合作伙伴、活动嘉宾以及特邀访客，希望给他们传递出我们充满活力、创造力的形象。
                </p>
            
            </div>
            <div class="brand-logo">
                <h3>
                    品牌标识
                </h3>
                <p class="bottom-30">
                   极验制造的标识由图形“g”和文字标志“MAKE”组成，其元素间的相对大小和位置是固定的，不能重新绘制或者擅自组合。文字标志不能单独使用，但图形标志可以单独使用。
                </p>
                <img class="img-box" src="../assets/Brand/content_brand1.png" alt="">
            </div>
        </div>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";
import imgUrl from "../assets/img_headerbg.png";


export default {
  name: 'Make',
  data () {
    return {
      src: imgUrl
    }
  },
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.make {
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 700px;
    height: auto;
    border-top: 1px solid #e1e7ff;
    padding: 48px 0;
    margin: 60px 0;

     .bottom-68 {
            margin-bottom: 68px;
        }

        .bottom-30 {
             margin-bottom: 30px;
        }

    .img-box {
           border: 1px solid #E5E5E5;
            background-color: #FFFFFF;
        }
      
         h3 {
            font-size: 18px;
            font-weight: 500;
            line-height: 29px;
            margin-bottom: 8px;
        }

        p {
            font-size: 15px;
            line-height: 25px;
        }

        img {
            width: 100%;
            height: auto;
        }

  }
}
</style>
