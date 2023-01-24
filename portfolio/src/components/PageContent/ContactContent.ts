import { defineComponent } from 'vue'
import contactContent from '../../assets/configs/contact-config.js'

export default defineComponent({
  data () {
    return {
      contactData: contactContent
    }
  },
  created () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }
})
