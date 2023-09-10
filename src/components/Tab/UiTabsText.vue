<template>
  <!-- --------------------- product__description -------------- -->

  <div class="product__description" v-if="props.selectedTab === 'Description'">
    <ui-title-f-z16-f-w400 class="black mt-40">
      {{ item.productDescription }}
    </ui-title-f-z16-f-w400>
  </div>

  <!-- ------------------- Aditional-information--------- -->

  <div
    class="Aditional-information mt-40"
    v-else-if="props.selectedTab === 'Aditional information'"
  >
    <!-- ------------ product information -------- -->

    <ui-title-f-z16-f-w400 class="mt-10"
      >Weight:
      <span class="grey">
        {{ item.aditionalInformation.weight }}
      </span></ui-title-f-z16-f-w400
    >

    <ui-title-f-z16-f-w400 class="mt-10"
      >Dimentions:
      <span class="grey">
        {{ item.aditionalInformation.dimentions }}
      </span>
    </ui-title-f-z16-f-w400>

    <ui-title-f-z16-f-w400 class="mt-10"
      >Colours:
      <span class="grey">
        {{ item.aditionalInformation.colours }}
      </span>
    </ui-title-f-z16-f-w400>

    <ui-title-f-z16-f-w400 class="mt-10"
      >Material:
      <span class="grey">
        {{ item.aditionalInformation.material }}
      </span>
    </ui-title-f-z16-f-w400>
  </div>

  <!-- ------------------- reviews--------- -->

  <div v-else class="reviews">
    <div>
      <!-- ------------------- heading that counts the number of reviews --------- -->
      <ui-title-f-z20-f-w400
        >{{ item.reviews.length }} Reviews for lira earings
      </ui-title-f-z20-f-w400>

      <!-- ------------------- iteration over an array of objects for rendering reviews --------- -->
      <the-reviews
        v-for="review in item.reviews"
        :key="review.date"
        :name="review.namePersone"
        :date="review.date"
        :stars="review.stars"
        :grade="review.gradeStar"
        :text="review.reviewText"
      >
      </the-reviews>
    </div>

    <!-- ------------------- Feedback form component --------- -->
    <the-reviews-form />
  </div>
</template>

<script setup>
import UiTitleFZ20FW400 from "../Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16FW400 from "../Title/UiTitleFZ16FW400.vue";
import TheReviews from "@/components/TheReviews.vue";
import TheReviewsForm from "@/components/TheReviewsForm.vue";

const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },

  item: {
    type: Object,
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
