<template>
  <div class="input-container">
    <div class="input-container__icon">
      <img src="/public/icons/search-light-gray.png" alt="">
    </div>
    <input class="input-container__input" type="text" placeholder="搜尋關鍵字">
  </div>
</template>

<style lang="stylus" scoped>
.input-container
  width 400px
  height 36px
  display flex
  background-color #eeeeee
  border-radius 2px
  &__icon
    width 40px
    height 100%
    display flex
    justify-content flex-end
    align-items center
    border-radius 2px 0 0 2px
    img
      width 16px
  &__input
    width 100%
    height 100%
    border-radius 0 2px 2px 0
    background-color #eeeeee
    color #a0a0a0
    font-size 16px
    border none
    padding 10px
    &:focus
      outline none
    &::placeholder
      color currentColor
      font-size 16px
</style>

