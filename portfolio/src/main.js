import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import ProjectsContent from './components/PageContent/ProjectsContent.vue'
import DesignsContent from './components/PageContent/DesignsContent.vue'
import LookbookContent from './components/PageContent/LookbookContent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProjectsContent },
    { path: '/designs', component: DesignsContent },
    { path: '/lookbook', component: LookbookContent },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path !== '/designs' && to.path !== '/lookbook') {
    next('/') // redirect to '/' if the user tries to navigate to any other path
  } else {
    next()
  }
})

createApp(App)
  .use(router)
  .mount('#app')
