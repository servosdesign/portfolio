<template>
  <footer>
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
        <a href="contact.html">
          <img
            class="img-email"
            src="../../assets/images/email-logo.png"
            alt=""
          ></a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
#wrapper-sm{
  float: right;
  display: flex;
  flex-direction: row;
  margin-right: 420px;
}

footer {
  background-color: rgba(255, 255, 255, 0.322);
  width: 100%;
  padding-bottom: 20px;
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

img:hover{
  opacity: 1;
    -webkit-animation: flash 1s;
    animation: flash 1s;
}

@-webkit-keyframes flash {
  0% {
    opacity: .3;
  }

 100% {
    opacity: 1;
  }
}

@keyframes flash {
  0% {
    opacity: .3;
  }

  100% {
    opacity: 1;
  }
}
</style>
