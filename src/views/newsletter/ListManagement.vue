<template>
  <main class="main">
    <header class="main__header header">
      <div>
        <InputSearch v-show="!isAddingGroup"/>
        <h1 v-show="isAddingGroup" class="header__action-title">新增群組</h1>
      </div>
      <div class="header__action-btns action-btns">
        <ButtonRect v-show="!isAddingGroup" class="action-btns__btn" :theme="'dark'" :padding="'11px 39px'" @click.native="openAddingGroupPanel">新增群組</ButtonRect>
        <ButtonRect v-show="isAddingGroup" class="action-btns__btn" :theme="'light'" :padding="'11px 24px'" @click.native="closeAddingGroupPanel">返回群組列表</ButtonRect>
      </div>
    </header>
    <section class="main__section section">
      <PanelGroupAdding v-show="isAddingGroup"/>
    </section>
  </main>
</template>

<script>
import InputSearch from 'src/components/newsletter/input/InputSearch.vue'
import ButtonRect from 'src/components/newsletter/ButtonRect.vue'
import PanelGroupAdding from 'src/components/newsletter/list-management/PanelGroupAdding.vue'

export default {
  components: {
    InputSearch,
    ButtonRect,
    PanelGroupAdding,
  },
  data () {
    return {
      isAddingGroup: false,
    }
  },
  methods: {
    openAddingGroupPanel () {
      return this.isAddingGroup = true
    },
    closeAddingGroupPanel () {
      return this.isAddingGroup = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.main
  &__section
    margin 23px 0 0 0

.header
  display flex
  justify-content space-between
  &__action-title
    margin 0
    font-size 24px
    font-weight bold
</style>

