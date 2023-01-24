import { defineComponent } from 'vue'
import designContent from '../../assets/configs/designs-config.js'

export default defineComponent({
  data () {
    return {
      projects: designContent,
      numberOfProjects: [0, 1, 2]
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
