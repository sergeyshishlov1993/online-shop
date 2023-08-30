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
import UiLogo from "@/components/Ui/UiLogo";
import UiNavBarLink from "@/components/Ui/UiNavBarLink";

import UiVarticalLine from "@/components/Ui/UiIcon/UiVerticalLine";
import UiSerch from "@/components/Ui/UiIcon/UiSearchIcon";
import UiTrash from "@/components/Ui/UiIcon/UiTrashIcon";
import UiPerson from "@/components/Ui/UiIcon/UiPersonIcon";
import UiEae from "@/components/Ui/UiIcon/UiEaeIcon";
import UiHeard from "@/components/Ui/UiIcon/UiHeardIcon";
import UiArrowRigth from "@/components/Ui/UiIcon/UiArrowRigth";
import UiLinkIn from "@/components/Ui/UiIcon/UiLinkInIcon";
import UiFacebook from "@/components/Ui/UiIcon/UiFacebookIcon";
import UiInstagram from "@/components/Ui/UiIcon/UiInstagramIcon";
import UiTwiter from "@/components/Ui/UiIcon/UiTwiterIcon";
import UiArrowBottomIcon from "@/components/Ui/UiIcon/UiArrowBottomIcon.vue";

import UiTitleFZ12 from "@/components/Ui/Title/UiTitleFZ12.vue";
import UiTitleFZ13 from "@/components/Ui/Title/UiTitleFZ13.vue";
import UiTitleFZ14 from "@/components/Ui/Title/UiTitleFZ14.vue";
import UiTitleFZ16 from "@/components/Ui/Title/UiTitleFZ16.vue";
import UiTitleFZ26 from "@/components/Ui/Title/UiTitleFZ26.vue";
import UiTitleFZ20 from "@/components/Ui/Title/UiTitleFZ20.vue";
import UiTitleFZ33 from "@/components/Ui/Title/UiTitleFZ33.vue";
import UiTitleFZ16FW400 from "@/components/Ui/Title/UiTitleFZ16FW400.vue";
import UiTitleFZ20FW400 from "@/components/Ui/Title/UiTitleFZ20FW400.vue";

import UiButton from "@/components/Ui/UiButton";
import UiFormButton from "@/components/Ui/Form-Element/UiFormButton.vue";
import UiCircleButton from "@/components/Ui/UiCircleButton.vue";
import UiCheckBox from "@/components/Ui/Form-Element/UiCheckBox.vue";
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 50px;
}
</style>
