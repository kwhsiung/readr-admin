<template>
  <button :class="[ 'button', `button--${theme}` ]" :style="{ padding: padding }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'yellow',
      validator (value) {
        // The value must match one of these strings
        return [ 'light', 'dark', 'yellow', ].indexOf(value) !== -1
      },
    },
    padding: {
      type: String,
      default: '10px 12px',
    },
  }  
}
</script>

<style lang="stylus" scoped>
.button
  border none
  border-radius 4px
  font-weight bold
  &:focus
    outline none
  &--light
    background-color #a0a0a0
    color white
  &--dark
    background-color black
    color white
  &--yellow
    background-color #ddcf21
    color black
</style>

