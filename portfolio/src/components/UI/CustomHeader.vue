<template>
  <header>
    <div class="header-brand">
      <a href="/"><img
        class="img-icon"
        src="../../assets/images/header-logo.png"
        alt=""
      ></a>
    </div>
  </header>
</template>

<style scoped>
header {
  background-color: white;
  width: 100%;
  height: 100px;
}

.header-brand {
  width: 30px;
  height: 30px;
  display: block;
  margin: 0 auto;
  position: center;
  padding: 20px 0px;
}

.img-icon {
  width: 30px;
  height: 30px;
}

ul {
  padding: 0;
  display: block;
  margin: 0 auto;
  width: fit-content;
}

li {
  display: inline-block;
  list-style: none;
  padding: 0 16px;
}

a {
  font-family: Wan;
  font-size: 13px;
  font-weight: 0;
  color: #111;
  text-transform: uppercase;
  letter-spacing: 0px;
}

a:hover {
  font-weight: 900;
}

@media only screen and (min-width:1000px) {
  .header-brand {
    width: 30px;
    height: 30px;
    display: block;
    margin: 0 auto;
    position: center;
    padding: 20px 0px;
  }

  .img-icon {
    width: 30px;
    height: 30px;
  }
}
</style>
