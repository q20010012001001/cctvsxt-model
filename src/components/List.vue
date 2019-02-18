<template>
  <div class="list" ref="wrapper">
    <ul ref="content">
      <slot></slot>
      <li :key="index" v-for="(item, index) in data">
        <div class="oneImage">
          <div class="wrapper">
            <div class="left">
              <div class="title">
                <template v-if="item.type == 0">
                  <router-link
                    :to="{
                      path: '/video',
                      query: { id: item.id, uid: item.uid }
                    }"
                    class="lineClamp5"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 3">
                  <router-link
                    :to="{
                      path: '/audio',
                      query: { id: item.id, uid: item.uid }
                    }"
                    class="lineClamp5"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 1">
                  <router-link
                    :to="{
                      path: '/article',
                      query: { id: item.id, uid: item.uid }
                    }"
                    class="lineClamp5"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 2">
                  <router-link
                    :to="{
                      path: '/album',
                      query: { id: item.id, uid: item.uid }
                    }"
                    class="lineClamp5"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 4">
                  <router-link to="/video" class="lineClamp5">
                    {{ item.title }}
                  </router-link>
                </template>
              </div>
            </div>
            <div class="right">
              <a>
                <img @error="imgError($event)" :src="item.img" alt="" />
                <span v-if="item.type == 0" class="write iconfont"
                  >&#xe667;</span
                >
              </a>
            </div>
          </div>
          <div class="pro">
            <span class="user">
              <router-link :to="{ path: '/author', query: { id: item.uid } }">
                <img @error="imgError($event)" :src="item.authorLogo" alt="" />
                {{ item.from }}
              </router-link>
            </span>
            <span>{{ item.time }}</span
            ><span>浏览量:&nbsp;{{ item.visitNum }}</span>
          </div>
        </div>
      </li>

      <!-- <li><router-link to="/audio">音频</router-link></li>
      <li><router-link to="/video">视频</router-link></li>
      <li><router-link to="/album">图集</router-link></li>
      <li><router-link to="/author">作者头像</router-link></li>
      <li><router-link to="/article">图文</router-link></li> -->
      <div v-if="data.length || isloadingshow" class="loading">
        <i class="iconfont" v-if="loadingInnerHTML">&#xe6a7;</i>
        <span v-if="!loadingInnerHTML">没有数据了</span>
      </div>
    </ul>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {};
  },
  props: {
    loadingInnerHTML: {
      type: Boolean,
      default: true
    },
    isloadingshow: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: () => function() {}
    }
  },
  watch: {
    data: {
      handler() {
        if (this.loadingInnerHTML) {
          this.$nextTick(() => {
            this.finishPullUp();
          });
        }
      }
    },
    $route(to, from) {
      if (to.name == "home" && from.name == "home") {
        this.scroll.scrollTo(0, 0);
      }
    }
  },
  methods: {
    imgError: function imgError() {
      // var src = e.target.src;
      // e.target.src = "/css/ccsx/img/timg.jpg";
      // e.target.setAttribute("error", src);
    },
    initBTscroll() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          pullUpLoad: {
            threshold: 50
          },
          scrollbar: {
            fade: true
          },
          bounce: {
            bottom: false /* 关闭下方回弹动画 */
          }
        });
        this.scroll.on("pullingUp", () => {
          /* 请求数据时状态更改为正在请求数据 */
          this.isloadingshow = true;

          this.$emit("pullingUp");
        });
      });
    },

    finishPullUp() {
      this.scroll && this.scroll.finishPullUp();
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this.initBTscroll();
  }
};
</script>

<style lang="less" scoped>
.list {
  overflow: hidden;
}

// 搜索列表样式
.lineClamp5 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.lineClamp3 {
  display: -webkit-box !important;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
li {
  padding: 0.4rem 0;
  margin: 0 0.5rem;
  border-bottom: 1px solid #d1d1d1;
}
li.active .title {
  color: #999;
}
li.active .title a {
  color: #999;
}
li:first-child {
  border-top: 0;
}
li .title {
  font-size: 0.7rem;
  font-weight: bold;
  color: #333;
}
li .title a {
  color: #333;
  width: 100%;
  height: 100%;
  display: block;
}
li .pro {
  margin-top: 0.3rem;
  display: flex;
  align-items: center;
}
li .pro span {
  font-size: 0.35rem;
  margin-right: 0.3rem;
  color: #808080;
}
li .pro span:last-child {
  margin-right: 0;
}
li .pro span.user img {
  background: #cccccc;
  width: 0.45rem;
  height: 0.45rem;
  border-radius: 50%;
  margin-right: 0.125rem;
}
li .pro span a {
  color: #808080;
}
li .oneImage {
  .wrapper {
    display: flex;
    align-items: center;
  }
  .left {
    display: flex;
    flex: 1;
    align-items: center;
  }
}
li .oneImage .right {
  margin-left: 0.3rem;
  width: 3rem;
  height: 1.8rem;
  overflow: hidden;
  position: relative;
}
li .oneImage .right a {
  width: 100%;
  height: 100%;
}
li .oneImage .right img {
  width: 100%;
}
li .oneImage .right .write {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
}
li .oneImage .left .title {
  margin-bottom: 0.2rem;
  width: 100%;
  height: 100%;
}
li .threeImg .imglist {
  margin-top: 0.2rem;
}
li .threeImg .imglist div {
  position: relative;
  height: 1.8rem;
  overflow: hidden;
  margin-right: 0.1rem;
}
li .threeImg .imglist div .write {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
}
li .threeImg .imglist div img {
  width: 100%;
}
li .threeImg .imglist div:last-child {
  margin-right: 0;
}
li .largeImg .img {
  margin-top: 0.3rem;
  position: relative;
  height: 5rem;
  overflow: hidden;
}
li .largeImg .img a {
  width: 100%;
  display: block;
}
li .largeImg .img .write {
  position: absolute;
  bottom: 0rem;
  right: 0rem;
  top: 0;
  left: 0;
  margin: auto;
  font-size: 0.9rem;
  width: 0.9rem;
  height: 0.9rem;
  color: #fff;
}
li .largeImg .img img {
  width: 100%;
}
li .twoImg .img a {
  margin-top: 0.3rem;
}
li .twoImg .img a div {
  height: 2.5rem;
  overflow: hidden;
  position: relative;
}
li .twoImg .img a div:first-child {
  margin-right: 0.1rem;
}
li .twoImg .img a div .write {
  position: absolute;
  bottom: 0.2rem;
  right: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
}
li .twoImg .img a div img {
  width: 100%;
}
li .audio .title a {
  font-size: 0.7rem;
}
li .audio .title a i {
  font-size: 0.7rem;
  margin-right: 0.2rem;
  vertical-align: middle;
}
@keyframes circle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@-webkit-keyframes circle {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
.loading {
  padding: 0.5rem 0;
  text-align: center;
}
.loading span {
  font-size: 0.45rem;
}
.loading i {
  display: block;
  -webkit-animation: circle 1s infinite linear;
  animation: circle 1s infinite linear;
  font-size: 0.7rem;
}
</style>
