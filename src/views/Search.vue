<template>
  <section class="search">
    <mcom-header
      :title="'搜索'"
      :isSearch="false"
      :isBackground="true"
    ></mcom-header>
  </section>
</template>

<script>
export default {
  components: {
    mcomHeader: () => import("@/components/Header.vue")
  }
};
</script>

<style></style>
