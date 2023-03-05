<template>
  <header>
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
        <transition
          name="sliding"
        >
          <ul
            class="menu"
            :class="{ show: showMenu }"
          >
            <li :class="{ active: currentLink === 'home' }">
              <a
                href="/"
                @click="toggleMenu"
              >Projects</a>
            </li>
            <li :class="{ active: currentLink === 'design' }">
              <a
                href="/design"
                @click="toggleMenu"
              >Designs</a>
            </li>
            <li :class="{ active: currentLink === 'lookbook' }">
              <a
                href="/lookbook"
                @click="toggleMenu"
              >Lookbook</a>
            </li>
          </ul>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false,
      currentLink: 'home'
    }
  },
  mounted () {
    const currentPath = window.location.pathname
    if (currentPath === '/') {
      this.currentLink = 'home'
    } else if (currentPath === '/design') {
      this.currentLink = 'design'
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
    }
  }
}
</script>

<style scoped>
.container {
  background-color: white;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
}

.header-brand {
  width: 30px;
  height: 30px;
  margin-right: 235px;
  padding: 20px 0px;
}

.img-icon {
  width: 30px;
  height: 30px;
}

ul.menu {
  padding: 0;
  display: block;
  position: absolute;
  top: 20px;
  margin-left: 50px;
  width: fit-content;
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

a:hover {
  color: #474747;
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
