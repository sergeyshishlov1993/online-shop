<template>
  <div class="container">
    <div class="wrapper">
      <ui-logo />
      <ui-nav-bar-link>test</ui-nav-bar-link>
      <!-------------------------------------------------->

      <ui-vartical-line />
      <ui-serch />
      <ui-trash />
      <ui-person />
      <ui-eae />
      <ui-arrow-rigth />
      <ui-heard />
      <ui-link-in />
      <ui-facebook />
      <ui-instagram />
      <ui-twiter />
      <ui-arrow-bottom-icon />
      <!-- ------------------------------------------------------- -->

      <ui-title-f-z33>TEST</ui-title-f-z33>
      <ui-title-f-z26 class="black">TEST</ui-title-f-z26>
      <ui-title-f-z20 class="black">TEST</ui-title-f-z20>
      <ui-title-f-z20-f-w400 class="black">TEST</ui-title-f-z20-f-w400>
      <ui-title-f-z16 class="black">TEST</ui-title-f-z16>
      <ui-title-f-z16-f-w400>TEST</ui-title-f-z16-f-w400>
      <ui-title-f-z14>TEST</ui-title-f-z14>
      <ui-title-f-z13>TEST</ui-title-f-z13>
      <ui-title-f-z12>TEST</ui-title-f-z12>

      <!-- ------------------------------------------------------------- -->
      <div>
        <ui-button></ui-button>
        <ui-form-button>
          <ui-title-f-z16>TEST</ui-title-f-z16>
        </ui-form-button>
        <ui-circle-button />
      </div>
      <!-- -------------------------------------------------- -->
      <ui-check-box />
    </div>
  </div>
</template>

<script setup>
import UiLogo from "@/components/Ui-Icon/UiLogo.vue";
import UiNavBarLink from "@/components/Ui-Components/UiNavBarLink.vue";

import UiVarticalLine from "@/components/Ui-Icon/UiVerticalLine.vue";
import UiSerch from "@/components/Ui-Icon/UiSearchIcon.vue";
import UiTrash from "@/components/Ui-Icon/UiShoppingBagIcon.vue";
import UiPerson from "@/components/Ui-Icon/UiPersonIcon.vue";
import UiEae from "@/components/Ui-Icon/UiEaeIcon.vue";
import UiHeard from "@/components/Ui-Icon/UiHeardIcon.vue";
import UiArrowRigth from "@/components/Ui-Icon/UiArrowRigth.vue";
import UiLinkIn from "@/components/Ui-Icon/UiLinkInIcon.vue";
import UiFacebook from "@/components/Ui-Icon/UiFacebookIcon.vue";
import UiInstagram from "@/components/Ui-Icon/UiInstagramIcon.vue";
import UiTwiter from "@/components/Ui-Icon/UiTwiterIcon.vue";
import UiArrowBottomIcon from "@/components/Ui-Icon/UiArrowBottomIcon.vue";

import UiTitleFZ12 from "@/components/Title/UiTitleFZ12.vue";
import UiTitleFZ13 from "@/components/Title/UiTitleFZ13.vue";
import UiTitleFZ14 from "@/components/Title/UiTitleFZ14.vue";
import UiTitleFZ16 from "@/components/Title/UiTitleFZ16.vue";
import UiTitleFZ26 from "@/components/Title/UiTitleFZ26.vue";
import UiTitleFZ20 from "@/components/Title/UiTitleFZ20.vue";
import UiTitleFZ33 from "@/components/Title/UiTitleFZ33.vue";
import UiTitleFZ16FW400 from "@/components/Title/UiTitleFZ16FW400.vue";
import UiTitleFZ20FW400 from "@/components/Title/UiTitleFZ20FW400.vue";

import UiButton from "@/components/Ui-Components/UiButton.vue";
import UiFormButton from "@/components/Form-Element/UiFormButton.vue";
import UiCircleButton from "@/components/Ui-Components/UiCircleButton.vue";
import UiCheckBox from "@/components/Form-Element/UiCheckBox.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px;
}
</style>
