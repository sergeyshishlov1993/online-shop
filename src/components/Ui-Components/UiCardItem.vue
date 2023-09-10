<template>
  <div class="card">
    <img :src="path" alt="" />

    <ui-title-f-z20-f-w400 class="black mt-24"
      >{{ props.title }}
    </ui-title-f-z20-f-w400>

    <ui-title-f-z20-f-w400 class="yellow mt-16"
      >{{ props.subtitle }}
    </ui-title-f-z20-f-w400>
  </div>
</template>

<script setup>
import UiTitleFZ20FW400 from "../Title/UiTitleFZ20FW400.vue";

const path = require(`@/assets/img/firstScrin/Card/${props.path}`);

const props = defineProps({
  path: String,
  title: String,
  subtitle: String,
});
</script>

<style lang="scss" scoped></style>
