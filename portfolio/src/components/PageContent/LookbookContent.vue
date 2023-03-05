<template>
  <div class="wrapper">
    <div
      v-for="items in lookbook"
      :key="items.order"
    >
      <img
        :src="items.imageSrc"
        alt=""
        rel="preload"
      >
    </div>
    <ContactContent />
  </div>
</template>

<script>
import lookbookContent from '../../assets/configs/lookbook-config.js'
import ContactContent from './ContactContent.vue'

export default {
  components: {
    ContactContent
  },
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
    margin-top: 100px;
}
img:hover {
  cursor: default;
}
div {
  width: 100%;
}
img {
  display:block;
    margin:auto;
}
</style>
