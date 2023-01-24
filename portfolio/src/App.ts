import { defineComponent } from 'vue'
import CustomHeader from './components/UI/CustomHeader.vue'
import PortfolioDisplay from './components/PortfolioDisplay.vue'
import CustomFooter from './components/UI/CustomFooter.vue'
import TraverseButtons from './components/UI/TraverseButtons.vue'

export default defineComponent({
  components: {
    CustomHeader,
    PortfolioDisplay,
    TraverseButtons,
    CustomFooter
  },
  data () {
    return {
      pageNumber: 0,
      buttonVisible: false,
      buttonName: {
        next: '',
        previous: ''
      }
    }
  },
  watch: {
    pageNumber: {
      handler () {
        if (this.pageNumber === 0) {
          this.buttonName.next = 'Designs'
          this.buttonName.previous = 'Lookbook'
        }
        if (this.pageNumber === 1) {
          this.buttonName.next = 'Lookbook'
          this.buttonName.previous = 'Projects'
        }
        if (this.pageNumber === 2) {
          this.buttonName.next = 'Projects'
          this.buttonName.previous = 'Designs'
        }
      },
      deep: true
    }
  },
  created () {
    this.loadDefaultButtonNames()
  },
  mounted () {
    window.addEventListener('scroll', this.scrollFunction)
  },
  methods: {
    increasePageNumber () {
      if (this.pageNumber === 2) {
        this.pageNumber = 0
      } else {
        this.pageNumber++
      }
    },
    decreasePageNumber () {
      if (this.pageNumber === 0) {
        this.pageNumber = 2
      } else {
        this.pageNumber--
      }
    },
    loadDefaultButtonNames () {
      this.buttonName.next = 'Designs'
      this.buttonName.previous = 'Lookbook'
    },
    scrollFunction () {
      this.buttonVisible = true
    }
  }
})
