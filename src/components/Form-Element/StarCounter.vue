<template>
  <ui-star-white
    v-for="(n, index) in starsCount"
    :key="index"
    :class="{ grade: index + 1 <= props.rate }"
    @click="handleClick(index + 1)"
    class="mr-10"
  />
</template>

<script setup>
import UiStarWhite from "../Ui-Icon/UiStarWhite.vue";

const emit = defineEmits(["change"]);
const props = defineProps({
  starsCount: {
    type: Number,
    default: 5,
  },
  rate: {
    type: Number,
    default: 0,
  },
});

const handleClick = (rate) => {
  emit("changeStar", rate);
};
</script>

<style lang="scss" scoped>
.grade {
  fill: black;
}
</style>
