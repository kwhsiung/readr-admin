<template>
  <aside class="aside">
    <PageAsideList
      class="aside__list-container list-container"
      :listTitle="$t('newsletter.aside.campaign')"
      :listTitleTo="'campaign'"
    >
      <ul class="list-container__list list" slot="list">
        <li class="list__list-item">
          <Status :iconColor="'#0db8c9'" :text="'已排程'"/>
        </li>
        <li class="list__list-item">
          <Status :iconColor="'#ddcf21'" :text="'草稿'"/>
        </li>
        <li class="list__list-item">
          <Status :iconColor="'#89c997'" :text="'已寄出'"/>
        </li>
      </ul>
    </PageAsideList>
    <PageAsideList
      class="aside__list-container list-container"
      :listTitle="$t('newsletter.aside.list_management')"
      :listTitleTo="'list-management'"
    >
      <ul class="list-container__list list" slot="list">
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test1')">
            零售店面消失零售店面消失零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test2')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test3')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test4')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test5')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test6')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test7')">
            零售店面消失
          </router-link>
        </li>
        <li class="list__list-item">
          <router-link :to="createPath('list-management', 'test8')">
            台大校長人事爭議
          </router-link>
        </li>
      </ul>
    </PageAsideList>
  </aside>
</template>

<script>
import PageAsideList from 'src/components/newsletter/aside/PageAsideList.vue'
import Status from 'src/components/newsletter/Status.vue'

export default {
  components: {
    PageAsideList,
    Status,
  },
  methods: {
    createPath(parent, child = '') {
      return `/newsletter-manager/${parent}/${child}`
    }
  }
}
</script>

<style lang="stylus" scoped>
.aside
  width 163px
  &__list-container
    & + &
      margin 31px 0 0 0

.list-container
  &__list
    list-style none
    margin 32px 0 0 22px
    padding 0

.list
  &__list-item
    font-size 16px
    color #a0a0a0
    // TODO: check wrap
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    cursor pointer
    & + &
      margin 23px 0 0 0
    a
      display inline-block
      padding 0 0 5px 0
    a:not([class~=router-link-exact-active])
      color currentColor
      border-bottom 1px solid transparent

.router-link-exact-active
  color black
  border-bottom 1px solid black
</style>

