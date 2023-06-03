<template>
  <div class="zoom-wrapper">
    <!--
    <div id="zoom-buttons">
      <button id="zoom-in">
        +
      </button>
      <button id="zoom-out">
        -
      </button>
    </div>
    -->
    <CustomHeader @setTextLanguage="changeTextLanguage" />
    <router-view :text-language="textLanguage" />
  </div>
</template>

<script>
import CustomHeader from './components/UI/CustomHeader.vue'

/*
    Todo:
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
      textLanguage: localStorage.getItem('textLanguage') || 'english'
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
    // this.togglePageZoomDisplay()
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
    },
    togglePageZoomDisplay () {
      document.getElementById('zoom-in').addEventListener('click', function () {
        changeZoom(0.1)
      })

      document.getElementById('zoom-out').addEventListener('click', function () {
        changeZoom(-0.1)
      })

      function changeZoom (delta) {
        const currentZoom = document.documentElement.style.zoom || 1
        const newZoom = parseFloat(currentZoom) + delta

        // Limit the zoom level between 0.5 and 2
        if (newZoom >= 0.5 && newZoom <= 2) {
          document.documentElement.style.zoom = newZoom
        }
      }
    }
  }
}
</script>

<style>

.zoom-wrapper {
  zoom: 1.1; /* Adjust the zoom value as needed */
  transform-origin: top left;
  width: fit-content;
  margin: auto;
}

@media (max-width: 767px) {
  .zoom-wrapper {
  zoom: 1; /* Adjust the zoom value as needed */
  transform-origin: top;
  width: 100%;
  margin: auto;
}
}

#zoom-buttons {
  position: fixed;
  top: 30px;
  right: 25px;
}

#zoom-buttons button {
  background-color: transparent;
  border: none;
  border: 1px solid black;
  padding: 5px;
  padding-top: 0px;
  padding-bottom: 0px;
}

#zoom-buttons button:hover{
  background-color:#e6e6e6;
  cursor: pointer;
}

#zoom-in {
  font-size: 20px;
  font-family: Play-Regular;
  color: black;
}

#zoom-out {
  font-size: 20px;
  font-family: Play-Regular;
  color: black;
  margin-left: 3px;
}

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
