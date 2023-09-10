<template>
  <button class="ml-39">
    <UiSerch />
  </button>

  <button @click="cartData.showCartBlock = true" class="ml-39">
    <UiShoppingBag />
  </button>

  <button class="ml-39">
    <UiPerson />
  </button>
</template>

<script setup>
import { useCartData } from "@/stores/cartData";
import UiSerch from "@/components/Ui-Icon/UiSearchIcon.vue";
import UiShoppingBag from "@/components/Ui-Icon/UiShoppingBagIcon.vue";
import UiPerson from "@/components/Ui-Icon/UiPersonIcon.vue";

const { cartData } = useCartData();
</script>

<style lang="scss" scoped></style>
