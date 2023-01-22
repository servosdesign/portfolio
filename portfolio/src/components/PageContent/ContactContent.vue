<template>
  <section class="contact-page">
    <div class="wrapper-pro3">
      <div class="second2">
        <img
          class="contact-img"
          :src="contactData.imageSrc"
          alt=""
        >
      </div>
      <div class="background">
        <div class="container">
          <div class="screen">
            <div class="screen-header">
              <div class="screen-header-right">
                <div class="screen-header-ellipsis" />
                <div class="screen-header-ellipsis" />
                <div class="screen-header-ellipsis" />
              </div>
            </div>
            <div class="screen-body">
              <div class="screen-body-item left">
                <div class="app-title">
                  <span>{{ contactData.description }}</span>
                  <span />
                </div>
                <div class="app-contact">
                  {{ contactData.email }}
                </div>
              </div>
              <form
                class="screen-body-item"
                action="contactform.php"
                method="post"
              >
                <div class="app-form">
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      type="text"
                      name="name"
                      placeholder="NAME"
                      required
                    >
                  </div>
                  <div class="app-form-group">
                    <input
                      class="app-form-control"
                      type="email"
                      name="email"
                      placeholder="EMAIL"
                      required
                    >
                  </div>
                </div>
                <div class="app-form-group">
                  <input
                    class="app-form-control"
                    type="text"
                    name="msg"
                    placeholder="MESSAGE"
                    required
                    pattern="\S(.*\S)?"
                  >
                </div>
                <div class="app-form-group buttons">
                  <button
                    class="app-form-button"
                    type="submit"
                    name="submit"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import contactContent from '../../assets/configs/contact-config.js'

export default {
  data () {
    return {
      contactData: contactContent
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

</style>
