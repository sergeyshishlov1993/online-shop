<template>
  <!-- -------------------------------pictures product ------------------- -->

  <img-product :srcImg="srcImg" />

  <!-- -------------------------------about product ------------------- -->

  <div class="wrapper__description">
    <!-- -------------------------------name and price product ------------------- -->

    <ui-title-f-z26 class="black">{{ props.productCart.title }}</ui-title-f-z26>

    <ui-title-f-z20 class="yellow mt-24">{{
      props.productCart.price
    }}</ui-title-f-z20>

    <!-- ----------------------------- average ------------------------------- -->
    <div class="wrapper__star">
      <ui-star-white
        v-for="(star, index) in 5"
        :key="star"
        :class="{ grade: index + 1 <= calculateAverageScore }"
        class="mt-70 mr-10"
      ></ui-star-white>

      <ui-title-f-z16 class="black ml-13">1 customer review</ui-title-f-z16>
    </div>

    <!-- ----------------------------- description product ------------------------------- -->
    <ui-title-f-z16-f-w400 class="black mt-18 grey"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
      consequat sed eu felis.
    </ui-title-f-z16-f-w400>

    <div class="wrapper__add-cart mt-48">
      <!-- ------------------counter--------------------------------------- -->

      <ui-counter
        @change-counter-value="(counterValue) => changeCounter(counterValue)"
      >
        <ui-title-f-z16 class="black">{{ counter }}</ui-title-f-z16>
      </ui-counter>

      <!-- ----------------------add cart----------------------------------- -->
      <ui-button class="btn__cart" @click="getProductToCart">
        <ui-title-f-z16 class="black center">ADD TO CART</ui-title-f-z16>
      </ui-button>
    </div>
    <!-- ---------------------- social media ----------------------------------->

    <social-link />

    <!-- ---------------------- articles and categories --------------------- -->
    <div class="wrapper__categories mt-59">
      <categories-product :title="'SKU:'" :value="'12'" />
      <categories-product :title="'Categories:'" :value="'Fashion, Style'" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useItemStor } from "@/stores/fakeData";
import { useCartData } from "@/stores/cartData";

import UiTitleFZ16 from "@/components/Title/UiTitleFZ16.vue";
import UiTitleFZ16FW400 from "@/components/Title/UiTitleFZ16FW400.vue";
import UiTitleFZ20 from "@/components/Title/UiTitleFZ20.vue";
import UiTitleFZ26 from "@/components/Title/UiTitleFZ26.vue";
import UiButton from "@/components/Ui-Components/UiButton.vue";
import UiStarWhite from "@/components/Ui-Icon/UiStarWhite.vue";

import SocialLink from "@/views/TheAboutProduct/components/SocialLink.vue";
import ImgProduct from "@/views/TheAboutProduct/components/ImgProduct.vue";
import CategoriesProduct from "@/views/TheAboutProduct/components/CategoriesProduct.vue";
import UiCounter from "@/components/Ui-Components/UiCounter.vue";

const route = useRoute();

const { itemArr } = useItemStor(); //get arrays from store

const { cartData } = useCartData();

const currentRoute = route.params.id;

const props = defineProps({
  productCart: {
    type: Object,
    required: true,
  },
});

const calculateAverageScore = computed(() => {
  let currentGrate = 0;

  const { reviews } = itemArr[currentRoute];

  reviews.forEach((item) => (currentGrate += item.gradeStar));

  return (currentGrate / reviews.length).toFixed();
});
//calculate an average rating based on the ratings we receive in reviews

const counter = ref(1); //variable for counting ordered goods

const srcImg = require(`@/assets/img/firstScrin/Card/${props.productCart.src}`);

function changeCounter(counterValue) {
  counter.value = counterValue;
}

function getProductToCart() {
  for (let i = 0; i < counter.value; i++) {
    cartData.cart.push(itemArr[currentRoute]);
  }

  itemArr[currentRoute].quantity += counter.value; //add quantity of product object

  cartData.showDoneModal = true; //show a modal window for successful adding to cart

  counter.value = 1;
}

function hideModalWindow() {
  setInterval(() => {
    return (cartData.showDoneModal = false);
  }, 5000);
} //hide the modal window

hideModalWindow();
</script>

<style lang="scss" scoped>
.wrapper__star {
  display: flex;
  align-items: baseline;
}

.wrapper__add-cart {
  display: flex;
}
.btn__cart {
  padding: 16px 0;
  width: 360px;
  height: 53px;
  border: 1px solid black;
  border-radius: 6px;
}

.grade {
  fill: black;
}
</style>
