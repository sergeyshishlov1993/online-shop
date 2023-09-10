<template>
  <div class="wrapper">
    <!-- -------------------------------wrapper------------------- -->

    <!-- in this component we pass props with information about the product, an array of photos and description, price, title - -->

    <about-product :productCart="productCart" />
  </div>

  <!-- -------------------------------active tab ------------------- -->

  <div class="wrapper__tabs">
    <the-tabs
      :names="calculatesTheNumberOfReviews"
      :selectedTab="selectedTab"
      @changeTab="changeTab"
    />
  </div>

  <!-- -------------------------------show the desired content depending on the selected tab ------------------- -->
  <ui-tabs-text :item="currentTabsItem" :selectedTab="selectedTab">
  </ui-tabs-text>

  <!-- -------------------------------recomended block ------------------- -->
  <similar-items class="mt-96" />
</template>

<script setup>
import { ref, computed } from "vue";

import { useItemStor } from "@/stores/fakeData";
import { useRoute } from "vue-router";

import AboutProduct from "./components/AboutProduct.vue";
import TheTabs from "@/components/TheTabs.vue";
import UiTabsText from "@/components/Tab/UiTabsText.vue";

import SimilarItems from "./components/SimilarItems.vue";

const { tabs, itemArr } = useItemStor();
const route = useRoute();
const currentRoute = route.params.id;

const currentTabsItem = itemArr[currentRoute]; //-data about the current product array of objects -

const selectedTab = ref("Description"); // -tab selected by default -

const calculatesTheNumberOfReviews = computed(() => {
  return tabs.map((el) => {
    if (el.name === "Reviews") {
      return {
        ...el,
        label: `Reviews (${itemArr[currentRoute].reviews.length})`,
      };
    } else {
      return el;
    }
  });
}); // - calculates the number of reviews --

const productCart = computed(() => {
  const indexSrc = itemArr[currentRoute];
  return indexSrc;
}); //calculate the dynamic path to the image of the current route--

function changeTab(tabName) {
  return (selectedTab.value = tabName);
} // --change the current tab --
</script>

<style lang="scss" scoped>
.wrapper {
  padding-top: 128px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px;

  &__tabs {
    position: relative;
    padding: 96px 0 34px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
  }
}
</style>
