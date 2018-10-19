<template>
  <main class="main">
    <header class="main__header header">
      <GroupTitle class="header__title" :groupName="'選舉文化'" :groupSubsCount="12"/>
      <div class="header__action-btns action-btns">
        <ButtonRect class="action-btns__btn">新增成員</ButtonRect>
        <ButtonRect class="action-btns__btn" :theme="'light'" @click.native="toRoute()">返回群組列表</ButtonRect>
      </div>
    </header>
  </main>
</template>

<script>
import GroupTitle from 'src/components/newsletter/list-management/GroupTitle.vue'
import ButtonRect from 'src/components/newsletter/ButtonRect.vue'

export default {
  components: {
    GroupTitle,
    ButtonRect,
  },
  methods: {
    toRoute (path = '/newsletter-manager/list-management') {
      this.$router.push(path)
    },
  },
}
</script>

<style lang="stylus" scoped>
.header
  display flex
  justify-content space-between

.action-btns
  &__btn
    & + &
      margin 0 0 0 10px
</style>


