<template>
  <section class="plus">
    <com-Header :isSearch="false" :title="'栏目管理'"></com-Header>
    <div class="remove style">
      <div class="title">点击删除以下频道</div>
      <ul>
        <li
          @click="liclick(index, true)"
          :class="{ visibility: typeof item == 'string' }"
          :key="index"
          v-for="(item, index) in currentData"
        >
          <div>{{ item.title }}</div>
        </li>
      </ul>
    </div>
    <div class="remove style">
      <div class="title">点击添加以下频道</div>
      <ul>
        <li
          @click="liclick(index)"
          :class="{ visibility: Object.keys(item).length <= 0 }"
          :key="index"
          v-for="(item, index) in otherData"
        >
          <div>{{ item.title }}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { nav } from "@/assets/ajax/api.js";
import { getajax } from "@/assets/ajax/axios.js";
export default {
  data() {
    return {
      navData: [], //总
      currentData: [], //当前
      otherData: [] //其他
    };
  },
  components: {
    comHeader: () => import("@/components/Header.vue")
  },
  methods: {
    // 点击事件
    liclick(index, booeal) {
      if (booeal) {
        let removeItem = this.currentData[index];
        this.currentData.splice(index, 1);
        this.otherData.push(removeItem);
        localStorage.setItem(
          "navdata",
          JSON.stringify({
            otherData: this.otherData,
            navData: this.navData,
            currentData: this.currentData
          })
        );
      } else if (!booeal) {
        let addItem = this.otherData[index];
        this.otherData.splice(index, 1);
        this.currentData.push(addItem);
        localStorage.setItem(
          "navdata",
          JSON.stringify({
            otherData: this.otherData,
            navData: this.navData,
            currentData: this.currentData
          })
        );
      }
    },

    // 获取导航数据
    getNavData() {
      let navdata = localStorage.getItem("navdata");
      if (navdata) {
        let jsonparsedata = JSON.parse(navdata);
        this.currentData = jsonparsedata.currentData;
        this.otherData = jsonparsedata.otherData;
        this.navData = jsonparsedata.navData;
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

          // 存入本地存储
          let obj = {
            navData,
            currentData,
            otherData
          };
          localStorage.setItem("navdata", JSON.stringify(obj));
          this.currentData = currentData;
          this.otherData = otherData;
          this.navData = navData;
        });
      }
    }
  },
  created() {
    this.getNavData();
  }
};
</script>

<style lang="less" scoped>
.style {
  padding: 20px 20px;
  padding-right: 0;
  .title {
    margin-bottom: 20px;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    // justify-content: space-between;
    li {
      &.visibility {
        visibility: hidden;
      }
      margin-bottom: 20px;
      margin-right: 20px;
      div {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: center;
        font-size: 26px;
        padding: 15px 10px;
        width: 160px;
        box-sizing: border-box;
        &:nth-of-type(4n + 0) {
        }
        border: 1px solid #ccc; /* no */
        [data-dpr="2"] & {
          border: 2px solid #ccc; /* no */
        }
        [data-dpr="3"] & {
          border: 3px solid #ccc; /* no */
        }
      }
    }
  }
}
</style>
