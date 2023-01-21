<template>
  <div class="wrapper">
    <div
      v-for="items in lookbook"
      :key="items.order"
    >
      <img
        :src="items.imageSrc"
        alt=""
      >
    </div>
  </div>
</template>

<script>
import lookbookContent from '../assets/data/lookbook-config.js'

export default {
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
}

</script>

<style scoped>
.wrapper{
  display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0 auto;
}
div {
  width: 100%;
}
img {
  display:block;
    margin:auto;
}
</style>
