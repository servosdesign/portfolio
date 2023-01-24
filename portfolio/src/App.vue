<template>
  <div>
    <CustomHeader />
    <TraverseButtons
      v-if="buttonVisible"
      :increase-page-number="increasePageNumber"
      :decrease-page-number="decreasePageNumber"
      :button-name="buttonName"
    />
    <PortfolioDisplay :page-number="pageNumber" />
    <CustomFooter />
  </div>
</template>

<script lang="ts" src="./App.ts" />

<style>
::-webkit-scrollbar {display:none;}

@font-face {
  src: url(./assets/fonts/wan.ttf);
  font-family: Wan;
}

@font-face {
  src: url(./assets/fonts/Play-Regular.ttf);
  font-family: Play-Regular
}

nav ul {
  list-style: none;
}

* {
  text-decoration: none;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #ffffff;
}
</style>
