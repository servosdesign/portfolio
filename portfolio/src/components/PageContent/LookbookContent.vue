<template>
  <div class="wrapper">
    <div
      v-for="items in lookbook"
      :key="items.order"
    >
      <img
        :src="items.imageSrc"
        alt=""
      >
    </div>
  </div>
</template>

<script lang="ts" src="./LookbookContent.ts" />

<style scoped>
.wrapper{
  display: flex;
    justify-content: center;
    flex-flow: row wrap;
    margin: 0 auto;
    margin-top: 100px;
}
img:hover {
  cursor: default;
}
div {
  width: 100%;
}
img {
  display:block;
    margin:auto;
}
</style>
