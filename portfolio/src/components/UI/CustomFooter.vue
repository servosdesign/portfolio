<template>
  <footer>
    <!--
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
    -->
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
