<template>
  <div>
    <ui-title-f-z26 class="black">Similar Items</ui-title-f-z26>

    <div class="wrapper__similar-items mt-48">
      <!-- -------------render random cards on the page---- -->
      <ui-card-item
        v-for="card in randomItemCard"
        :key="card.price"
        :path="card.src"
        :title="card.title"
        :subtitle="card.price"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useItemStor } from "@/stores/fakeData";

import UiCardItem from "@/components/Ui-Components/UiCardItem.vue";
import UiTitleFZ26 from "@/components/Title/UiTitleFZ26.vue";

const { itemArr } = useItemStor();

function getRandomIndex() {
  const randomIndex = new Set();

  while (randomIndex.size < 3) {
    randomIndex.add(Math.floor(Math.random() * itemArr.length));
  }

  return Array.from(randomIndex);
}

const randomIndexArrayItem = getRandomIndex(); //get a random index of an array of cards and write it to an array and use set to make an array of unique indexes

function getRandomItemCard() {
  const result = [];
  for (let i = 0; i < randomIndexArrayItem.length; i++) {
    result.push(itemArr[randomIndexArrayItem[i]]);
  }
  return result;
}

const randomItemCard = getRandomItemCard(); //at each iteration we get a random card from the array
</script>

<style lang="scss" scoped>
.wrapper__similar-items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
