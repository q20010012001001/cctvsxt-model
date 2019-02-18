<template>
  <section class="header" :class="{ active: isBackground }">
    <div v-if="isReturn" @click="returnclick" class="return">
      <span class="iconfont">&#xe656;</span>
    </div>
    <div class="title">{{ title }}</div>
    <div class="search" v-if="isSearch">
      <router-link tag="span" class="iconfont" to="/search">
        &#xe618;
      </router-link>
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
.header {
  &.active {
    border-bottom: 1px solid rgb(239, 231, 231);
    [data-dpr="2"] & {
      border-bottom: 2px solid rgb(239, 231, 231);
    }
    [data-dpr="3"] & {
      border-bottom: 3px solid rgb(239, 231, 231);
    }
    background: #fff;
    .title,
    .search,
    .return {
      color: #000;
    }
  }
  position: relative;
  width: 100%;
  height: 80px;
  background: #f00;
  .title {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #fff;
  }
  .search {
    position: absolute;
    right: 30px;
    bottom: 0;
    top: 0;
    margin: auto;
    color: #fff;
    line-height: 80px;
    span {
      font-size: 40px;
    }
  }
  .return {
    position: absolute;
    left: 30px;
    bottom: 0;
    top: 0;
    margin: auto;
    color: #fff;
    line-height: 80px;
    span {
      font-size: 40px;
    }
  }
}
</style>
