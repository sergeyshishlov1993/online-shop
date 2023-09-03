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
    <div>
      <ui-title-f-z20-f-w400
        >{{ reviews.length }} Reviews for lira earings</ui-title-f-z20-f-w400
      >
      <the-reviews
        v-for="review in reviews"
        :key="review.date"
        :name="review.namePersone"
        :date="review.date"
        :stars="review.stars"
        :grade="review.gradeStar"
        :text="review.reviewText"
      >
      </the-reviews>
    </div>
    <the-reviews-form />
  </div>
</template>

<script setup>
import { useItemStor } from "@/stores/fakeData";
import UiTitleFZ20FW400 from "../Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16FW400 from "../Title/UiTitleFZ16FW400.vue";
import TheReviews from "@/components/TheReviews.vue";
import TheReviewsForm from "@/components/TheReviewsForm.vue";

const stor = useItemStor();
const reviews = stor.reviews;

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.meaning {
  color: linear-gradient(0deg, #9f9c9c, #a7a5a5);
}
.reviews {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
</style>
