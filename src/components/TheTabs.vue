<template>
  <ui-tab-item
    v-for="(tab, id) in props.names"
    :key="tab.name"
    :name="tab.name"
    :selectedTab="props.selectedTab"
    :id="id"
    @click="clickOnTab(tab.name)"
    >{{ tab.label }}
  </ui-tab-item>
</template>

<script setup>
import UiTabItem from "@/components/Ui/Tab/UiTabItem.vue";

const emit = defineEmits(["changeTab"]);

const props = defineProps({
  names: {
    type: Array,
    requered: true,
  },
  selectedTab: {
    type: String,
    requered: false,
  },
});

function clickOnTab(tabName) {
  emit("changeTab", tabName);
}
</script>

<style lang="scss" scoped></style>
