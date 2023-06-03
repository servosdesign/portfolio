<template>
  <header>
    <div class="language-toggle">
      <label class="label">
        <div
          class="label-text label-text-left"
        >🇺🇸</div>
        <div
          class="toggle"
        >
          <input
            class="toggle-state"
            type="checkbox"
            name="check"
            value="check"
            :checked="isRussianSelected"
            @click="changeTextLanguage()"
          >
          <div class="indicator" />
        </div>
        <div
          class="label-text"
        >🇷🇺</div>
      </label>
    </div>
    <div class="container">
      <div
        class="header-brand"
        :class="{ open: showMenu }"
      >
        <div>
          <img
            class="img-icon"
            :class="{ rotate: showMenu }"
            src="/images/header-logo.png"
            alt=""
          >
        </div>
        <transition-group
          v-if="languageSelected==='english'"
          name="sliding"
          tag="ul"
          class="menu"
          :class="{ show: showMenu }"
        >
          <li
            key="1"
            :class="{ active: currentLink === 'home' }"
          >
            <a
              href="/"
              @click="toggleMenu"
            >Projects</a>
          </li>
          <li
            key="1"
            :class="{ active: currentLink === 'lookbook' }"
          >
            <a
              href="/lookbook"
              @click="toggleMenu"
            >Lookbook</a>
          </li>
        </transition-group>

        <transition-group
          v-else
          name="sliding"
          tag="ul"
          class="menu"
          :class="{ show: showMenu }"
        >
          <li
            key="1"
            :class="{ active: currentLink === 'home' }"
          >
            <a
              class="russian-font"
              href="/"
              @click="toggleMenu"
            >Проекты</a>
          </li>
          <li
            key="1"
            :class="{ active: currentLink === 'lookbook' }"
          >
            <a
              href="/lookbook"
              class="russian-font"
              @click="toggleMenu"
            >лукбук</a>
          </li>
        </transition-group>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false,
      currentLink: 'home',
      languageSelected: localStorage.getItem('languageSelected') || 'english'
    }
  },
  computed: {
    isEnglishSelected () {
      return this.languageSelected === 'english'
    },
    isRussianSelected () {
      return this.languageSelected === 'russian'
    }
  },
  mounted () {
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      this.currentLink = 'home'
    } else if (currentPath === '/designs') {
      this.currentLink = 'designs'
    } else if (currentPath === '/lookbook') {
      this.currentLink = 'lookbook'
    }
    setTimeout(() => {
      this.toggleMenu()
    }, 100)
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
      const menu = document.querySelector('.menu')
      if (this.showMenu) {
        menu.classList.add('show')
      } else {
        menu.classList.remove('show')
      }
    },
    changeTextLanguage () {
      this.showMenu = false
      setTimeout(() => {
        if (this.languageSelected === 'english') {
          this.languageSelected = 'russian'
          localStorage.setItem('languageSelected', 'russian')
          this.$emit('setTextLanguage', 'russian')
        } else {
          this.languageSelected = 'english'
          localStorage.setItem('languageSelected', 'english')
          this.$emit('setTextLanguage', 'english')
        }
        setTimeout(() => {
          this.showMenu = true
        }, 50)
      }, 50)
    }
  }
}

</script>

<style scoped>
.language-toggle{
  position: absolute;
  right: 10px;
}

@media (max-width: 767px) {
  .language-toggle{
    position: absolute;
    right: 15px;
  }
}

.label-text-left{
  margin-right: 5px;
}
.label {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
}

@media (max-width: 767px) {
  .label {
      position: absolute;
      right: 5px;
  }
}

.label-text {
  margin-left: 5px;
  font-family: Play-Regular;
  color: black;
}

.toggle {
  isolation: isolate;
  position: relative;
  height: 7.5px;
  width: 15px;
  margin-top: 4px;
  border-radius: 15px;
  overflow: hidden;
  border: 1px solid #e6e6e6;
}

.toggle-state {
  display: none;
}

.indicator {
  height: 100%;
  width: 200%;
  background: #474747;
  border-radius: 15px;
  transform: translate3d(-75%, 0, 0);
  transition: transform 0.3s cubic-bezier(0.85, 0.05, 0.18, 1.35);
  box-shadow:
    -8px -4px 8px 0px #ffffff,
    8px 4px 12px 0px #ffffff;
}

.toggle-state:checked ~ .indicator {
  transform: translate3d(25%, 0, 0);
}

.container {
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}

@media (max-width: 767px) {
  .container {
    background-color: white;
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: center;
    margin: 10px;
  }
}

.header-brand {
  width: 30px;
  height: 30px;
  margin-right: 235px;
  padding: 20px 0px;
}

@media (max-width: 767px) {
  .header-brand {
    width: 30px;
    height: 30px;
    margin-right: 280px;
    padding: 20px 0px;
  }
}

.img-icon {
  width: 30px;
  height: 30px;
}

@media (max-width: 767px) {
.img-icon {
    margin-top: 12px;
  }
}

ul.menu {
  padding: 0;
  display: block;
  position: absolute;
  top: 10px;
  margin-left: 50px;
  width: fit-content;
}

@media (max-width: 767px) {
  ul.menu {
    margin-top: 40px;
    margin-left: 50px;
    width: 100%;
  }
}

li {
  display: inline-block;
  list-style: none;
  padding: 0 13px;
}

a {
  font-family: Wan;
  color: #111;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 8px;
  text-transform: uppercase;
  font-weight: bold;
}

.russian-font{
  font-family: Play-Regular;
  color: #111;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 8.5px;
  text-transform: uppercase;
  font-weight: bold;
}

.show {
  cursor:initial;
}

li.active a {
  padding-bottom: 8px;
  border-bottom: 1px solid #e4e4e4;
}
@media only screen and (min-width: 1000px) {

  .img-icon {
    width: 30px;
    height: 30px;
  }
}

.menu {
  transform: translateX(-20px);
  opacity: 0;
  transition: all 0.3s;
}

.menu.show {
  transform: translateX(0);
  opacity: 1;
}

/* Slide animation */
.sliding-enter-active,
.sliding-leave-active {
  transition: all 0.3s;
}

.sliding-enter {
  transform: translateX(-20px);
  opacity: 0;
}

.sliding-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.sliding-leave {
  transform: translateX(0);
  opacity: 1;
}

.sliding-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}

</style>
