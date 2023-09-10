<template>
  <!-- -------------------------------title page------------------- -->
  <ui-title-f-z33 class="black mt-96">Shop The Latest</ui-title-f-z33>

  <div class="wrapper mt-40">

    <!-- -------------------------------wrapper------------------- -->

    <!-- -------------------------------form search------------------- -->
    <ui-form class="mr-30">

      <!-- -------------------------------input------------------- -->
      <ui-input
      :name="'search'"
        :type="'search'"
        :placeholder="'Search...'"
        @input="getInputValue"
        :value="inputValue"
      ></ui-input>

      <!-- -------------------------------select------------------- -->
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
<!-- ------------------------------------------------------------------- -->

<!-- -------------------------------item card------------------- -->
    <ui-wrapper-grid>

      <ui-card-item
        v-for="card in itemCardData"
        :key="card.price"
        :path="card.src"
        :title="card.title"
        :subtitle="card.price"
        @click="goToAboutCard(card.id)"
      ></ui-card-item>

    </ui-wrapper-grid>

     <!-- -------------------------------wrapper /------------------- -->
  </div>

</template>

<script setup>
import {useRouter} from "vue-router"
import { ref, computed } from "vue";
import { useItemStor } from "@/stores/fakeData";
import UiTitleFZ33 from "@/components/Title/UiTitleFZ33.vue";
import UiTitleFZ14 from "@/components/Title/UiTitleFZ14.vue";
import UiCardItem from "@/components/Ui-Components/UiCardItem.vue";
import UiForm from "@/components/Form-Element/UiForm.vue";
import UiWrapperGrid from "@/components/Ui-Components/UiWrapperGrid.vue";
import UiInput from "@/components/Form-Element/UiInput.vue";
import UiSelect from "@/components/Form-Element/UiSelect.vue";
import UiOption from "@/components/Form-Element/UiOption.vue";


const store = useItemStor();
const router = useRouter()

const inputValue = ref("");
const selectValue = ref("");

// <!-- ---------------- computed property for dynamically filtering the array of data ------------------- -->
const itemCardData = computed(() => {
  let product = store.itemArr;
  let search = inputValue.value;
  let select = selectValue.value

  if (search) {
    // <!-- ---------------- search that ignores case and searches by characters ------------------- -->
    product = product.filter((el) => {
      return (
        el.title.toLowerCase().indexOf(search) !== -1 ||
        el.price.indexOf(search) !== -1
      );
    });
  }
    // <!-- ---------------- search by price ignores extra characters except numbers, convert to numeric type ------------------- -->

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

function goToAboutCard(id) {
  router.push(`/about-product/${id - 1}`)
 
}




</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
</style>
