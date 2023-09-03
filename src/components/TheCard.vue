<template>
  <div class="wrapper">
    <ui-title-f-z33 class="black">Shop The Latest</ui-title-f-z33>

    <router-link to="/shop">
      <ui-title-f-z20 class="yellow">View All</ui-title-f-z20>
    </router-link>
  </div>

  <!-- -----------------item-product-card------------- -->
  <ui-wrapper-grid>
    <ui-card-item
      v-for="(card, id) in imgData"
      :key="card.price"
      :path="card.src"
      :title="card.title"
      :subtitle="card.price"
      @click="goToAboutCard(id)"
    ></ui-card-item>
  </ui-wrapper-grid>
</template>

<script setup>
import { useRouter } from "vue-router";
import { useItemStor } from "@/stores/fakeData";
import UiTitleFZ20 from "./Title/UiTitleFZ20.vue";
import UiTitleFZ33 from "./Title/UiTitleFZ33.vue";
import UiCardItem from "./Ui-Components/UiCardItem.vue";
import UiWrapperGrid from "@/components/Ui-Components/UiWrapperGrid.vue";

const stor = useItemStor();
const router = useRouter();

const imgData = stor.itemArr;

function goToAboutCard(id) {
  router.push(`/about-product/${id}`);
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
