<template>
  <div class="product__description" v-if="props.selectedTab === 'Description'">
    <ui-title-f-z16-f-w400 class="black mt-40"
      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
      placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
      maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
      consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio, in
      molestie diam bibendum sed.</ui-title-f-z16-f-w400
    >
  </div>

  <div
    class="Aditional-information mt-40"
    v-else-if="props.selectedTab === 'Aditional information'"
  >
    <ui-title-f-z16-f-w400 class="mt-10"
      >Weight: <span class="grey">0.3 kg</span></ui-title-f-z16-f-w400
    >
    <ui-title-f-z16-f-w400 class="mt-10"
      >Dimentions: <span class="grey">15 x 10 x 1 cm</span>
    </ui-title-f-z16-f-w400>

    <ui-title-f-z16-f-w400 class="mt-10"
      >Colours: <span class="grey">Black, Browns, White</span>
    </ui-title-f-z16-f-w400>

    <ui-title-f-z16-f-w400 class="mt-10"
      >Material: <span class="grey">Metal</span>
    </ui-title-f-z16-f-w400>
  </div>

  <div v-else class="reviews">
    <the-reviews
      v-for="review in props.reviews"
      :key="review.date"
      :name="review.namePersone"
      :date="review.date"
      :stars="review.stars"
      :text="review.reviewText"
      :reviews="reviews"
    />
  </div>
</template>

<script setup>
import UiTitleFZ16FW400 from "../Title/UiTitleFZ16FW400.vue";
import TheReviews from "@/components/TheReviews.vue";
const props = defineProps({
  selectedTab: {
    type: String,
    requred: true,
  },
  reviews: {
    type: Array,
    requred: true,
  },
});
</script>

<style lang="scss" scoped>
.meaning {
  color: linear-gradient(0deg, #9f9c9c, #a7a5a5);
}
</style>
