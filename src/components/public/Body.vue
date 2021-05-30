<template>
  <div>
    <nav-bar />
  </div>
</template>

<script>
const nav = new Map([
  ["home", { name: "主页", link: "/" }],
  ["editor", { name: "JSON编辑器", link: "/Editor" }],
]);
import NavBar from "@/components/public/Head";
export default {
  name: "Body",
  components: {
    NavBar
  },
  data() {
    return {
      nav: Object.fromEntries(nav),
    };
  },
};
</script>

<style scoped>

</style>
