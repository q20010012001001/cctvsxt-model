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
                <span>1018</span>
                <span>新闻</span>
              </li>
              <li>
                <span>9</span>
                <span>关注</span>
              </li>
              <li>
                <span>86万</span>
                <span>粉丝</span>
              </li>
              <li>
                <span>620万</span>
                <span>赞赏</span>
              </li>
            </ul>
          </div>
          <div class="b">
            <span class="letter">私信</span>
            <span class="follow">已关注</span>
            <span class="btn iconfont">下</span>
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

<style lang="less" scoped>
.brief{
      padding:20px 20px;
      border-bottom: 13px solid #efefef;
}
  .top{
    display:flex;

      padding-bottom:30px;
    .img{
      width: 170px;
      height:170px;
      overflow:hidden;
      border-radius:50%;
      border:1px solid #ccc;
      img{
        width:100%;
        height:auto;
      }
    }
    .right{
      display:flex;
      flex-direction: column;
      justify-content: space-between;
      flex:1;
      margin-left:60px;
      margin-right:20px;
      .t{
        ul{
          display:flex;
            justify-content: space-between;
          li{
            display:flex;
            flex-direction: column;
            text-align: center;
            span{
              &:nth-of-type(1){
                font-weight:bold;
                font-size:30px
              }
              &:nth-of-type(2){
                font-size:25px;
                margin-top:8px;
                color:#a09b9b;
              }
            }
          }
        }
      }
      .b{
        display:flex;
        .letter{
          padding:10px 22px;
        }
        .btn{
          padding:10px 15px;
        }
  .follow{
    flex:1;
    margin:0 20px;
    align-items:center;
    justify-content: center;
    display:flex;
  }
        span{
          font-size:30px;
    border-radius:10px;
          border:1px solid #ccc;

        }
      }
    }
  }
</style>

