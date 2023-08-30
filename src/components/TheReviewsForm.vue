<template>
  <div class="wrapper-form">
    <ui-title-f-z20-f-w400 class="black">Add a Review</ui-title-f-z20-f-w400>
    <ui-title-f-z13 class="mt-10"
      >Your email address will not be published. Required fields are marked
      *</ui-title-f-z13
    >

    <ui-form class="mt-48 form-reviews" @submit.prevent="sendReviews">
      <!-- ---------------input------------------- -->
      <ui-input
        class="width-100"
        :value="reviewValue"
        :name="'review'"
        :type="'text'"
        :placeholder="'Your Review*'"
        @input="(event) => getInputValue(event, 'review')"
      />

      <ui-input
        class="mt-48 width-100"
        :value="nameInputValue"
        :name="'nameInp'"
        :type="'text'"
        :placeholder="'Enter your name*'"
        @input="(event) => getInputValue(event, 'nameInp')"
      />

      <ui-input
        class="mt-48 width-100"
        :value="emailInputValue"
        :name="'email'"
        :type="'email'"
        :placeholder="'Enter your name*'"
        @input="(event) => getInputValue(event, 'email')"
      />

      <!-- -------------check-box------------------ -->
      <div class="mt-59 wrapper__check">
        <ui-check-box
          :checked="checkBoxValue"
          @change="(event) => getCheckBoxValue(event)"
        />
        <ui-title-f-z12 class="ml-8"
          >Save my name, email, and website in this browser for the next time I
          comment</ui-title-f-z12
        >
      </div>

      <!-- ------------------rating----------- -->
      <ui-title-f-z14 class="mt-48">Your Rating*</ui-title-f-z14>
      <div class="mt-10">
        <star-counter
          :starsCount="starsCount"
          :rate="rate"
          @changeStar="(emitParam) => countLikeStar(emitParam)"
        ></star-counter>
      </div>

      <!-- -------------------button(submit)---------------- -->
      <ui-form-button class="mt-48">
        <ui-title-f-z16>Submit</ui-title-f-z16>
      </ui-form-button>
    </ui-form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useItemStor } from "@/stores/fakeData";
import UiForm from "./Ui/Form-Element/UiForm.vue";
import UiInput from "./Ui/Form-Element/UiInput.vue";
import UiCheckBox from "./Ui/Form-Element/UiCheckBox.vue";
import UiTitleFZ20FW400 from "./Ui/Title/UiTitleFZ20FW400.vue";
import UiTitleFZ16 from "./Ui/Title/UiTitleFZ16.vue";
import UiTitleFZ14 from "./Ui/Title/UiTitleFZ14.vue";
import UiTitleFZ13 from "./Ui/Title/UiTitleFZ13.vue";
import UiTitleFZ12 from "./Ui/Title/UiTitleFZ12.vue";
import UiFormButton from "./Ui/Form-Element/UiFormButton.vue";
import StarCounter from "./Ui/Form-Element/StarCounter.vue";

// --------------------stor----------------------------

const stor = useItemStor();

// -------------------------------------------------------

const date = new Date();
const reviewValue = ref("");
const nameInputValue = ref("");
const emailInputValue = ref("");
const checkBoxValue = ref();
const starsCount = ref(5);
const rate = ref();
const currentDate = ref();

// -------------------current-date-----------------
function getCurrentDate() {
  const dateOptipn = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return (currentDate.value = new Intl.DateTimeFormat("en-Uk", dateOptipn));
}

function getInputValue(event, id) {
  // -----------add-input-review -value-----------
  if (id === "review") {
    reviewValue.value = event.target.value;
  }

  // -----------add-input-name-value-----------
  if (id === "nameInp") {
    nameInputValue.value = event.target.value;
  }

  // -----------add-input-email-value-----------
  if (id === "email") {
    emailInputValue.value = event.target.value;
  }
}

function getCheckBoxValue(event) {
  // ----------------add-checkbox-value-------------------

  checkBoxValue.value = event.target.checked;
}

function countLikeStar(emitParam) {
  return (rate.value = emitParam);
}

console.log(rate.value);

function sendReviews() {
  // -----------------------push-data---------------------

  stor.reviews.push({
    namePersone: nameInputValue.value,
    date: getCurrentDate().format(date),
    stars: 5,
    gradeStars: 0,
    reviewText: reviewValue.value,
  });

  // -------------clear-form---------------------------

  reviewValue.value = "";
  nameInputValue.value = "";
  emailInputValue.value = "";
  rate.value = ref(0);
}
</script>

<style lang="scss" scoped>
.wrapper-form {
  padding-top: 42px;
  display: flex;
  flex-direction: column;
}
.wrapper__check {
  display: flex;
  align-items: center;
}
.form-reviews {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
