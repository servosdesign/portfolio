<template>
  <div>
    <CustomHeader />
    <TraverseButtons
      :increase-page-number="increasePageNumber"
      :decrease-page-number="decreasePageNumber"
      :button-name="buttonName"
    />
    <PortfolioDisplay :page-number="pageNumber" />
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from './components/UI/CustomHeader.vue'
import PortfolioDisplay from './components/PortfolioDisplay.vue'
import CustomFooter from './components/UI/CustomFooter.vue'
import TraverseButtons from './components/UI/TraverseButtons.vue'

export default {
  components: {
    CustomHeader,
    PortfolioDisplay,
    CustomFooter,
    TraverseButtons
  },
  data () {
    return {
      pageNumber: 0,
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
    }
  }
}
</script>

<style>
@font-face {
  src: url(./assets/fonts/wan.ttf);
  font-family: Wan;
}

@font-face {
  src: url(./assets/fonts/Play-Regular.ttf);
  font-family: Play-Regular
}

nav ul {
  list-style: none;
}

* {
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
}
</style>
