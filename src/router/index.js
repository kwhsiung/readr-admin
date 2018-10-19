import Vue from 'vue'
import Router from 'vue-router'
import { ReadrPerm } from '../util/services'

Vue.use(Router)
Vue.use(ReadrPerm)

// route-level code splitting
const Index = () => import('src/views/Index.vue')
const ProjectCandidate = () => import('src/views/ProjectCandidate.vue')
const ProjectManager = () => import('src/views/ProjectManager.vue')
const MemoManagerList = () => import('src/views/MemoManagerList.vue')
const MemoManagerReplies = () => import('src/views/MemoManagerReplies.vue')
const ReportManager = () => import('src/views/ReportManager.vue')

const IndexNewsletter = () => import('src/views/IndexNewsletter.vue')
const Campaign = () => import('src/views/newsletter/Campaign.vue')
const ListManagement = () => import('src/views/newsletter/ListManagement.vue')
const ListManagementGroup = () => import('src/views/newsletter/ListManagementGroup.vue')

export function createRouter () {
  return new Router({
    mode: 'history',
    fallback: false,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
      { path: '/', component: Index, meta: { permission: 'admin' } },
      { path: '/project-manager/candidate', alias: '/project-candidate', component: ProjectCandidate, meta: { permission: 'admin' } },
      { path: '/project-manager/project', component: ProjectManager, meta: { permission: 'admin' } },
      { path: '/memo-manager/list', component: MemoManagerList, meta: { permission: 'admin' }},
      { path: '/memo-manager/replies', component: MemoManagerReplies, meta: { permission: 'admin' }},
      { path: '/report-manager/report', component: ReportManager, meta: { permission: 'admin' }},
      { 
        name: 'newsletter-manager',
        path: '/newsletter-manager',
        component: IndexNewsletter,
        meta: { permission: 'admin' },
        children: [
          {
            name: 'newsletter-manager-campaign',
            path: 'campaign',
            component: Campaign,
          },
          {
            name: 'newsletter-manager-list-management',
            path: 'list-management',
            component: ListManagement,
          },
          {
            name: 'newsletter-manager-list-management-group',
            path: 'list-management/:id',
            component: ListManagementGroup,
          },
        ]
      },
    ]
  })
}
