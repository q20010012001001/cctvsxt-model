<template>
  <section class="author">
    <mcom-header :title="'作者详情'" :isBackground="true"></mcom-header>
    <div class="brief">
      <div class="top">
        <div class="img">
          <img :src="author.img" alt="" />
        </div>
        <div class="right">
          <div class="t">
            <ul>
              <li>
                <span>0</span>
                <span>新闻</span>
              </li>
              <li>
                <span>0</span>
                <span>关注</span>
              </li>
              <li>
                <span>0</span>
                <span>粉丝</span>
              </li>
              <li>
                <span>0</span>
                <span>赞赏</span>
              </li>
            </ul>
          </div>
          <div class="b">
            <span>私信</span>
            <span>关注</span>
            <span class="iconfont">下</span>
          </div>
        </div>
      </div>
      <div class="bottom">
        <span>
          <i class="iconfont"></i>
          简介:
          <span v-if="author.desc == ''">这个人很烂,什么都没留下</span>
          <span v-else>{{ typeof author.desc }}</span>
        </span>
      </div>
    </div>

    <div class="list">
      <div class="nav">
        <ul>
          <li>全部</li>
          <li>视频</li>
        </ul>
      </div>
      <div class="wrapper">
        <ul>
          <li>我是新闻.....</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import { kanbiere, kanbies } from "@/assets/ajax/api.js";
import { getajax } from "@/assets/ajax/axios.js";
export default {
  data() {
    return {
      author: {},
      authorList: []
    };
  },
  components: {
    mcomHeader: () => import("@/components/Header.vue")
  },
  methods: {
    getAuthor() {
      getajax(kanbiere, this, { id: this.$route.query.id }).then(res => {
        this.author = res.data.data;
        console.log(res.data.data);
      });
    },
    getAuthorList() {
      getajax(kanbies, this, { id: this.$route.query.id, page: 1 }).then(
        res => {
          this.authorList = res.data.data;
          console.log(res.data.data);
        }
      );
    }
  },
  created() {
    this.getAuthor();
    this.getAuthorList();
  }
};
</script>

<style></style>
