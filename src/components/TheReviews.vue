<template>
  <div class="wrapper-reviews">
    <ui-title-f-z20-f-w400
      >{{ props.reviews.length }} Reviews for lira
      earings</ui-title-f-z20-f-w400
    >
    <div class="wrapper__person-data">
      <ui-title-f-z20-f-w400 class="mt-70">{{
        props.name
      }}</ui-title-f-z20-f-w400>
      <span>
        <ui-title-f-z14 class="ml-13">
          {{ props.date }}
        </ui-title-f-z14>
      </span>
    </div>
    <div class="mt-16">
      <ui-star-white v-for="star in props.stars" :key="star"></ui-star-white>
    </div>
    <ui-title-f-z16-f-w400 class="mt-24 grey">
      {{ props.text }}
    </ui-title-f-z16-f-w400>
  </div>
</template>

<script setup>
import UiTitleFZ14 from "./Ui/Title/UiTitleFZ14.vue";
import UiTitleFZ20FW400 from "./Ui/Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16FW400 from "./Ui/Title/UiTitleFZ20FW400.vue";
import UiStarWhite from "./Ui/UiIcon/UiStarWhite.vue";

const props = defineProps({
  name: {
    type: String,
    requred: true,
  },
  date: {
    type: String,
    requred: true,
  },
  stars: {
    type: Number,
    requred: true,
  },
  text: {
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
.wrapper-reviews {
  padding: 42px 87px 0 0;
  width: 580px;
  display: flex;
  flex-direction: column;
}
.wrapper__person-data {
  display: flex;
  align-items: baseline;
}
</style>
