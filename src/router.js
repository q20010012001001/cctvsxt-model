import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "*",
      redirect: "/home"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/Search.vue")
    },
    {
      path: "/plus",
      name: "plus",
      component: () => import("./views/Plus.vue")
    },
    {
      path: "/article",
      name: "article",
      component: () => import("./views/Article.vue")
    },
    {
      path: "/audio",
      name: "audio",
      component: () => import("./views/Audio.vue")
    },
    {
      path: "/video",
      name: "video",
      component: () => import("./views/Video.vue")
    },
    {
      path: "/album",
      name: "album",
      component: () => import("./views/Album.vue")
    },
    {
      path: "/author",
      name: "author",
      component: () => import("./views/Author.vue")
    }
  ]
});
