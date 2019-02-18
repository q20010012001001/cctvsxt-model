<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- </div> -->
    <!-- <transition :name="transitionName"> -->
      <keep-alive>
        <router-view class="transitionBody" />
      </keep-alive>
    <!-- </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route() {
      // const arr = ['NewsPage', '/jokePage', '/jokePage', '/myPage']
      // const arr = [];
      // const compare = arr.indexOf(to.path) > arr.indexOf(from.path);
      // const compare = arr.includes(to.path);
      // if (to.path == "/home/10012") {
      //   this.transitionName = "fold";
      // } else {
      //   this.transitionName = compare ? "transitionLeft" : "transitionRight";
      // }
      this.transitionName = "fold";
    }
  }
};
</script>

<style lang="less">
.transitionBody {
  transition: all 0.4s ease-out; /*定义动画的时间和过渡效果*/
}
.transitionLeft-enter,
.transitionRight-leave-active {
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
  /*当左滑进入右滑进入过渡动画*/
}
.transitionLeft-leave-active,
.transitionRight-enter {
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}

.fold-enter-active {
  animation-name: fold-in;
  animation-duration: 0.5s;
}
.fold-leave-active {
  animation-name: fold-out;
  animation-duration: 0.5s;
}
@keyframes fold-in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
@keyframes fold-out {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

body,
html {
  height: 100%;
}
#app {
  height: 100%;
  .home {
    height: 100%;
  }
}
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
