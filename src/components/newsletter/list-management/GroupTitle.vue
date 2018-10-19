<template>
  <div class="group-title">
    <span class="group-title__action-title" v-text="actionText"></span>
    <span class="group-title__group-name" v-text="`> ${groupName}${groupSubsCountText}`"></span>
  </div>
</template>

<script>
export default {
  props: {
    actionText: {
      type: String,
      default: '編輯群組',
    },
    groupName: {
      type: String,
      required: true,
    },
    groupSubsCount: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    showGroupSubsCount () {
      return this.groupSubsCount !== 0
    },
    groupSubsCountText () {
      return this.showGroupSubsCount ?`（${this.groupSubsCount}）`: ''
    },
  }
}
</script>

<style lang="stylus" scoped>
.group-title
  &__action-title
    font-size 24px
    font-weight bold
  &__group-name
    margin 0 0 0 18px
    font-size 16px
</style>


