import { defineComponent } from 'vue'
import ProjectsContent from './PageContent/ProjectsContent.vue'
import DesignsContent from './PageContent/DesignsContent.vue'
import LookbookContent from './PageContent/LookbookContent.vue'
import ContactContent from './PageContent/ContactContent.vue'

export default defineComponent({
  components: {
    ProjectsContent,
    DesignsContent,
    LookbookContent,
    ContactContent
  },
  props: {
    pageNumber: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {}
  },
  computed: {
    isFirstPage () {
      return this.pageNumber === 0
    },
    isSecondPage () {
      return this.pageNumber === 1
    },
    isThirdPage () {
      return this.pageNumber === 2
    }
  }
})
