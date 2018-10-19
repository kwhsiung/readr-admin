<template>
  <section class="newsletter">
    <PageAside class="newsletter__aside"/>
    <transition name="fade" mode="out-in">
      <router-view class="newsletter__main"></router-view>
    </transition>
  </section>
</template>

<script>
import PageAside from 'src/components/newsletter/aside/PageAside.vue'

export default {
  components: {
    PageAside,
  },
}
</script>

<style lang="stylus" scoped>
.newsletter
  max-width 1083px
  margin 0 auto
  display flex
  &__main
    margin 0 0 0 36px
    width 100%
</style>

