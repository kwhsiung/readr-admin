<template>
  <div class="input-item" :class="{ alert: alertFlag }">
    <input ref="input"
      v-model="currValue"
      :style="{ width: width }"
      :disabled="disabled"
      :type="type"
      :placeholder="placeHolder"
      @focus="focus"
      @focusout="focusout"
      @keyup="keyup">
    <span class="input-item__alert" @click="doFucus"></span>
    <span class="input-item__msg" :class="{ long: isTooLong }" v-text="alertMsg" v-if="alertMsgShow"></span>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        isTooLong: false,
        currValue: ''
      }
    },
    name: 'InputItem',
    methods: {
      doFucus () {
        this.$refs['input'].focus()
      },
      focus () {
        this.$emit('inputFocus', this.inputKey)
      },
      focusout () {
        this.$emit('inputFocusOut', this.inputKey)
      },
      keyup () {
        this.$emit('removeAlert', this.inputKey)
      },
    },
    mounted () {
      // this.initValue && (this.$refs['input'].value = this.initValue)
      this.currValue = this.value
    },
    props: [ 'inputKey', 'type', 'placeHolder', 'alertFlag', 'alertMsg', 'alertMsgShow', 'disabled', 'initValue', 'width', 'value' ],
    watch: {
      alertMsg: function () {
        const len = this.alertMsg ? this.alertMsg.length : 0
        this.isTooLong = len > 10
      },
      initValue: function () {
        this.$refs['input'].value = this.initValue
      },
      currValue: function () {
        this.$emit('update:value', this.currValue)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  // input-width = calc(100% - 20px)
  input-width-alert = calc(100% - 20px - 35px - 1.5px)
  .input-item
    // margin 15px 0
    position relative
    &.admin
      height 14px
      width 100%
      &.alert
        height 24px
        > input
          height 24px
          padding-left 5px
        .input-item__alert
          height 24px
          background-size 14px 14px
        .input-item__msg
          font-size 0.9375rem
          line-height 1.25rem

      > input
        border-bottom 1px solid #d3d3d3
        height 16px
        padding 0
        color #000
        font-size 0.9375rem
        &:disabled
          border-bottom none
    &.alert
      margin calc(10px - 1.5px) 0
      > input
        border-top 1.5px solid #ddcf21
        border-bottom 1.5px solid #ddcf21
        border-left 1.5px solid #ddcf21
        height 35px
        width calc(100% - 35px)
      .input-item__alert
        border-top 1.5px solid #ddcf21
        border-bottom 1.5px solid #ddcf21
        border-right 1.5px solid #ddcf21
        background-image url(/public/icons/exclamation.png)
        background-position center center
        background-size 22px 22px
        background-repeat no-repeat
        display inline-block
      .input-item__msg
        display block
    > input
      border none
      width 100%
      height 35px
      font-size 1.125rem
      padding 0 10px
      vertical-align top
      background-color #ffffff
      outline none
      font-weight 100
      &::-webkit-input-placeholder
        color #bdbdbd
        font-weight 100
    &__alert
      background-color #fff
      display inline-block
      height 35px
      width 35px
      display none
    &__msg
      background-color #ddcf21
      padding 10px
      position absolute
      // width 150px
      white-space nowrap
      min-height 30px
      left calc(100% + 17.5px)
      top 0
      z-index 20
      font-size 0.625rem
      line-height calc((10 / 16) * 1.4rem)
      text-align left
      color #000
      font-weight 300
      box-shadow 1px 1px 1px rgba(0, 0, 0, 0.4)
      display none
      &.long
        width 140px
        white-space normal
      &::before
        content ''
        border-width 7.5px 17.5px 7.5px 0
        border-color transparent rgba(0, 0, 0, 0.4) transparent transparent
        border-style solid
        position absolute
        left -17.5px
        top 8.5px
        display block
      &::after
        content ''
        border-width 7.5px 17.5px 7.5px 0
        border-color transparent #ddcf21 transparent transparent
        border-style solid
        position absolute
        left -17.5px
        top 7.5px
        display block


</style>