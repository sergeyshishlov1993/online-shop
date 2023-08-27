<template>
  <ui-title-f-z33 class="black mt-96">Shop The Latest</ui-title-f-z33>
  <div class="wrapper mt-40">
    <ui-form class="mr-30">

      <ui-input
        :type="'search'"
        :placeholder="'Search...'"
        @input="getInputValue"
        :value="inputValue"
      ></ui-input>

      <ui-select @change="getSelectValue"  class="mt-40">

        <ui-option :value="''">
          <ui-title-f-z14>Shop By</ui-title-f-z14>
        </ui-option>

        <ui-option :value="'min20'">
          <ui-title-f-z14> Price &#60 20 </ui-title-f-z14>
        </ui-option>

        <ui-option :value="'max20'">
          <ui-title-f-z14> Price > 20 </ui-title-f-z14>
        </ui-option>
      </ui-select>
      
      <ui-select class="mt-16"></ui-select>
    </ui-form>

    <ui-wrapper-grid>

      <ui-card-item
      @click="goToAboutCard"
        v-for="card in itemCardData"
        :key="card.price"
        :path="card.src"
        :title="card.title"
        :subtitle="card.price"
      ></ui-card-item>

    </ui-wrapper-grid>
  </div>

</template>

<script setup>
import {useRouter} from "vue-router"
import { ref, computed } from "vue";
import { useItemStor } from "@/stores/fakeData";
import UiTitleFZ33 from "@/components/Ui/Title/UiTitleFZ33.vue";
import UiTitleFZ14 from "@/components/Ui/Title/UiTitleFZ14.vue";
import UiCardItem from "@/components/Ui/UiCardItem.vue";
import UiForm from "@/components/Ui/Form-Element/UiForm.vue";
import UiWrapperGrid from "@/components/Ui/UiWrapperGrid.vue";
import UiInput from "@/components/Ui/Form-Element/UiInput.vue";
import UiSelect from "@/components/Ui/Form-Element/UiSelect.vue";
import UiOption from "@/components/Ui/Form-Element/UiOption.vue";

const stor = useItemStor();
const router = useRouter()

const inputValue = ref("");
const selectValue = ref("");

const itemCardData = computed(() => {
  let product = stor.itemArr;
  let search = inputValue.value;
  let select = selectValue.value

  if (search) {
    product = product.filter((el) => {
      return (
        el.title.toLowerCase().indexOf(search) !== -1 ||
        el.price.indexOf(search) !== -1
      );
    });
  }
  if(select === 'min20') {
    return product = product.filter((el) => parseInt(el.price.replace(/[^,\d]/g, '') ) < 20 )
  }
  if (select === "max20") {
    return product = product.filter((el) => parseInt(el.price.replace(/[^,\d]/g, '') ) > 20 )
  }
  return product;
});

function getInputValue(event) {
  return (inputValue.value = event.target.value);
}
function getSelectValue(event) {
  return selectValue.value = event.target.value
 
}

function goToAboutCard() {
  router.push('/about-product')
}




</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
