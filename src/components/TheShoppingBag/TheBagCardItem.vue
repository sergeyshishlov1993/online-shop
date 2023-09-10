<template>
  <div class="card mt-48">
    <!-- -----------img product----------- -->

    <img :src="path" alt="#" />

    <div class="wrapper ml-30">
      <!-- -----------title && close button ----------- -->

      <div class="wrapper__close-btn">
        <ui-title-f-z14>{{ props.title }}</ui-title-f-z14>
        <ui-btn-close @click="removeItemCart" />
      </div>

      <!-- -----------characteristics && price product ----------- -->
      <ui-title-f-z14 class="mt-5"
        >{{ props.color }}/{{ props.material }}</ui-title-f-z14
      >
      <ui-title-f-z14 class="yellow mt-8">{{ props.price }}</ui-title-f-z14>

      <!-- -----------counter quantity of goods ----------- -->
      <div class="wrapper__counter mt-34">
        <ui-title-f-z12 class="yellow">QTY:</ui-title-f-z12>

        <!-- -----------counter ----------- -->
        <div class="counter mr-23">
          <button @click="decrementQuantity">
            <ui-title-f-z14>-</ui-title-f-z14>
          </button>

          <!-- -----------counter value ----------- -->
          <ui-title-f-z14>
            {{ cartData.cart[getIndex()].quantity }}</ui-title-f-z14
          >

          <button @click="incrementQuantity">
            <ui-title-f-z14>+</ui-title-f-z14>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useCartData } from "@/stores/cartData";

import UiTitleFZ14 from "../Title/UiTitleFZ14.vue";
import UiTitleFZ12 from "../Title/UiTitleFZ12.vue";
import UiBtnClose from "../Ui-Components/UiBtnClose.vue";

const { cartData } = useCartData();

const emit = defineEmits(["removeItemCart"]);
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },
  item: {
    type: Object,
    required: true,
  },
});
const path = require(`@/assets/img/firstScrin/Card/${props.path}`); //path to product card image

const counterCartValue = ref(cartData.cart[getIndex()].counter); // current product counter value

function getIndex() {
  return cartData.cart.findIndex((item) => item.id == props.item.id); //index of the current product in the array
}
let index = getIndex();

function removeItemCart() {
  emit("removeItemCart");
} //emit click event

function decrementQuantity() {
  counterCartValue.value !== 0
    ? counterCartValue.value--
    : counterCartValue.value; //decrease the counter value

  cartData.cart[index].quantity--; //decrease the counter value of the counter in the array of objects

  cartData.cart.splice(index, 1); //we delete an element when clicked, if there are several identical products, the product will be deleted and the quantities in the counter will decrease
}

function incrementQuantity() {
  counterCartValue.value++; //increase the counter value

  cartData.cart.push(cartData.cart[index]); //when clicked, we add an element to the array

  cartData.cart[index].quantity++; //increase the value of the counter in the array of objects
}
</script>

<style lang="scss" scoped>
img {
  width: 136px;
}

.card {
  display: flex;
  justify-content: space-between;
}

.wrapper {
  display: flex;
  flex-direction: column;
  &__close-btn {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__counter {
    display: flex;
    align-items: center;
  }
}
.counter {
  width: 60px;
  height: 0px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
