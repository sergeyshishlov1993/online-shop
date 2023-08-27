<template>
  <header>
    <div class="wrapper">
      <router-link to="/" active-class="active">
        <ui-logo />
      </router-link>

      <div class="wrapper__link">
        <ul>
          <div class="wrapper__item">
            <ui-nav-bar-link class="ml-64">
              <router-link to="/shop" active-class="active">Shop</router-link>
            </ui-nav-bar-link>
            <span class="border"></span>
          </div>

          <div class="wrapper__item">
            <ui-nav-bar-link class="ml-64">
              <router-link to="#"> Blog </router-link>
            </ui-nav-bar-link>
            <span class="border"></span>
          </div>

          <div class="wrapper__item">
            <ui-nav-bar-link class="ml-64">
              <router-link to="#">Our Story</router-link>
            </ui-nav-bar-link>
            <span class="border"></span>
          </div>
        </ul>
        <span>
          <ui-vertical-line />
        </span>
        <div class="wrapper__icon">
          <button class="mr-39">
            <UiSerch />
          </button>

          <button class="mr-39">
            <UiTrash />
          </button>

          <button class="mr-39">
            <UiPerson />
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import UiLogo from "./Ui/UiLogo.vue";
import UiNavBarLink from "./Ui/UiNavBarLink.vue";
import UiVerticalLine from "./Ui/UiIcon/UiVerticalLine.vue";
import UiSerch from "@/components/Ui/UiIcon/UiSearchIcon.vue";
import UiTrash from "@/components/Ui/UiIcon/UiTrashIcon.vue";
import UiPerson from "./Ui/UiIcon/UiPersonIcon.vue";

const route = useRoute();

const res = computed(() => {
  return route.name;
});

console.log(res);
</script>

<style lang="scss" scoped>
a {
  color: inherit;
}

header {
  padding-top: 64px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__link {
    display: flex;
    align-items: center;
  }
  &__item {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
  }
  span {
    margin-right: 48px;
    margin-left: 48px;
  }
  .border {
    display: none;
    width: 40px;
    border: 2px solid rgba(0, 0, 0, 1);
  }
}
</style>
