<template>
  <section class="contact-page">
    <div class="centered-border" />
    <div class="wrapper-pro3">
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
                <div class="app-title di">
                  <span>{{ contactData.description }}</span>
                  <span />
                </div>
                <div class="app-contact">
                  {{ contactData.email }}
                  <div class="github-button">
                    <a
                      href="https://github.com/servosdesign"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        class="img-gh"
                        src="/images//github-logo.png"
                        alt=""
                      ></a>
                  </div>
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
  components: {
  },
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

.centered-border {
  margin: 0 auto;
  width: 400px;
  border-top: 1px solid #ffffff;
}

.example_c {
  display: none;
}

img {
  width: 50px;
  height: 50px;
  float: left;
}

.github-button {
  margin-top: 20px;
}

button {
  font-family: Play-Regular;
  color: #111;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 12px;
  text-transform: uppercase;
  padding-top: 8px;
}

.wrapper-pro3 {
  margin-top: 80px;
  display: flex;
  background-color: white;
  justify-content: center;
  flex-direction: row;
}

.contact-img {
  height: 100%vh;
  width: 100%;
}

.second2 {
  order: 1;
}

.contact-page {
  background-color: white;
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

.wrapper-pro3 {
  padding: 0;
}

.second2 {
  order: 1;
}

.background {
  order: 2;
  border-top: 1px solid #e4e4e4;
}

.background {
  display: flex;
  height: 100%;
}

.container {
  flex: 0 1 700px;
  margin: auto;
  padding: 10px;
  background-color: white;
  height: 230px;
}

.screen {
  font-family: Play-Regular;
  color: #444444;
  letter-spacing: 4px;
  line-height: 10px;
  font-weight: bold;
  font-size: 12px;
  text-transform: uppercase;
}

.screen:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 20px;
  right: 20px;
  bottom: 0;
  z-index: -1;
}

.screen-body {
  display: flex;
  z-index: -1;
}

.screen-body-item {
  flex: 1;
  padding: 50px;
  padding-bottom: 0px;
  padding-top: 35px;
}

.di{
  padding-top: 15px;
}

.screen-body-item.left {
  display: flex;
  flex-direction: column;
}

.img-gh{
  padding-top: 30px;
}

.app-title {
  display: flex;
  flex-direction: column;
  position: relative;
}

.app-contact {
  margin-top: 15px;
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
  width: 250px;
  padding: 10px 0;
  background: none;
  border: none;
  border-bottom: 1px solid #666;
  color: rgb(0, 0, 0);
  font-size: 14px;
  font-family: Play-Regular;
  outline: none;
  transition: border-color .2s;
}

.app-form-control::placeholder {
  color: #666;
  font-family: wan;
  font-size: 8px;
  letter-spacing: 4px;
}

.app-form-control:focus {
  border-bottom-color: #ddd;
}

.app-form-button {
  background: none;
  border: none;
  color: #444444;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

.app-form-button:hover {
  color: #4d4d4d;
}
</style>
