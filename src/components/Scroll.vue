<template>
    <div class="Scroll">
        <a class="Scroll-link" :title="title" :href="href">{{ des }}</a>
    </div>
</template>

<script>
export default {
  name: "Scroll",
  props: {
    title: String,
    href: String,
    des: String
  }
};
</script>

<style lang="scss" scoped>
// .Scroll {
//   margin-bottom: 4px;
//   a {
//     font-size: 13px;
//     font-weight: 400;
//     line-height: 30px;
//     color: rgba(0, 31, 86, 0.6);
//     padding: 6px 8px;
//     border-radius: 3px;
//     transition: all 0.2s ease;
//     &:hover {
//       opacity: 0.9;
//       background-color: #3873ff;
//       color: #fff;
//       font-weight: 500;
//     }
//   }
// }
</style>
