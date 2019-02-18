<template>
  <swiper :options="swiperOption" ref="mySwiper" v-if="data.length">
    <!-- slides -->
    <swiper-slide :key="index" v-for="(item, index) in data">
      <a target="_blank" :href="item.url">
        <img :src="item.img" alt="" />
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    
    <div class="swiper-pagination" slot="pagination"></div>
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar" slot="scrollbar"></div> -->
  </swiper>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  props: {
    data: {
      type: Array
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoplay: 3000,
        pagination: {
          el: ".swiper-pagination",
          type: 'fraction',
        },
          loop:true

      }
    };
  }
};
</script>

<style lang="less" scoped>
.swiper-slide {
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.swiper-pagination /deep/ .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
}
.page{
    position:absolute;
    bottom:0;
    width:100%;
  color:#fff;
}
.swiper-pagination{
  color:#fff;
  font-size:35px;
}
</style>
