<template>
  <div class="download" id="main">
    <Header title="资源下载" des="Download" :imageSrc='imageSrc' />
    <div class="container">
      <div class="des">
        <p class="bottom-40">这里提供极验品牌标志、产品标志等资源下载。请按照极验品牌的规范来使用相关标志。</p>
      </div>
      <div class="card-wrap">
        <div class="card card-1 bottom-40">
          <img src="../assets/Download/cover1.png" alt="" class="cover">
          <div class="card-content">
            <h3>极验品牌标志</h3>
            <h4>Geetest brand identity</h4>
            <div class="icon-wrap">
              <a class="psd" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E5%93%81%E7%89%8C%E6%A0%87%E5%BF%97.psd" target="blank" download="极验品牌标志.psd">
                <div>
                  <img src="../assets/Download/psd.png" alt="">
                  <p>PSD 格式</p>
                </div>
                <span></span>
              </a>
              <a class="ai" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E5%93%81%E7%89%8C%E6%A0%87%E5%BF%97.ai" target="blank" download="极验品牌标志.ai">
                <div>
                  <img src="../assets/Download/ai.svg" alt="">
                  <p>AI 格式</p>
                </div>
                <span></span>
              </a>
              <a class="pdf" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E5%93%81%E7%89%8C%E6%A0%87%E5%BF%97.pdf" target="blank" download="极验品牌标志.pdf">
                <div>
                  <img src="../assets/Download/pdf.svg" alt="">
                  <p>PDF 格式</p>
                </div>
                <span></span>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-2 bottom-40">
          <img src="../assets/Download/cover2.png" alt="" class="cover">
          <div class="card-content">
            <h3>极验产品矩阵标志</h3>
            <h4>Geetest product matrix identification</h4>
            <div class="icon-wrap" id="icon-wrap">
              <a class="psd" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E4%BA%A7%E5%93%81%E7%9F%A9%E9%98%B5%E6%A0%87%E5%BF%97.psd" target="blank" download="极验产品矩阵标志.psd">
                <div>
                  <img src="../assets/Download/psd.png" alt="">
                  <p>PSD 格式</p>
                </div>
                <span></span>
              </a>
              <a class="ai" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E4%BA%A7%E5%93%81%E7%9F%A9%E9%98%B5%E6%A0%87%E5%BF%97.ai" target="blank" download="极验产品矩阵标志.ai">
                <div>
                  <img src="../assets/Download/ai.svg" alt="">
                  <p>AI 格式</p>
                </div>
                <span></span>
              </a>
            </div>
          </div>
        </div>
        <div class="card card-3">
          <img src="../assets/Download/cover3.png" alt="" class="cover">
          <div class="card-content">
            <h3>图像／图标资源</h3>
            <h4>Image / icon resource</h4>
            <div class="icon-wrap">
              <a class="sketch" href="https://github.com/yancymin/GEE-Design-Resource/raw/master/%E6%9E%81%E9%AA%8C%E5%9B%BE%E5%83%8F%E4%B8%8E%E5%9B%BE%E6%A0%87%E8%B5%84%E6%BA%90%E5%88%86%E4%BA%AB.sketch" id="sketch" target="blank" download="图像与图标资源分享.sketch">
                <div>
                  <img src="../assets/Download/sketch.svg" alt="">
                  <p>Sketch 格式</p>
                </div>
                <span></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Back-top />
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Scroll from '@/components/Scroll.vue'
import BackTop from '@/components/BackTop.vue'

import HeaderImage from '@/assets/Header/1.jpg'

export default {
  name: 'about',
  data () {
    return {
      imageSrc: HeaderImage
    }
  },
  components: {
    Header,
    Scroll,
    BackTop
  }
}
</script>

<style lang="scss" scoped>
.download {
  .container {
    border: 0;

    .des {
      width: 100%;
    }

    .card-wrap {
      width: 100%;
      .card {
        display: flex;
        justify-content: space-between;
        width: calc(100% - 50px);
        height: 212px;
        background: #ffffff;
        box-shadow: 0 2px 2px 0 rgba(44, 71, 146, 0.17),
          0 -1px 1px 0 rgba(44, 71, 146, 0.08);
        border-radius: 3px;
        padding: 10px 40px 10px 10px;

        .cover {
          width: 300px;
          height: auto;
          background-color: #3873ff;
          border-radius: 2px;
        }

        .card-content {
          width: 300px;
          height: auto;
          padding: 20px 0;

          h3 {
            margin-bottom: 2px;
          }

          h4 {
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 40px;
          }

          .icon-wrap {
            position: relative;
            display: flex;
            justify-content: space-between;

            .psd img {
              width: 49px !important;
              height: 49px !important;
              margin-left: 5px;
            }

            a {
              display: block;

              &:hover p {
                color: #464e73;
              }

              &:nth-of-type(2)::before {
                margin-left: -26px;
              }

              &:before {
                content: '';
                position: absolute;
                opacity: 0;
                top: -10px;
                margin-left: -20px;
                width: 100px;
                height: 104px;
                border-radius: 3px;
                background-color: #e2e7eb;
                transition: all 0.2s ease;
                transform: scale(0.93);
              }

              &:hover:before {
                opacity: 0.6;
                transform: scale(1);
              }

              & div {
                z-index: 99;
                position: relative;
              }

              img {
                width: 100%;
                height: 50px;
                margin-bottom: 12px;
                border-radius: 0;
              }

              p {
                font-size: 14px;
              }
            }
          }
        }

        #icon-wrap {
          width: 174px;
        }

        #sketch {
          &::before {
            width: 100px;
            left: 8px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1220px) {
  #main {
    .container {
      margin: 20px 0 40px 0;

      .card-wrap {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;

        .card {
          width: 45%;
          height: 100%;
          flex-direction: column;
          padding: 10px;

          img {
            width: 100%;
          }

          .card-content {
            width: auto;
            padding: 40px 20px 20px 20px;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 920px) {
  #main {
    .container {
      margin: 20px 0 40px 0;

      .card-wrap {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .card {
          width: calc(100% - 20px);
          height: 100%;
          flex-direction: column;
          padding: 10px;

          img {
            width: 100%;
          }

          .card-content {
            width: auto;
            padding: 40px 20px 20px 20px;
          }
        }
      }
    }
  }
}
</style>
