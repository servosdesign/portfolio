<template>
  <div>
    <transition name="fade">
      <div
        v-show="scY > 300"
        id="pagetop"
        class="fixed right-0 bottom-0 arrow"
        @click="toTop"
      />
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scTimer: 0,
      scY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return
      this.scTimer = setTimeout(() => {
        this.scY = window.scrollY
        clearTimeout(this.scTimer)
        this.scTimer = 0
      }, 100)
    },
    toTop: function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style>
.arrow,
.arrow:before {
  position: absolute;
  left: 50%; }

.arrow {
  width: 15px;
  height: 15px;
  top: 50%;
  margin: -20px 0 0 -20px;
  -webkit-transform: rotate(-135deg);
  border-left: none;
  border-top: none;
  border-right: 2px rgb(65, 65, 65) solid;
  border-bottom: 2px rgb(65, 65, 65) solid;
}

.arrow:hover{
  cursor: pointer;
}

.arrow:before {
  content: '';
  width: 10px;
  height: 10px;
  top: 50%;
  margin: -8px 0 0 -8px;
  border-left: none;
  border-top: none;
  border-right: 1px rgb(65, 65, 65) solid;
  border-bottom: 1px rgb(65, 65, 65) solid;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-name: arrow; }

@keyframes arrow {
  0% {
    opacity: 1; }
  100% {
    opacity: 0;
    transform: translate(-10px, -10px); } }

</style>
