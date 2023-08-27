<template>
  <div class="wrapper">
    <ui-title-f-z33 class="black">Shop The Latest</ui-title-f-z33>
    <router-link to="/shop">
      <ui-title-f-z20 class="yellow">View All</ui-title-f-z20>
    </router-link>
  </div>
  <ui-wrapper-grid>
    <ui-card-item
      v-for="card in imgData"
      :key="card.price"
      :path="card.src"
      :title="card.title"
      :subtitle="card.price"
    ></ui-card-item>
  </ui-wrapper-grid>
</template>

<script setup>
import { useItemStor } from "@/stores/fakeData";
import UiTitleFZ20 from "./Ui/Title/UiTitleFZ20.vue";
import UiTitleFZ33 from "./Ui/Title/UiTitleFZ33.vue";
import UiCardItem from "./Ui/UiCardItem.vue";
import UiWrapperGrid from "@/components/Ui/UiWrapperGrid.vue";

const stor = useItemStor();

const imgData = stor.itemArr;
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
