<template>
  <section class="video">
    <div class="top">
      <video controls :src="data.url"></video>
      <!-- 作者 -->
      <author
        class="author"
        :class="{ active: authoractive }"
        :data="data"
        :author="author"
      ></author>
    </div>
    <com-detail
      @scroll="scroll"
      :scrollevent="true"
      ref="detail"
      class="detail"
    >
      <!-- 标题和其他 -->
      <h1 class="title">{{ data.title }}</h1>

      <!-- 广告 -->
      <ad :ad="ad"></ad>

      <!-- 相关推荐 -->
      <recommend :recommend="recommend"></recommend>
    </com-detail>
  </section>
</template>

<script>
import { video, kanbiere, videoxiangguan, ad } from "@/assets/ajax/api.js";
import { getajax } from "@/assets/ajax/axios.js";
export default {
  data() {
    return {
      data: {},
      author: {},
      recommend: [],
      ad: [],
      authoractive: false
    };
  },
  components: {
    comDetail: () => import("@/components/ComDetails.vue"),
    author: () => import("@/components/Author.vue"),
    ad: () => import("@/components/AD.vue"),
    recommend: () => import("@/components/Recommend.vue")
  },
  watch: {
    $route(to) {
      if (to.name == "video") {
        this.data = this.author = {};
        this.recommend = this.ad = [];
        this.getData();
      }
    }
  },
  methods: {
    scroll(y) {
      if (y != 0) {
        this.authoractive = true;
      } else {
        this.authoractive = false;
      }
    },
    getVideoData() {
      getajax(video, this, { id: this.$route.query.id }).then(res => {
        this.data = res.data.data;
      });
    },
    getAuthorData() {
      getajax(kanbiere, this, { id: this.$route.query.uid }).then(res => {
        this.author = res.data.data;
      });
    },
    getRecommendData() {
      getajax(videoxiangguan, this, { id: 10124 }).then(res => {
        this.recommend = res.data.data;
      });
    },
    getAdData() {
      getajax(ad, this).then(res => {
        this.ad = res.data.data;
      });
    },
    getData() {
      this.getAdData();
      this.getRecommendData();
      this.getAuthorData();
      this.getVideoData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.title {
  padding: 20px 0;
  color: #000;
}
video {
  width: 100%;
  display: flex;
}
.detail {
  padding: 0 30px;
  flex: 1;
}
.author {
  &.active {
    border-bottom: 1px solid rgba(204, 204, 204, 0.35);
    [data-dpr="2"] & {
      border-bottom: 2px solid rgba(204, 204, 204, 0.35);
    }
    [data-dpr="3"] & {
      border-bottom: 3px solid rgba(204, 204, 204, 0.35);
    }
  }
  padding: 10px 30px;
}
.top {
  z-index: 2;
  // position: fixed !important;
  // top: 0;
  // left: 0;
  // width: 100%;
  // z-index: 2;
}
.video {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
