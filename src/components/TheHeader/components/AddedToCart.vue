<template>
  <div class="added-to-cart">
    <div class="text-cart-done">
      <ui-arrow-done />

      <ui-title-f-z16-f-w400 class="black ml-13"
        >The item added to your Shopping bag.</ui-title-f-z16-f-w400
      >
    </div>

    <ui-title-f-z16 class="yellow">VIEW CART</ui-title-f-z16>
  </div>
</template>

<script setup>
import UiTitleFZ16FW400 from "@/components/Title/UiTitleFZ16FW400.vue";
import UiArrowDone from "@/components/Ui-Icon/UiArrowDone.vue";
import UiTitleFZ16 from "@/components/Title/UiTitleFZ16.vue";
</script>

<style lang="scss" scoped>
.added-to-cart {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 24px 39px;
  border-top: 2px solid rgba(161, 138, 104, 1);
  background: linear-gradient(0deg, #efefef, #efefef);
}

.text-cart-done {
  display: flex;
  align-items: center;
}
</style>
