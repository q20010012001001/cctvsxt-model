<template>
  <section class="details">
    <div class="wrapper" ref="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
import BScroll from "better-scroll";
export default {
  props: {
    scrollevent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    initBSroll() {
      let probeType = this.scrollevent ? 3 : 0;

      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType,
        bounce: {
          top: false,
          bottom: false
        }
      });
      if (this.scrollevent) {
        this.scroll.on("scroll", obj => {
          this.$emit("scroll", obj.y);
        });
      }
    },
    refresh() {
      // console.log(this.scroll);
      this.scroll && this.scroll.refresh();
    }
  },
  mounted() {
    this.initBSroll();
  }
};
</script>

<style lang="less" scoped>
.wrapper,
.details {
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
