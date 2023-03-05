<template>
  <div class="top">
    <div
      v-for="(index) in numberOfProjects"
      :key="index"
    >
      <div
        v-for="project in projects"
        :key="project.length"
      >
        <!--LEFT-->
        <div
          v-if="project.leftAligned[index] !== undefined"
          class="list-wrapper"
        >
          <div class="repo-img">
            <img
              class="design2"
              :src="project.leftAligned[index].imageSrc"
              alt=""
              rel="preload"
            >
          </div>

          <div class="list-description">
            <h2>{{ project.leftAligned[index].title }}</h2>
            <p>
              {{ project.leftAligned[index].description }}
            </p>

            <h3>{{ project.leftAligned[index].tag }}</h3>
            <div
              v-if="!project.leftAligned[index].uniqueButton"
              class="repo-button"
            >
              <a
                class="example_c"
                :href="project.leftAligned[index].link"
                target="_blank"
                rel="nofollow noopener"
              >
                <h4>Github</h4>
              </a>
            </div>
            <div v-if="project.leftAligned[index].uniqueButton">
              <div class="repo-button">
                <a
                  class="example_c vue"
                  :href="project.leftAligned[index].link"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>Vue.js</h4>
                </a>
              </div>
              <div class="repo-button unique">
                <a
                  class="example_c javascript"
                  :href="project.leftAligned[index].uniqueLink"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>JavaScript</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
        <!--RIGHT
        <div
          v-if="project.rightAligned[index] !== undefined"
          class="list-wrapper move"
        >
          <div class="list-description">
            <h2>{{ project.rightAligned[index].title }}</h2>
            <p>{{ project.rightAligned[index].description }}</p>
            <h3>{{ project.rightAligned[index].tag }}</h3>
            <div class="repo-button">
              <a
                class="example_c"
                :href="project.rightAligned[index].link"
                target="_blank"
                rel="nofollow noopener"
              >
                <h4>GitHub</h4>
              </a>
            </div>
          </div>
          <div class="repo-img">
            <img
              class="design2"
              :src="project.rightAligned[index].imageSrc"
              alt=""
            >
          </div>
        </div>
            -->
      </div>
    </div>
    <div class="bottom" />
    <ContactContent />
  </div>
</template>

<script>
import projectContent from '../../assets/configs/projects-config.js'
import numberOfProjectsArrayLength from '../../assets/configs/config.js'
import ContactContent from './ContactContent.vue'

export default {
  components: {
    ContactContent
  },
  data () {
    return {
      projects: projectContent,
      numberOfProjects: numberOfProjectsArrayLength
    }
  },
  mounted () {
    this.scrollToTop()
  },
  methods: {
    scrollToTop () {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }
}
</script>

<style scoped>
img:hover {
  cursor: default;
}
.list-wrapper {
  display: flex;
  margin: 0 auto;
  height: 250px;
  justify-content: center;
  align-items: center;
}

.top {
  margin-top: 40px;
}

.repo-img{
  width: 200px;
}

.repo-img img{
  height: 100%;
  width: 100%;
  padding: 0px 0px 0px 0px;
}

.bottom {
  margin-bottom: 40px;
}

.repo-img:hover{
  transition: .5s ease;
}

.list-description{
  width: 562px;
  padding-top: 0;
}

.move {
  padding-left: 350px;
}

.list-description h2 {
  text-align: left;
  width: 50%;
  font-family: Wan;
  height: 10px;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 9px;
  text-transform: uppercase;
  padding: 0px 0px 0px 50px;
  margin: 0;
}

.list-description h3 {
  text-align: left;
  order: 0;
  width: 100%;
  font-family: Wan;
  height: 10px;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  font-size: 5px;
  text-transform: uppercase;
  text-transform: bold;
  padding: 10px 0px 0px 50px;
}

.list-description p {
  text-align: left;
  margin: 0;
  width: 80%;
  font-family: Play-Regular;
  letter-spacing: 0px;
  color: black;
  line-height: 20px;
  font-size: 10px;
  text-transform: none;
  padding: 15px 0px 0px 50px;
}

.repo-button{
  position: left;
  display: inline-block;
  padding-top: 12px;
  padding-left: 50px;
}

.unique {
  padding-left: 10px;
}

h4 {
  margin: 0;
}

.example_c {
    font-family: Wan;
    letter-spacing: 1px;
    color: black;
    line-height: 7px;
    font-size: 9px;
    height: 7px;
    text-transform: none;
    text-decoration: none;
    background: #ffffff;
    padding: 4px;
    border: 1px solid #000000 !important;
    display: inline-block;
    transition: all 0.4s ease 0s;
  }

  .example_c:hover {
    color: #ffffff !important;
    background: #000000;
    border-color: #000000 !important;
    transition: all 0.4s ease 0s;
  }

  .vue:hover {
    color: #ffffff !important;
    background: #41B883;
    border-color: #41B883;
    transition: all 0.4s ease 0s;
}

.javascript:hover{
  color: #000000 !important;
  background: #FFFF00;
  border-color: #FFFF00;
  transition: all 0.4s ease 0s;
}
</style>
