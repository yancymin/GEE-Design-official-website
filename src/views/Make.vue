<template>
   <div class="make main">
        <Header title="hahdhfd" des="hehe"/>
        <div class="container">
            <div class="overview">
                <h3>
                    属于极验小伙伴的礼物
                </h3>
                <p>
                    极验制造 G－MAKE 是极验内部孵化的全新品牌，由极验用户体验设计中心的设计部负责。G－MAKE 在极验统一的品牌视觉识别系统下，衍生出更具创新、新颖、个性的一个有趣形象。在“极验制造”这个品牌下，我们输出了一系列文化周边产品，发放给公司员工、合作伙伴、活动嘉宾以及特邀访客，希望给他们传递出我们充满活力、创造力的形象。
                </p>
            </div>
        </div>
   </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'make',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: auto;
  border-top: 1px solid #e1e7ff;
}
</style>
