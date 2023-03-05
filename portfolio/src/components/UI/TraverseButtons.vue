<template>
  <div>
    <div class="previousButton">
      <ul>
        <li
          class="icon button"
          @click="decreasePageNumber"
        >
          <span class="tooltip">{{ buttonName.previous }}</span>
          <span><i>&lt;</i></span>
        </li>
      </ul>
    </div>

    <div class="nextButton">
      <ul>
        <li
          class="icon button"
          @click="increasePageNumber"
        >
          <span
            id="submition"
            class="tooltip"
          >{{ buttonName.next }}</span>
          <span><i>&gt;</i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    increasePageNumber: {
      default: () => {},
      type: Function
    },
    decreasePageNumber: {
      default: () => {},
      type: Function
    },
    buttonName: {
      default: () => {},
      type: Object
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

* {
  font-family: Play-Regular;
  font-size: 14px;
}

.previousButton{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 650px;
  left: 0;
  margin-left: 40px;
}

.nextButton{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 650px;
  right: 0;
  margin-right: 40px;
}

span{
  font-family: "Montserrat", sans-serif;
}

li:active{
  transform: scale(1.04);
}

.icon {
  position: relative;
  background: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 25px;
  height: 25px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
.icon:hover span,
.icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}
ul {
  padding: 0;
}
.button:hover,
.button:hover .tooltip,
.button:hover .tooltip::before {
  transition: all 0.2s ease 0s;
  background: #0e0e0e;
  color: #ffffff;
}
</style>
