<template>
  <div class="list-container">
    <router-link class="list-container__title" :to="`/newsletter-manager/${listTitleTo}`" v-text="listTitle"></router-link>
    <div v-show="showList">
      <slot name="list"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listTitle: {
      type: String,
      required: true,
    },
    listTitleTo: {
      type: String,
      required: true,
    },
  },
  computed: {
    showList () {
      return this.$route.name.includes(`newsletter-manager-${this.listTitleTo}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.list-container
  &__title
    font-size 20px
    font-weight bold
    line-height 1.3
    color #a0a0a0
    margin 0

.router-link-active
  color black
</style>

