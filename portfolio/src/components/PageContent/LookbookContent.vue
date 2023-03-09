<template>
  <div class="wrapper-lookbook">
    <div
      v-for="items in lookbook"
      :key="items.order"
      class="content"
    >
      <img
        :src="items.imageSrc"
        alt=""
        rel="preload"
      >
    </div>
    <div class="bottom">
      <ContactContent />
    </div>
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
.wrapper-lookbook{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
img {
  cursor: default;
  width: 100%;
  height: 500px;
}

.bottom {
  width: 100%;
}

</style>
