<template>
  <div class="author">
    <div class="left">
      <img :src="author.img" alt="" />
      <div>
        <span class="name">{{ author.nickname }}</span>
        <span class="time">{{ data.time }}</span>
      </div>
    </div>
    <div class="right">
      关注
    </div>
  </div>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      default: () => function() {}
    },
    data: {
      type: Object,
      default: () => function() {}
    }
  }
};
</script>

<style lang="less" scoped>
.author {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .left {
    display: flex;
    font-size: 26px;
    img {
      width: 80px;
      border: 1px solid #ccc;
      height: 80px;
      border-radius: 50%;
    }
    div {
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    span {
    }
  }
  .right {
    height: 50px;
    min-width: 100px;
    background: #f00;
    color: #fff;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    padding: 5px 15px;
    &.active {
      background: none;
      border: 1px solid #ccc;
      color: #989595;
    }
  }
}
</style>
