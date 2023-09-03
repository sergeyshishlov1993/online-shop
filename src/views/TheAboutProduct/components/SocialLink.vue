<template>
  <div class="wrapper__social mt-70">
    <ui-heard-icon :like="like" @addLike="addToLikeList" />
    <ui-vertical-line class="mr-39 ml-39" />

    <ui-letter-icon @click="log" class="mr-23" />
    <ui-instagram-icon class="mr-23" />
    <ui-facebook-icon class="mr-23" />
    <ui-twiter-icon class="mr-23" />
  </div>
</template>

<script setup>
import UiHeardIcon from "@/components/Ui-Icon/UiHeardIcon.vue";
import UiLetterIcon from "@/components/Ui-Icon/UiLetterIcon.vue";
import UiInstagramIcon from "@/components/Ui-Icon/UiInstagramIcon.vue";
import UiFacebookIcon from "@/components/Ui-Icon/UiFacebookIcon.vue";
import UiTwiterIcon from "@/components/Ui-Icon/UiTwiterIcon.vue";
import UiVerticalLine from "@/components/Ui-Icon/UiVerticalLine.vue";

import { ref } from "vue";
import { useItemStor } from "@/stores/fakeData";
import { useRoute } from "vue-router";

const { likeList, itemArr } = useItemStor();
const route = useRoute();

const like = ref(false);

function addToLikeList() {
  like.value = !like.value;

  if (like.value) {
    likeList.push(itemArr[route.params.id]);
  } else {
    const indexLikeList = likeList.findIndex(
      (item) => item == itemArr[route.params.id]
    );

    likeList.splice(indexLikeList, 1);
  }
}

function checkLikeArrayContent() {
  if (likeList.indexOf(itemArr[route.params.id]) !== -1) {
    like.value = true;
  }
}

checkLikeArrayContent();
</script>

<style lang="scss" scoped>
svg {
  height: 20px;
}
</style>
