import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import ProjectsContent from './components/PageContent/ProjectsContent.vue'

const testingRoute = '/test/dev/project1'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: ProjectsContent },
    { path: '/:pathMatch(.*)*', redirect: '/' }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path !== '/lookbook' && to.path !== testingRoute) {
    next('/') // redirect to '/' if the user tries to navigate to any other path
  } else {
    next()
  }
})

createApp(App)
  .use(router)
  .mount('#app')
