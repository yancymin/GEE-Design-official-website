<template>
    <div class="global_loading">
        <img src="../assets/global_loading.gif" alt="">
    </div>
</template>

<script>
export default {
  name: 'GlobalLoading'
}
</script>

<style lang="scss" scoped>
.global_loading {
  pointer-events: none;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  width: 100vw;
  height: 100vh;
  background-color: #3973ff;
  animation: loadingLoop 2.4s;
  animation-fill-mode: forwards;
  transition: all 0.3s;
  opacity: 0;

  img {
    height: 90px;
  }
}

@keyframes loadingLoop {
  0% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
