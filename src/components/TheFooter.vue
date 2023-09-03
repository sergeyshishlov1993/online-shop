<template>
  <div class="wrapper">
    <!-- -------------------------------------------------------------- -->

    <div class="wrapper__list">
      <ul>
        <router-link to="#"
          ><ui-title-f-z16 class="black">CONTACT</ui-title-f-z16>
        </router-link>

        <router-link to="#">
          <ui-title-f-z16 class="ml-41 black"
            >TERMS OF SERVICES</ui-title-f-z16
          ></router-link
        >

        <router-link to="#">
          <ui-title-f-z16 class="ml-41 black"
            >SHIPPING AND RETURNS</ui-title-f-z16
          ></router-link
        >
      </ul>

      <ui-title-f-z16 class="mt-48 black"
        >© 2021 Shelly. Terms of use and privacy policy.</ui-title-f-z16
      >
    </div>

    <div class="wrapper__link">
      <div class="wrapper__text">
        <ui-title-f-z16 class="black">
          Give an email, get the newsletter.
        </ui-title-f-z16>

        <router-link to="#"> <ui-arrow-rigth /></router-link>
      </div>

      <!-- -------------------------social-link---------------------- -->
      <div class="wrapper__social-media mt-48">
        <ui-link-in-icon class="ml-30" />
        <ui-facebook-icon class="ml-30" />
        <ui-instagram-icon class="ml-30" />
        <ui-twiter-icon class="ml-30" />
      </div>
      <!-- -------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script setup>
import UiTitleFZ16 from "./Title/UiTitleFZ16.vue";
import UiArrowRigth from "./Ui-Icon/UiArrowRigth.vue";
import UiLinkInIcon from "./Ui-Icon/UiLinkInIcon.vue";
import UiFacebookIcon from "./Ui-Icon/UiFacebookIcon.vue";
import UiInstagramIcon from "./Ui-Icon/UiInstagramIcon.vue";
import UiTwiterIcon from "./Ui-Icon/UiTwiterIcon.vue";
</script>

<style lang="scss" scoped>
ul {
  display: flex;
}
span {
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
}
.wrapper {
  padding: 52px 0 92px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-top: 1px solid rgba(216, 216, 216, 1);
  &__link {
    min-width: 350px;
  }
  &__text {
    padding-bottom: 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
  }
  &__social-media {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
