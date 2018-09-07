<template>
    <div class="anchor-wrap">
        <ul class="ul scroll">
            <li v-for="(subItem, subIndex) in jsonData" :key="subIndex">
                <a href="javascript:void(0)" @click="goAnchor('#anchor-' + subItem.english, subIndex)" :class="{active: subIndex === nowSubIndex}">{{ subItem.chinese }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: "AnchorScroll",
  props: {
      jsonData: Array,
      nowSubIndex: Number
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // 监听 scroll 事件
  },
  methods: {
    handleScroll() {
      let _scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        // _innerHeight = window.innerHeight / 5,
        _article = document.querySelectorAll("h3");

      _article.forEach((item, index) => {
        if (_scrollTop >= item.offsetTop) {
          this.nowSubIndex = index;
        }
      });
    },
    goAnchor(selector, index) {
      this.nowSubIndex = index; // 把当前点击时获取的 index 赋值给 nowSubIndex；如果两者相等，则显示高亮
      console.log(this.$el.querySelector(selector));
      let anchor = this.$el.querySelector(selector),
  
        _offsetTop = anchor.offsetTop,
        _scrollTop =
          document.documentElement.scrollTop || document.body.scrollTop,
        step = (_offsetTop / 50) >> 0; // 平滑滚动平均分成 50 份，取整

      if (_offsetTop > _scrollTop) {
        anchorDown();
      } else {
        let newOffsetTop = _scrollTop - _offsetTop;
        step = (newOffsetTop / 50) >> 0;
        anchorUp();
      }

      function anchorDown() {
        if (_scrollTop < _offsetTop) {
          _scrollTop += step;
          document.body.scrollTop = document.documentElement.scrollTop = _scrollTop;
          setTimeout(anchorDown, 10);
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = _offsetTop;
        }
      }

      function anchorUp() {
        if (_scrollTop > _offsetTop) {
          _scrollTop -= step;
          document.body.scrollTop = document.documentElement.scrollTop = _scrollTop;
          setTimeout(anchorUp, 10);
        } else {
          document.body.scrollTop = document.documentElement.scrollTop = _offsetTop;
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll); // 销毁 scroll 事件
  }
};
</script>

<style lang="scss" scoped>
</style>
