<template>
  <div class="nav">
    <router-link
      v-for="(item, index) in list"
      :key="index"
      :to="item.link"
      class="link"
      active-class=""
    >
      {{ item.name }}
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Head",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },
};
</script>

<style scoped lang="less">
.nav {
  background: #00c3ff;
  box-sizing: border-box;
  .link {
    color: #fff;
    line-height: 2.4rem;
    padding: 1.5rem 1.5rem;
    text-decoration: none;
    display: inline-block;
    font-size: 1.2rem;
    transition: all .2s;
  }
  .link:hover {
    background: rgba(255, 255, 255, 0.59);
  }
}
.router-link-exact-active {
  background: rgba(255, 255, 255, 0.3);
}
</style>
