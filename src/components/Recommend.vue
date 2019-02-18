<template>
  <div class="Recommend">
    <ul>
      <li :key="index" v-for="(item, index) in recommend">
        <div class="oneImage">
          <div class="wrapper">
            <div class="left">
              <div class="title">
                <template v-if="item.type == 0">
                  <router-link to="/video" class="lineClamp5">
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 3">
                  <router-link to="/audio" class="lineClamp5">
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 1">
                  <router-link
                    :to="{
                      path: '/article',
                      query: { id: item.id, uid: item.uid }
                    }"
                    class="lineClamp5"
                  >
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 2">
                  <router-link to="/album" class="lineClamp5">
                    {{ item.title }}
                  </router-link>
                </template>
                <template v-else-if="item.type == 4">
                  <router-link to="/video" class="lineClamp5">
                    {{ item.title }}
                  </router-link>
                </template>
              </div>
            </div>
            <div class="right">
              <a>
                <img :src="item.img" alt="" />
                <span v-if="item.type == 0" class="write iconfont"
                  >&#xe667;</span
                >
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array,
      default: () => function() {}
    }
  }
};
</script>

<style lang="less" scoped>
// 相关推荐
.Recommend li {
  padding: 40px 0;
  // margin: 0 40px;
  border-bottom: 1px solid #d1d1d1;
}
.Recommend li .oneImage {
  .wrapper {
    display: flex;
    align-items: center;
  }
  .left {
    display: flex;
    flex: 1;
    align-items: center;
  }
}
.Recommend li .oneImage .right {
  margin-left: 0.3rem;
  width: 3rem;
  height: 1.8rem;
  overflow: hidden;
  position: relative;
}
.Recommend li .oneImage .right a {
  width: 100%;
  height: 100%;
}
.Recommend li .oneImage .right img {
  width: 100%;
}
.Recommend li .oneImage .right .write {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
  font-size: 0.6rem;
  color: #fff;
}
.Recommend li .oneImage .left .title {
  margin-bottom: 0.2rem;
  width: 100%;
  height: 100%;
}
.Recommend li .title {
  font-size: 0.7rem;
  font-weight: bold;
  color: #333;
}
.Recommend li .title a {
  color: #333;
  width: 100%;
  height: 100%;
  display: block;
}
</style>
