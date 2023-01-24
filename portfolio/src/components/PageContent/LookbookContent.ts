import { defineComponent } from 'vue'
import lookbookContent from '../../assets/configs/lookbook-config.js'

export default defineComponent({
  data () {
    return {
      lookbook: lookbookContent
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
