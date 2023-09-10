<template>
  <div class="wrapper__shoping-bag">
    <!-- ----------header-cart-title------------ -->

    <div class="wrapper__close">
      <ui-title-f-z16-f-w400 class="black">Shopping bag</ui-title-f-z16-f-w400>

      <ui-btn-close @click="cartData.showCartBlock = false" />
    </div>

    <ui-title-f-z12 class="mt-18"
      >{{ cartData.cart.length }} items</ui-title-f-z12
    >
    <!-- ----------order-card------------ -->

    <the-bag-card-item
      v-for="(item, index) in removeDublicate"
      :key="item.src"
      :path="item.src"
      :title="item.title"
      :color="item.aditionalInformation.colours"
      :material="item.aditionalInformation.material"
      :price="item.price"
      :item="item"
      @remove-item-cart="removeItem(index)"
    />
    <!-- ----------footer-cart------------ -->

    <div class="order-amount mt-59">
      <div class="line">
        <ui-title-f-z16 class="black"
          >Subtotal ({{ cartData.cart.length }} items)</ui-title-f-z16
        >

        <ui-title-f-z16 class="black ml-88"
          >$ {{ calculationOfTheOrderAmount }}</ui-title-f-z16
        >
      </div>

      <ui-button class="border mt-18">VIEW CART</ui-button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useCartData } from "@/stores/cartData";

import UiTitleFZ16FW400 from "../Title/UiTitleFZ16FW400.vue";
import UiTitleFZ12 from "../Title/UiTitleFZ12.vue";
import TheBagCardItem from "./TheBagCardItem.vue";
import UiButton from "../Ui-Components/UiButton.vue";
import UiBtnClose from "../Ui-Components/UiBtnClose.vue";

const { cartData } = useCartData();

const removeDublicate = computed(() => {
  return [...new Set(cartData.cart)];
}); //convert the array to set to avoid render identical goods

function removeItem(index) {
  const itemToRemove = removeDublicate.value[index];

  const updatedCart = cartData.cart.filter(
    (item) => item.id !== itemToRemove.id
  );

  cartData.cart = updatedCart;
} //completely remove the item from the cart

const calculationOfTheOrderAmount = computed(() => {
  let result = 0;
  cartData.cart.forEach(
    (item) => (result += parseInt(item.price.replace(/[^,\d]/g, "")))
  );
  return result;
}); //calculate the total order amount
</script>

<style lang="scss" scoped>
.wrapper__shoping-bag {
  padding: 72px 36px 24px 36px;
  position: absolute;
  top: 0;
  right: -50px;
  width: 360px;
  min-height: 945px;
  border: 1px solid rgba(216, 216, 216, 1);
  background: var(--var-body-bg);
  z-index: 1;
}
.wrapper__close {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.order-amount {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.border {
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 1);
}
.line {
  position: relative;
  &::before {
    content: "";
    position: absolute;
    transform: translateX(-50px);
    top: -21px;
    width: 360px;
    border: 1px solid rgba(216, 216, 216, 1);
  }
}
</style>
