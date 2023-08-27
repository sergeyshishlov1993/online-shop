<template>
  <div class="slider">
    <ui-title-f-z33>Gold big hoops </ui-title-f-z33>
    <ui-title-f-z20 class="mt-18">$ 68,00</ui-title-f-z20>
    <ui-button class="mt-48">
      <ui-title-f-z20 class="center">VIEW PRODUCT</ui-title-f-z20>
    </ui-button>
    <div class="slider__circle">
      <ui-circle-button class="ml-13 active" />
      <ui-circle-button class="ml-13" />
      <ui-circle-button class="ml-13" />
      <ui-circle-button class="ml-13" />
      <ui-circle-button class="ml-13" />
    </div>
  </div>
</template>

<script setup>
import UiTitleFZ33 from "./Ui/Title/UiTitleFZ33.vue";
import UiTitleFZ20 from "./Ui/Title/UiTitleFZ20.vue";
import UiButton from "./Ui/UiButton.vue";
import UiCircleButton from "./Ui/UiCircleButton.vue";
</script>

<style lang="scss" scoped>
.slider {
  position: relative;
  margin-top: 16px;
  padding: 226px 570px 24px 39px;
  background-image: url("../assets/img/firstScrin/FirstScrin.png");
  min-height: 646px;
  &__circle {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 26px;
    left: 50%;
    transform: translateY(-50%);
  }
}
</style>
