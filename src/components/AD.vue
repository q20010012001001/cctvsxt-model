<template>
  <div class="ad">
    <ul>
      <li :key="index" v-for="(item, index) in ad">
        <img :src="item.img" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    ad: {
      type: Array,
      default: () => function() {}
    }
  }
};
</script>

<style lang="less" scoped></style>
