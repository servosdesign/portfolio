import { defineComponent } from 'vue'
import projectContent from '../../assets/configs/projects-config.js'
import numberOfProjectsArrayLength from '../../assets/configs/config.js'

export default defineComponent({
  data () {
    return {
      projects: projectContent,
      numberOfProjects: numberOfProjectsArrayLength
    }
  },
  mounted () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }
})
