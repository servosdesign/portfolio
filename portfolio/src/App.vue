<template>
  <div>
    <CustomHeader />
    <!--
    <TraverseButtons
      v-if="buttonVisible"
      :increase-page-number="increasePageNumber"
      :decrease-page-number="decreasePageNumber"
      :button-name="buttonName"
    />
    -->
    <PortfolioDisplay :page-number="pageNumber" />
  </div>
</template>

<script>
import CustomHeader from './components/UI/CustomHeader.vue'
import PortfolioDisplay from './components/PortfolioDisplay.vue'

/*
    Todo:
      - Add routing for the pages
      - Set up image display when click project images
      - Make lookbook more centered
      - mobile
*/

export default {
  components: {
    CustomHeader,
    PortfolioDisplay
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

html {
  background-image: url('/images/codecrecordings.png'),
    url('/images/methuselahrecords.png'),
    url('/images/servos.png'),
    url('/images/civlogo.png'),
    url('/images/civme.png');
    background-size: 0;
}
</style>
