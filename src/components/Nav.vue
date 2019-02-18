<template>
  <section class="nav">
    <div class="wrapper" ref="wrapper">
      <ul ref="content">
        <router-link
          :key="index"
          v-for="(item, index) in data"
          :to="{ path: '/home', query: { id: item.id, type: item.type } }"
          tag="li"
        >
          {{ item.title }}
        </router-link>
      </ul>
    </div>
    <div class="more">
      <span class="list_shadow"> </span>
      <router-link to="/plus" tag="span" class="iconfont">&#xe63d;</router-link>
    </div>
  </section>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  watch: {
    data: {
      handler(val) {
        if (!val.length) return;
        this.initBTscroll();
        this.initNavActive();
      },
      immediate: true
    }
  },
  methods: {
    // 处理路由为/home指定为第0个
    initNavActive() {
      let { id, type } = this.$route.query;
      if (!id && !type) {
        this.$nextTick(() => {
          this.$refs.content.children[0].classList.add(
            "router-link-exact-active"
          );
        });
      }
    },

    // 初始化btscroll
    initBTscroll() {
      this.$nextTick(() => {
        // 计算content的宽度
        let width = 0;
        let arr = [...this.$refs.content.children];
        arr.map(res => {
          width += Math.ceil(res.clientWidth);
        });
        this.$refs.content.style.width = `${width + 5}px`;
        this.refresh();

        // 解决页面刷新导致导航active不在相应的位置
        let index = 0;
        arr.forEach((res, indexa) => {
          let threearr = [...res.classList];
          if (threearr.includes("router-link-exact-active")) {
            index = indexa;
          }
        });
        let confirmDom = this.$refs.content.children[index];
        this.scroll.scrollToElement(confirmDom, 0);
      });
    },
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      scrollX: true,
      scrollY: false,
      click: true
    });
  }
};
</script>

<style lang="less" scoped>
.nav {
  .wrapper {
    margin-right: 80px;
    overflow: hidden;
  }
  position: relative;
  .more {
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 70px;
    font-size: 40px;
    line-height: 70px;
    // background: #fff;
    text-align: center;
    .iconfont {
      font-size: 40px;
    }
    .list_shadow {
      //   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAABXCAQAAACjUt0DAAAAAmJLR…AwtDMDRwAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=)
      //     no-repeat center right;
      //   background-size: contain;
      //   background-color: rgba(244, 245, 246, 0.3);
      //   width: 10px;
      //   height: 70px;
      //   left: -10px;
      //   position: absolute;
      //   display: inline-block;
    }
  }
  height: 70px;
  overflow: hidden;
  border-bottom: 1px solid #e2e2e2; /* no */
  [data-dpr="2"] & {
    border-bottom: 2px solid #e2e2e2; /* no */
  }
  [data-dpr="3"] & {
    border-bottom: 3px solid #e2e2e2; /* no */
  }
  //   align-items: center;
  ul {
    width: 100%;
    // display: flex;
    li {
      &.router-link-exact-active {
        color: #f00;
      }
      line-height: 70px;
      display: inline-block;
      padding: 0 16px;
      font-size: 32px;
      color: #252424;
    }
  }
}
</style>
