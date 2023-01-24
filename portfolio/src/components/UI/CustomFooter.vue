<template>
  <footer>
    <div id="wrapper-lm">
      <ul>
        <li>
          <h2>frontend </h2>
        </li>
        <li>
          <h2>design </h2>
        </li>
        <li>
          <h2>UI/UX </h2>
        </li>
      </ul>
    </div>
    <div id="wrapper-sm">
      <ul>
        <li>
          <h2>soundcloud: </h2>
        </li>
        <li>
          <h2>github: </h2>
        </li>
        <li>
          <h2>contact: </h2>
        </li>
      </ul>
      <div>
        <a
          href="https://i0n2.bandcamp.com/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="img-sc"
            src="../../assets/images/soundcloud-logo.png"
            alt=""
          ></a>
        <a
          href="https://github.com/servosdesign"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            class="img-gh"
            src="../../assets/images/github-logo.png"
            alt=""
          ></a>
        <a href="mailto:servos.design0@gmail.com">
          <img
            class="img-email"
            src="../../assets/images/email-logo.png"
            alt=""
          ></a>
      </div>
    </div>
    <div class="scroll-wrapper">
      <ScrollButton />
    </div>
  </footer>
</template>

<script>
import ScrollButton from '../UI/ScrollButton.vue'

export default {
  components: {
    ScrollButton
  },
  data () {
    return {}
  }
}

</script>

<style scoped>
.scroll-wrapper{
justify-content: center;
width: 99%;
align-items: center;
position: absolute;
margin-top: 160px;
}

#wrapper-sm{
  float: right;
  display: flex;
  flex-direction: row;
  margin-right: 250px;
}

#wrapper-lm{
  float: left;
  display: flex;
  flex-direction: row;
  margin-left: 250px;
}

footer {
  background-color: rgba(255, 255, 255, 0.322);
  width: 100%;
  padding-bottom: 5px;
  height: 175px;
}

h2{
  text-align: right;
  font-family: Wan;
  letter-spacing: 5px;
  width: 100px;
  color: black;
  float: center;
  line-height: 50px;
  font-size: 6px;
  margin: 0px;
  text-transform: uppercase;
}
div{
  display: flex;
  flex-direction: column;
  margin-top: 11px;
}

li {
  list-style: none;
  margin: 0px;
  width: 100px;
}

img {
  width: 50px;
  height: 50px;
  float: left;
}
</style>
