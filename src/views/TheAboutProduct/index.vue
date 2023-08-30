<template>
  <div class="wrapper">
    <div class="wrapper__img">
      <img :src="getIndexItemCard" id="mainImg" alt="" />
      <img :src="getIndexItemCard" alt="" />
      <img :src="getIndexItemCard" alt="" />
      <img :src="getIndexItemCard" alt="" />
      <img :src="getIndexItemCard" alt="" />
    </div>

    <div class="wrapper__description">
      <ui-title-f-z26 class="black">Lira Earrings</ui-title-f-z26>
      <ui-title-f-z20 class="yellow mt-24">$ 20,00</ui-title-f-z20>

      <div class="wrapper__star">
        <ui-star-icon
          v-for="star in 5"
          :key="star"
          class="mt-70 mr-10"
        ></ui-star-icon>
        <ui-title-f-z16 class="black ml-13">1 customer review</ui-title-f-z16>
      </div>

      <ui-title-f-z16 class="black mt-18"
        >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.
      </ui-title-f-z16>

      <div class="wrapper__add-cart">
        <div class="counter">
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <ui-button>ADD TO CART</ui-button>
      </div>
    </div>
  </div>

  <div class="wrapper__tabs">
    <the-tabs
      :names="tabsCounter"
      :selectedTab="selectedTab"
      @changeTab="changeTab"
    />
  </div>

  <ui-tabs-text :selectedTab="selectedTab"></ui-tabs-text>

  <div class="wrapper__similar-items"></div>
</template>

<script setup>
import { useItemStor } from "@/stores/fakeData";
import { useRoute } from "vue-router";
import UiTitleFZ16 from "@/components/Ui/Title/UiTitleFZ16.vue";
import UiTitleFZ20 from "@/components/Ui/Title/UiTitleFZ20.vue";
import UiTitleFZ26 from "@/components/Ui/Title/UiTitleFZ26.vue";
import UiLetterIcon from "@/components/Ui/UiIcon/UiLetterIcon.vue";
import UiHeardIcon from "@/components/Ui/UiIcon/UiHeardIcon.vue";
import UiStarIcon from "@/components/Ui/UiIcon/UiStarIcon.vue";
import UiButton from "@/components/Ui/UiButton.vue";
import TheTabs from "@/components/TheTabs.vue";
import UiTabsText from "@/components/Ui/Tab/UiTabsText.vue";

import { ref, computed } from "vue";

const stor = useItemStor();
const route = useRoute();

const tabs = stor.tabs;

const tabsCounter = computed(() => {
  return tabs.map((el) => {
    if (el.name === "Reviews") {
      return { ...el, label: `Reviews (${reviews.length})` };
    } else {
      return el;
    }
  });
});

const getIndexItemCard = computed(() => {
  const indexSrc = stor.itemArr[route.params.id].src;
  return require(`../../assets/img/firstScrin//Card/${indexSrc}`);
});

const reviews = stor.reviews;

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
  &__img {
    display: grid;
    grid-template-columns: 120px 540px;
    grid-template-rows: repeat(4, 120px);
    gap: 40px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  &__star {
    display: flex;
    align-items: baseline;
  }
  #mainImg {
    grid-row: 1/5;
    grid-column: 2;
  }
  &__tabs {
    position: relative;
    padding: 96px 0 34px 0;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(216, 216, 216, 1);
  }
}
</style>
