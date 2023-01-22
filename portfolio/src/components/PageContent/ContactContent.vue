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
                id="form-data"
                class="screen-body-item"
                method="post"
                action="contactform.php"
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
  created () {
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

body {
  line-height: 1;
}

footer,
header,
nav,
section {
  display: block;
}

nav ul {
  list-style: none;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
}

input {
  vertical-align: middle;
}

/** contact mobile **/

.example_c {
  display: none;
}

.wrapper-pro3 {
  display: flex;
  flex-direction: column;
}

.contact-img {
  height: 100%vh;
  width: 100%;
}

.second2 {
  order: 1;
}

/** contact web **/

@media only screen and (min-width:1000px) {

  .wrapper-pro3 {
    display: flex;
    justify-content: center;
    padding: 0px 0px 173px 0px;
    flex-direction: row;
  }

  .contact-page {
    background-color: #f3f3f3;
    padding-bottom: 24px;
  }

  .contact-page h2 {
    font-family: Wan;
    height: 30%;
    letter-spacing: 4px;
    color: black;
    line-height: 10px;
    font-size: 9px;
    text-transform: uppercase;
    padding: 30px 0px 100px 0px;
    margin: 0;
  }

  .contact-page h3 {
    font-family: Wan;
    height: 30%;
    letter-spacing: 4px;
    color: black;
    line-height: 10px;
    font-size: 5px;
    text-transform: uppercase;
    text-transform: bold;
    padding: 10px 0px 0px 0px;
    margin: 0;
  }

  .contact-page p {
    font-family: Wan;
    letter-spacing: 0px;
    color: black;
    line-height: 15px;
    font-size: 8px;
    text-transform: none;
    padding: 15px 0px 0px 0px;
    margin: 0;
  }

  .contact-img {
    padding: 0px 0px 0px 0px;
  }

  .second2 {
    order: 2;
    display: inline-block;
    max-height: 500px;
    overflow: hidden;
  }
}

/* contact form */

.wrapper-pro3 {
  padding: 0;
}

.second2 {
  order: 1;
}

.background {
  padding-top: 200px;
  order: 2;
}

@media only screen and (min-width:1000px) {
  .contact-img {
    height: 861px;
    width: 807px;
    display: block;
    margin: auto;
  }
}

.background {
  padding-top: 20px;
}

@media only screen and (min-width:1000px) {
  .background {
    padding-top: 170px;
    display: flex;
    height: 100%;
    padding-bottom: 46px;
  }
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
  padding-bottom: 148px;
}

.screen {
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  letter-spacing: 1.4px;
  position: relative;
  background: #ffffff;
  border-radius: 15px;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-body {
  display: flex;
  border-radius: 15px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, .4);
  z-index: -1;
}

.screen-body-item {

  flex: 1;
  padding: 50px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
  color: #e43f55;
  font-size: 17px;
}

.app-title:after {

  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -10px;
  width: 25px;
  height: 4px;
  background: #e43f55;
  ;
}

.app-contact {
  margin-top: auto;
  font-weight: 700;
  font-size: 7px;
  color: #888;
}

.app-form-group {
  margin-bottom: 15px;
}

.app-form-group.buttons {
  margin-bottom: 0;
  text-align: right;
}

.app-form-control {
  font-weight: 700;
  width: 100%;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: rgb(0, 0, 0);
  font-size: 14px;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #e43f55;
  font-size: 14px;
  cursor: pointer;
  outline: none;
  font-weight: 700;
}

.app-form-button:hover {
  color: #b9134f;
}

@media screen and (max-width: 520px) {
  .screen-body {
    flex-direction: column;
  }

  .screen-body-item.left {
    margin-bottom: 30px;
  }

  .app-title {
    flex-direction: row;
  }

  .app-title span {
    margin-right: 12px;
  }

  .app-title:after {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .screen-body {
    padding: 40px;
  }

  .screen-body-item {
    padding: 0;
  }
}
</style>
