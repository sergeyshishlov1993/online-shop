<template>
  <div class="wrapper-reviews">
    <!-- ----------------------wrapper------------------------------ -->

    <div class="wrapper__person-data">
      <!-- -----------------name persone----------------------- -->

      <ui-title-f-z20-f-w400 class="mt-70">{{
        props.name
      }}</ui-title-f-z20-f-w400>

      <!-- --------------------------id - Date-------------------------- -->
      <span>
        <ui-title-f-z14 class="ml-13">
          {{ props.date }}
        </ui-title-f-z14>
      </span>
    </div>

    <!-- -------------------------- star rating-------------------------- -->
    <div class="mt-16">
      <ui-star-white
        v-for="(star, index) in props.stars"
        :key="star"
        :class="{ grade: index + 1 <= props.grade }"
      ></ui-star-white>
    </div>

    <!-- -------------------------- review text-------------------------- -->
    <ui-title-f-z16-f-w400 class="mt-24 grey">
      {{ props.text }}
    </ui-title-f-z16-f-w400>

    <!-- ----------------------wrapper /------------------------------ -->
  </div>
</template>

<script setup>
import UiTitleFZ14 from "./Title/UiTitleFZ14.vue";
import UiTitleFZ20FW400 from "./Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16FW400 from "./Title/UiTitleFZ16FW400.vue";
import UiStarWhite from "./Ui-Icon/UiStarWhite.vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
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
.grade {
  fill: black;
}
</style>
