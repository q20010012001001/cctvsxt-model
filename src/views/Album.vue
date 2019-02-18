<template>
  <section class="album">
    <com-header
      :isSearch="true"
      class="header"
      :title="'黔西南'"
      :isBackground="true"
    ></com-header>
    <com-detail ref="detail" class="detail">
      <!-- 标题 -->
      <h1 class="title">{{ data.title }}</h1>

      <!-- 作者 -->
      <author :data="data" :author="author"></author>

      <!-- 内容 -->
      <div class="content">
        <ul>
          <li :key="index" v-for="(item, index) in data.photos">
            <p>{{ item.title }}</p>
            <img :src="item.img" alt="" />
          </li>
        </ul>
      </div>

      <!-- 广告 -->
      <ad :ad="ad"></ad>

      <!-- 相关推荐 -->
      <recommend :recommend="recommend"></recommend>
    </com-detail>
  </section>
</template>

<script>
import { albumareasrs, kanbiere, albumCom, ad } from "@/assets/ajax/api.js";
import { getajax } from "@/assets/ajax/axios.js";
export default {
  data() {
    return {
      data: {},
      author: {},
      recommend: [],
      ad: []
    };
  },
  components: {
    comDetail: () => import("@/components/ComDetails.vue"),
    comHeader: () => import("@/components/Header.vue"),
    author: () => import("@/components/Author.vue"),
    ad: () => import("@/components/AD.vue"),
    recommend: () => import("@/components/Recommend.vue")
  },
  watch: {
    $route(to) {
      if (to.name == "album") {
        this.data = this.author = {};
        this.recommend = this.ad = [];
        this.getData();
      }
    }
  },
  methods: {
    getAlbumData() {
      getajax(albumareasrs, this, { id: this.$route.query.id }).then(res => {
        this.data = res.data.data;
        console.log(this.data);
      });
    },
    getAuthorData() {
      getajax(kanbiere, this, { id: this.$route.query.uid }).then(res => {
        this.author = res.data.data;
      });
    },
    getRecommendData() {
      getajax(albumCom, this).then(res => {
        this.recommend = res.data.data;
      });
    },
    getAdData() {
      getajax(ad, this).then(res => {
        this.ad = res.data.data;
      });
    },
    getData() {
      this.getAlbumData();
      this.getAuthorData();
      this.getRecommendData();
      this.getAdData();
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
audio {
  width: 100%;
}
.detail {
  padding-top: 80px;
}
.header {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
.audio {
  height: 100%;
  padding: 0 30px;
}

.album {
  margin-bottom: 30px;
}

.title {
  font-size: 60px;
  font-weight: normal;
  margin-bottom: 30px;
  padding-top: 30px;
}

.content /deep/ p {
  font-size: 40px !important;
}
.content /deep/ span {
  font-size: 40px !important;
}
</style>
