<template>
  <div>
    <nav-bar :list="nav" />
    <router-view />
  </div>
</template>

<script>
import NavBar from "components/public/Head";

const nav = new Map([
  ["home", { name: "主页", link: "/" }],
  ["editor", { name: "JSON编辑器", link: "/Editor" }],
  ["ui", { name: "我的ui库组件", link: "/ui" }],
  ["memo", { name: "备忘录", link: "/memo" }],
]);
export default {
  name: "index",
  components: {
    NavBar,
  },
  data() {
    return {
      nav: Object.fromEntries(nav),
    };
  },
};
</script>

<style scoped></style>
