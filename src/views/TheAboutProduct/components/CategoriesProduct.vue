<template>
  <div class="mt-10">
    <ui-title-f-z16-f-w400 class="black">
      {{ props.title }}</ui-title-f-z16-f-w400
    >
    <ui-title-f-z16-f-w400 class="grey ml-13">{{
      props.value
    }}</ui-title-f-z16-f-w400>
  </div>
</template>

<script setup>
import UiTitleFZ16FW400 from "@/components/Title/UiTitleFZ16FW400.vue";

const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  value: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
}
</style>
