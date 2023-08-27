<template>
  <div>
    <ui-title-f-z20-f-w400 class="black pr-96">
      <slot />
    </ui-title-f-z20-f-w400>
    <span :class="{ tab: props.name === props.selectedTab }" />
  </div>
</template>

<script setup>
import UiTitleFZ20FW400 from "../Title/UiTitleFZ20FW400.vue";

const props = defineProps({
  selectedTab: {
    type: String,
    requered: false,
  },
  name: {
    type: String,
    requered: true,
  },
});
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}
.pr-96 {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-right: 96px;
  cursor: pointer;
}
.tab {
  position: absolute;
  bottom: 0;
  width: 107px;
  border: 1px solid rgba(0, 0, 0, 1);
}
</style>
