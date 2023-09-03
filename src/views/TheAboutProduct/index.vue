<template>
  <div class="wrapper">
    <!-- -------------------------------wrapper------------------- -->

    <!-- in this component we pass props with information about the product, an array of photos and description, price, title - -->

    <about-product :productCart="productCart" />
  </div>

  <!-- -------------------------------active tab ------------------- -->

  <div class="wrapper__tabs">
    <the-tabs
      :names="tabsCounter"
      :selectedTab="selectedTab"
      @changeTab="changeTab"
    />
  </div>

  <!-- -------------------------------show the desired content depending on the selected tab ------------------- -->
  <ui-tabs-text :selectedTab="selectedTab"></ui-tabs-text>

  <!-- -------------------------------recomended block ------------------- -->

  <div class="wrapper__similar-items"></div>
</template>

<script setup>
import { useItemStor } from "@/stores/fakeData";
import { useRoute } from "vue-router";
import AboutProduct from "./components/AboutProduct.vue";

import TheTabs from "@/components/TheTabs.vue";
import UiTabsText from "@/components/Tab/UiTabsText.vue";

import { ref, computed } from "vue";

const store = useItemStor();
const route = useRoute();

const tabs = store.tabs;

const tabsCounter = computed(() => {
  return tabs.map((el) => {
    if (el.name === "Reviews") {
      return { ...el, label: `Reviews (${reviews.length})` };
    } else {
      return el;
    }
  });
});

const productCart = computed(() => {
  const indexSrc = store.itemArr[route.params.id];
  return indexSrc;
});

const reviews = store.reviews;

const selectedTab = ref("Description");

function changeTab(tabName) {
  return (selectedTab.value = tabName);
}
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
