<template>
  <section class="header" :class="{ active: isBackground }">
    <div class="f">
      <!-- <div v-if="isReturn" @click="returnclick" class="return">
      <span class="iconfont">&#xe656;</span>
    </div> -->
      <!-- <div class="title">{{ title }}</div> -->
      <!-- <div class="search" v-if="isSearch">
      <router-link tag="span" class="iconfont" to="/search">
        &#xe618;
      </router-link>
    </div> -->

      <!-- 返回按钮 -->

      <!-- 搜索框 -->
      <div class="searchipt">
        <span class="iconfont img">&#xe618;</span>
        <input placeholder="公务员可以考研吗" type="text" />
        <span class="iconfont img2">&#xe68f;</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      default: "首页",
      type: String
    },
    isSearch: {
      default: true,
      type: Boolean
    },
    isReturn: {
      default: true,
      type: Boolean
    },
    isBackground: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    returnclick() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
// .header {
//   &.active {
//     border-bottom: 1px solid rgb(239, 231, 231);
//     [data-dpr="2"] & {
//       border-bottom: 2px solid rgb(239, 231, 231);
//     }
//     [data-dpr="3"] & {
//       border-bottom: 3px solid rgb(239, 231, 231);
//     }
//     background: #fff;
//     .title,
//     .search,
//     .return {
//       color: #000;
//     }
//   }
//   position: relative;
//   width: 100%;
//   height: 80px;
//   background: #f00;
//   .title {
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     font-size: 30px;
//     color: #fff;
//   }
//   .search {
//     position: absolute;
//     right: 30px;
//     bottom: 0;
//     top: 0;
//     margin: auto;
//     color: #fff;
//     line-height: 80px;
//     span {
//       font-size: 40px;
//     }
//   }
//   .return {
//     position: absolute;
//     left: 30px;
//     bottom: 0;
//     top: 0;
//     margin: auto;
//     color: #fff;
//     line-height: 80px;
//     span {
//       font-size: 40px;
//     }
//   }
// }

.header {
  width: 100%;
  height: 80px;
  background: #f00;
}
.searchipt {
  flex: 1;
  background: #fff;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  .img {
    margin-left: 25px;
    font-size: 25px;
    color: #000;
    margin-right: 10px;
    // width: 30px;
    // height: 100%;
    // display: flex;
    // align-items: center;
  }
  .img2 {
    font-size: 12px;
    // [data-dpr="2"] & {
    //   font-size: 14px;
    // }
    // [data-dpr="3"] & {
    //   font-size: 16px;
    // }
    color: #fff;
    width: 25px;
    height: 25px;
    background: rgb(112, 111, 111);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    margin-left: 15px;
  }
  input {
    flex: 1;
    outline: none;
    border: 0;
    height: 100%;
    font-size: 28px;
  }
  height: 100%;
}
.f {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  padding: 10px 0;
  align-items: center;
}
</style>
