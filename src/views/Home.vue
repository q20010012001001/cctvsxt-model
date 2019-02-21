<template>
  <div class="home">
    <div class="top">
      <my-header :isReturn="false" :title="haderTitle"></my-header>
      <my-nav :data="currentData"></my-nav>
    </div>
    <list
      :isloadingshow="isloadingshow"
      :loadingInnerHTML="loadingInnerHTML"
      ref="list"
      @pullingUp="pullingUp"
      :data="listData"
      class="liststyle"
    >
      <slider
        v-if="
          (this.$route.query.id == '' && this.$route.query.type == 11) ||
            (!this.$route.query.id && !this.$route.query.type)
        "
        :data="focus"
      ></slider>
    </list>
  </div>
</template>

<script>
import {
  nav,
  tuijian,
  dianbo,
  audiolist,
  qitaliebiao
} from "@/assets/ajax/api.js";
import { getajax } from "@/assets/ajax/axios.js";

export default {
  name: "home",
  data() {
    return {
      currentData: [],
      haderTitle: "首页",
      listData: [],
      page: 1,
      isloadingshow: false /* 没有请求数据为false,正在请求数据为true */,
      loadingInnerHTML: true /* 是否显示loading或没有数据 */,
      focus: []
    };
  },
  watch: {
    $route(to, from) {
      // 处理同一home组件列表query变化则数据变化
      if (to.name === "home" && from.name === "home") {
        this.listData = [];
        this.page = 1;
        this.getListData();
      }

      // 处理plus组件传来的nav导航数据
      if (to.name === "home" && from.name === "plus") {
        let data = localStorage.getItem("navdata");
        data = JSON.parse(data);
        this.currentData = data.currentData;

        // 处理从音乐列表跳往plus页面,删除音乐后返回音乐列表,存在的还是音乐新闻的问题
        if (this.$route.query.id && this.$route.query.type) {
          let newarr = this.currentData.map(res => {
            return `${res.id}&${res.type}`;
          });
          let reg = `${this.$route.query.id}&${this.$route.query.type}`;
          if (!newarr.includes(reg)) {
            let { id, type } = this.currentData[this.currentData.length - 1];
            this.$router.push({
              path: "/home",
              query: {
                id,
                type
              }
            });
          }
        }
      }
    }
  },
  methods: {
    // 上拉加载触发的函数
    pullingUp() {
      this.getListData();
    },

    // 获取导航数据
    getNavData() {
      let navdata = localStorage.getItem("navdata");
      if (navdata) {
        let jsonparsedata = JSON.parse(navdata);
        let newobj = this.isUrlId(
          jsonparsedata.currentData,
          jsonparsedata.otherData,
          jsonparsedata.navData,
          true
        );
        this.currentData = newobj.currentData;
      } else {
        getajax(nav, this).then(res => {
          // 整理传来的导航数据
          let defaultdata = res.data.default;
          let otherdata = res.data.other;
          let navData = defaultdata.concat(otherdata);
          let currentData = navData.filter((item, index) => {
            if (index < 10) {
              return item;
            }
          });
          let otherData = navData.filter((item, index) => {
            if (index >= 10) {
              return item;
            }
          });

          let newtwo = this.isUrlId(currentData, otherData, navData);
          currentData = newtwo.currentData;
          otherData = newtwo.otherData;
          // 存入本地存储
          let obj = {
            navData,
            currentData,
            otherData
          };
          localStorage.setItem("navdata", JSON.stringify(obj));
          this.currentData = currentData;
        });
      }
    },

    // 判断当前url的id是否在导航里,如果没有,就从otherData取到
    // callback为已经存储在本地用到的
    isUrlId(currentData, otherData, navData, callback) {
      // 如果url为/home则直接跳出
      if (!this.$route.query.id && !this.$route.query.type) {
        return {
          currentData,
          otherData,
          navData
        };
      }
      let idortype = currentData.map(item => {
        return `${item.id}&${item.type}`;
      });
      let { id, type } = this.$route.query;
      let currentidortype = `${id}&${type}`;
      if (!idortype.includes(currentidortype)) {
        let indexarr;
        otherData.forEach((val, indexval) => {
          if (val.id == id && val.type == type) {
            indexarr = indexval;
          }
        });
        let storeage = otherData[indexarr];
        otherData.splice(indexarr, 1);
        currentData.push(storeage);
        if (callback) {
          localStorage.setItem(
            "navdata",
            JSON.stringify({
              navData,
              otherData,
              currentData
            })
          );
        }
      }
      return {
        currentData,
        otherData
      };
    },

    // 获取列表数据 booeal代表初始化加载不要终止请求
    getListData(booeal) {
      if (typeof this.source === "function" && !booeal) {
        this.source("终止请求"); //取消请求
      }
      this.isloadingshow = true;
      this.loadingInnerHTML = true;

      let { url, id } = this.returnUrlId();
      getajax(url, this, { id, page: this.page })
        .then(res => {
          if (!res.data.data.length) {
            this.isloadingshow = false;
          } else {
            this.isloadingshow = true;
          }
          if (res.data.data.length < 15) {
            this.loadingInnerHTML = false;
          } else {
            this.loadingInnerHTML = true;
          }

          // 添加轮播图
          if (res.data.focus) {
            this.focus = res.data.focus;
          }

          this.listData = this.listData.concat(res.data.data);
          this.page++;
        })
        .catch(error => {
          console.log(error);
        });
    },

    // 判断当前id与type来返回url
    returnUrlId() {
      let url = "";
      let { id, type } = this.$route.query;
      if (id == "" && type == 11) {
        //推荐
        url = tuijian;
      } else if (id == "" && type == 13) {
        // 直播
        url = qitaliebiao;
      } else if (id != "" && type == 14) {
        // 点播
        url = dianbo;
      } else if (id != "" && type == 12) {
        //服务
        url = qitaliebiao;
      } else if (id != "" && type == 3) {
        //音乐
        url = audiolist;
      } else if (id != "" && type == 1) {
        // 其他
        url = qitaliebiao;
      } else {
        url = tuijian;
      }
      return {
        url,
        id
      };
    }
  },
  created() {
    this.getNavData();
    this.getListData(true);
  },
  components: {
    myHeader: () => import("@/components/Header.vue"),
    myNav: () => import("@/components/Nav.vue"),
    list: () => import("@/components/List.vue"),
    slider: () => import("@/components/Slider.vue")
  }
};
</script>

<style lang="less" scoped>
.home {
  // top: 0;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // .list {
  //   flex: 1;
  // }

  position: absolute;
  top: 0;
  width: 100%;
  padding-top: 150px;
  box-sizing: border-box;
}
.top {
  position: absolute;
  top: 0;
  width: 100%;
}
.liststyle {
  height: 100%;
}
</style>
