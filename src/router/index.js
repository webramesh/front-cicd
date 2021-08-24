import Vue from 'vue'
import Router from 'vue-router'

import { initCurrentUserStateMiddleware, checkAccessMiddleware, setPageTitleMiddleware } from './middlewares'
import { routes } from './routes'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'is-active',
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(initCurrentUserStateMiddleware)
router.beforeEach(checkAccessMiddleware)
router.beforeEach(setPageTitleMiddleware)

export default router
