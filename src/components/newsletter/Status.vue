<template>
  <div class="status">
    <div class="status__icon" :style="{ backgroundColor: iconColor }"></div>
    <p class="status__text" v-text="text"></p>
  </div>
</template>

<script>
export default {
  props: {
    iconColor: {
      type: String,
      default: 'black',
    },
    text: {
      type: String,
      default: 'status',
    },
  }
}
</script>

<style lang="stylus" scoped>
.status
  display flex
  &__icon
    width 10px
    height 16px
    border-radius 5px
  &__text
    font-size 16px
    margin 0 0 0 12px
</style>


