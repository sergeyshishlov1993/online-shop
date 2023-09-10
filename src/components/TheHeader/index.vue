<template>
  <header>
    <div
      class="wrapper"
      :class="{ 'wrapper__border-none': currentRoute == 'home' }"
    >
      <router-link to="/">
        <ui-logo />
      </router-link>

      <div class="navbar">
        <the-nav-bar :current-route="currentRoute" />

        <span>
          <ui-vertical-line />
        </span>

        <div class="wrapper__icon">
          <the-icon-btn-nav-bar />
        </div>
      </div>
    </div>

    <added-to-cart v-if="cartData.showDoneModal" />

    <the-shopping-bag v-if="cartData.showCartBlock" />
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useCartData } from "@/stores/cartData";

import UiLogo from "../Ui-Icon/UiLogo.vue";
import UiVerticalLine from "../Ui-Icon/UiVerticalLine.vue";

import TheNavBar from "./components/TheNavBar.vue";
import TheIconBtnNavBar from "./components/TheIconBtnNavBar.vue";
import AddedToCart from "./components/AddedToCart.vue";

import TheShoppingBag from "../TheShoppingBag/TheShoppingBag.vue";

const route = useRoute();
const { cartData } = useCartData();

const currentRoute = computed(() => {
  return route.name;
});

const test = ref(true);
</script>

<style lang="scss" scoped>
header {
  position: relative;
  padding-top: 64px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(216, 216, 216, 1);

  &__border-none {
    border: none;
  }

  span {
    margin-right: 48px;
    margin-left: 48px;
  }
}
.navbar {
  display: flex;
  align-items: center;
}
</style>
