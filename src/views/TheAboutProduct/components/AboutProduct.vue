<template>
  <!-- -------------------------------pictures product ------------------- -->

  <div class="wrapper__img">
    <img :src="srcImg" id="mainImg" alt="" />
    <img :src="srcImg" alt="" />
    <img :src="srcImg" alt="" />
    <img :src="srcImg" alt="" />
    <img :src="srcImg" alt="" />
  </div>

  <!-- -------------------------------about product ------------------- -->

  <div class="wrapper__description">
    <!-- -------------------------------name and price product ------------------- -->

    <ui-title-f-z26 class="black">{{ props.productCart.title }}</ui-title-f-z26>
    <ui-title-f-z20 class="yellow mt-24">{{
      props.productCart.price
    }}</ui-title-f-z20>

    <!-- ----------------------------- average ------------------------------- -->
    <div class="wrapper__star">
      <ui-star-icon
        v-for="star in 5"
        :key="star"
        class="mt-70 mr-10"
      ></ui-star-icon>
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

      <div class="counter mr-23">
        <button @click="counter !== 0 ? counter-- : counter">-</button>

        <ui-title-f-z16 class="black">{{ counter }}</ui-title-f-z16>

        <button @click="counter++">+</button>
      </div>

      <!-- ----------------------add cart----------------------------------- -->
      <ui-button class="btn__cart" @click="getProductToCart">
        <ui-title-f-z16 class="black center">ADD TO CART</ui-title-f-z16>
      </ui-button>
    </div>

    <social-link />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useItemStor } from "@/stores/fakeData";

import UiTitleFZ16 from "@/components/Title/UiTitleFZ16.vue";
import UiTitleFZ16FW400 from "@/components/Title/UiTitleFZ16FW400.vue";
import UiTitleFZ20 from "@/components/Title/UiTitleFZ20.vue";
import UiTitleFZ26 from "@/components/Title/UiTitleFZ26.vue";
import UiButton from "@/components/Ui-Components/UiButton.vue";
import UiStarIcon from "@/components/Ui-Icon/UiStarIcon.vue";
import SocialLink from "@/views/TheAboutProduct/components/SocialLink.vue";

const route = useRoute();
const store = useItemStor();

const props = defineProps({
  productCart: {
    type: Object,
    required: true,
  },
});

const counter = ref(1);
const srcImg = require(`@/assets/img/firstScrin/Card/${props.productCart.src}`);

function getProductToCart() {
  const arrItem = store.itemArr;
  for (let i = 0; i < counter.value; i++) {
    store.cart.push(arrItem[route.params.id]);
  }
  counter.value = 1;
}
</script>

<style lang="scss" scoped>
.wrapper__img {
  display: grid;
  grid-template-columns: 120px 540px;
  grid-template-rows: repeat(4, 120px);
  gap: 40px;
  img {
    width: 100%;
    height: 100%;
  }
}
.wrapper__star {
  display: flex;
  align-items: baseline;
}
#mainImg {
  grid-row: 1/5;
  grid-column: 2;
}
.wrapper__add-cart {
  display: flex;
}
.counter {
  width: 102px;
  height: 53px;
  background: rgba(239, 239, 239, 1);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.btn__cart {
  padding: 16px 0;
  width: 360px;
  height: 53px;
  border: 1px solid black;
  border-radius: 6px;
}

button {
  height: 27px;
  width: 10px;
}
</style>
