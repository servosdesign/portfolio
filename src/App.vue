<template>
  <div>
    <CustomHeader />
    <PortfolioDisplay />
    <CustomFooter />
  </div>
</template>

<script>
import CustomHeader from './components/UI/CustomHeader.vue'
import PortfolioDisplay from './components/PortfolioDisplay.vue'
import CustomFooter from './components/UI/CustomFooter.vue'

export default {
  components: {
    CustomHeader,
    PortfolioDisplay,
    CustomFooter
  },
  data () {
    return {}
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
