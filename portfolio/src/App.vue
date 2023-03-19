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
      - Set up image display transitions when click project images
      - mobile
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
