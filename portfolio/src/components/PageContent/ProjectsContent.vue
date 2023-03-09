<template>
  <div
    v-if="textLanguage === 'english'"
    class="top"
  >
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
          v-if="project.englishContent[index] !== undefined"
          class="list-wrapper"
        >
          <div class="repo-img">
            <img
              class="design2"
              :src="project.englishContent[index].imageSrc"
              alt=""
              rel="preload"
            >
          </div>

          <div
            class="list-description"
            :class="'small'+index"
          >
            <h2>{{ project.englishContent[index].title }}</h2>
            <p>
              {{ project.englishContent[index].description }}
            </p>

            <h3>{{ project.englishContent[index].tag }}</h3>
            <div
              v-if="!project.englishContent[index].uniqueButton"
              class="repo-button"
            >
              <a
                class="example_c"
                :href="project.englishContent[index].link"
                target="_blank"
                rel="nofollow noopener"
              >
                <h4>Github</h4>
              </a>
            </div>
            <div v-if="project.englishContent[index].uniqueButton">
              <div class="repo-button">
                <a
                  class="example_c vue"
                  :href="project.englishContent[index].link"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>Vue.js</h4>
                </a>
              </div>
              <div class="repo-button unique">
                <a
                  class="example_c javascript"
                  :href="project.englishContent[index].uniqueLink"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>JavaScript</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom" />
    <ContactContent />
  </div>
  <div
    v-else
    class="top"
  >
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
          v-if="project.russianContent[index] !== undefined"
          class="list-wrapper"
        >
          <div class="repo-img">
            <img
              class="design2"
              :src="project.russianContent[index].imageSrc"
              alt=""
              rel="preload"
            >
          </div>

          <div
            class="list-description"
            :class="'small'+index"
          >
            <h2>{{ project.russianContent[index].title }}</h2>
            <p>
              {{ project.russianContent[index].description }}
            </p>

            <h3>{{ project.russianContent[index].tag }}</h3>
            <div
              v-if="!project.russianContent[index].uniqueButton"
              class="repo-button"
            >
              <a
                class="example_c"
                :href="project.russianContent[index].link"
                target="_blank"
                rel="nofollow noopener"
              >
                <h4>Github</h4>
              </a>
            </div>
            <div v-if="project.russianContent[index].uniqueButton">
              <div class="repo-button">
                <a
                  class="example_c vue"
                  :href="project.russianContent[index].link"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>Vue.js</h4>
                </a>
              </div>
              <div class="repo-button unique">
                <a
                  class="example_c javascript"
                  :href="project.russianContent[index].uniqueLink"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <h4>JavaScript</h4>
                </a>
              </div>
            </div>
          </div>
        </div>
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
  props: {
    textLanguage: {
      type: String,
      default: 'english'
    }
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
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  height: auto;
  min-height: 250px;
}

.top {
  margin-top: 62px;
}

.repo-img img{
  height: 100%;
  width: 200px;
  padding: 0px 0px 0px 0px;
}

.bottom {
  margin-bottom: 40px;
}

.repo-img:hover{
  transition: .5s ease;
}

.list-description{
  align-items: center;
  width: 562px;
  padding-top: 0;
  margin-bottom: 63px;
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
  margin-top: 0px;
  margin-bottom: 15px;
}

.small0{
  /* for smaller sized descriptions */
  margin-top: 30px;
  margin-bottom: 0px;
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
  padding: 0px 0px 0px 50px; /* remove top padding */
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
