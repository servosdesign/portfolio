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
    { path: '/lookbook', component: LookbookContent }
  ]
})

createApp(App)
  .use(router)
  .mount('#app')
