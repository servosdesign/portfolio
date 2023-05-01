<template>
  <div>
    <CustomHeader @setTextLanguage="changeTextLanguage" />
    <router-view :text-language="textLanguage" />
  </div>
</template>

<script>
import CustomHeader from './components/UI/CustomHeader.vue'

/*
    Todo:
      - fix mobile first load no images showing
      - Add right side margin in mobile view to center the pages content
      - Set up image display transitions when click project images
*/

export default {
  components: {
    CustomHeader
  },
  data () {
    return {
      pageNumber: 0,
      buttonVisible: false,
      buttonName: {
        next: '',
        previous: ''
      },
      textLanguage: localStorage.getItem('textLanguage') || ''
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
    },
    changeTextLanguage (language) {
      this.textLanguage = language
      localStorage.setItem('textLanguage', language)
    }
  }
}
</script>

<style>

@font-face {
  src: url(/src/assets/fonts/wan.woff2) format('woff2');
  font-family: Wan;
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  src: url(/src/assets/fonts/Play-Regular.woff2) format('woff2');
  font-family: Play-Regular;
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

html, body {
  overflow-x: hidden;
}
body {
  position: relative
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
  background-image:
    url('/images/codecrecordings.png'),
    url('/images/methuselahrecords.png'),
    url('/images/servos.png'),
    url('/images/ladder.png'),
    url('/images/civlogo.png');
    background-size: 0;
}
</style>
