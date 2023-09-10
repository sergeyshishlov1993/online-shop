<template>
  <ul>
    <li class="wrapper__item center">
      <ui-nav-bar-link class="ml-64">
        <router-link to="/shop">Shop</router-link>
      </ui-nav-bar-link>

      <span
        class="border mt-18"
        v-if="currentRoute === 'shop' || currentRoute === 'about'"
      ></span>
    </li>

    <li class="wrapper__item center">
      <ui-nav-bar-link class="ml-64">
        <router-link to="/blog"> Blog </router-link>
      </ui-nav-bar-link>

      <span v-if="currentRoute === 'blog'" class="border mt-18"></span>
    </li>

    <li class="wrapper__item center">
      <ui-nav-bar-link class="ml-64">
        <router-link to="/our-story">Our Story</router-link>
      </ui-nav-bar-link>

      <span class="border mt-18" v-if="currentRoute === 'our-story'"></span>
    </li>
  </ul>
</template>

<script setup>
import UiNavBarLink from "../../Ui-Components/UiNavBarLink.vue";

const props = defineProps({
  currentRoute: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;
  display: flex;
}
a {
  color: inherit;
}
.wrapper__item {
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.border {
  width: 40px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
