<template>
  <div class="wrapper-reviews">
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
      <ui-star-white v-for="star in test" :key="star"></ui-star-white>
    </div>
    <ui-title-f-z16-f-w400 class="mt-24 grey">
      {{ props.text }}
    </ui-title-f-z16-f-w400>
  </div>
</template>

<script setup>
import { computed } from "vue";
import UiTitleFZ14 from "./Ui/Title/UiTitleFZ14.vue";
import UiTitleFZ20FW400 from "./Ui/Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16FW400 from "./Ui/Title/UiTitleFZ16FW400.vue";
import UiStarWhite from "./Ui/UiIcon/UiStarWhite.vue";
import UiStarIcon from "./Ui/UiIcon/UiStarIcon.vue";

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
  gradeStar: {
    type: Number,
    requred: true,
  },
});

const test = computed(() => {
  return props.stars;
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
