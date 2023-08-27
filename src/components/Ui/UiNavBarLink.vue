<template>
  <div>
    <h2>
      <slot />
    </h2>
    <span class="mt-18"></span>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}
h2 {
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: rgba(0, 0, 0, 1);
}
</style>
