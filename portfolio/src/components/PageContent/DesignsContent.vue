<template>
  <div v-if="textLanguage === 'english'">
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
          v-if="project.englishContent [index] !== undefined"
          class="list-wrapper"
          :class="'list-wrapper' + index"
        >
          <div class="repo-img">
            <img
              class="design2"
              :src="project.englishContent[index].imageSrc"
              alt=""
              rel="preload"
            >
          </div>

          <div class="list-description">
            <h2>{{ project.englishContent[index].title }}</h2>
            <p>
              {{ project.englishContent[index].description }}
            </p>
            <h3>{{ project.englishContent[index].tag }}</h3>
            <div class="repo-button">
              <a
                class="example_c"
                :href="project.englishContent[index].link"
                target="_blank"
                rel="nofollow noopener"
              > <h4>Visit</h4></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactContent />
  </div>
  <div v-else>
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
          v-if="project.russianContent [index] !== undefined"
          class="list-wrapper"
          :class="'list-wrapper' + index"
        >
          <div class="repo-img">
            <img
              class="design2"
              :src="project.russianContent[index].imageSrc"
              alt=""
              rel="preload"
            >
          </div>

          <div class="list-description">
            <h2>{{ project.russianContent[index].title }}</h2>
            <p>
              {{ project.russianContent[index].description }}
            </p>
            <h3>{{ project.russianContent[index].tag }}</h3>
            <div class="repo-button">
              <a
                class="example_c"
                :href="project.russianContent[index].link"
                target="_blank"
                rel="nofollow noopener"
              > <h4>Visit</h4></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ContactContent />
  </div>
</template>

<script>
import designContent from '../../assets/configs/designs-config.js'
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
      projects: designContent,
      numberOfProjects: [0, 1, 2]
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
.small0, .small0russian{
  margin-top: 40px;
}

img:hover {
  cursor: default;
}

.list-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: auto;
  min-height: 200px;
  max-height: 250px;
  margin-bottom: 30px;
}

.list-wrapper0{
  margin-top: 20px;
}

.list-wrapper0russian{
  margin-bottom: 0px;

}

.repo-img img{
  height: 100%;
  width: 200px;
  padding: 0px 0px 0px 0px;
}

.repo-img:hover{
  transition: .5s ease;
}

.list-description{
  width: 562px;
  height: 562px;
  padding-top: 0;
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
  padding: 200px 0px 0px 50px;
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
  position: absolute;
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

  @media (max-width: 767px) {
    .list-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: auto;
    margin: 5px;
    min-height: 300px;
    max-height: 300px;
    margin-bottom: 30px;
  }
}

@media (max-width: 767px) {
    .list-wrapper0{
      margin-bottom: 50px;
  }
}

@media (max-width: 767px) {
    .list-wrapper0russian{
      margin-bottom: 50px;
  }
}

@media (max-width: 767px) {
  .repo-img img{
  height: 100%;
  width: 100px;
  margin-right: 20px;
  padding: 0px 0px 0px 0px;
  }
}

@media (max-width: 767px) {
  .list-description{
  width: 100%;
  padding-top: 0;
  margin: 0;
  height: auto;
  }
}

@media (max-width: 767px) {
  .list-description h2 {
  text-align: left;
  width: 100%;
  font-family: Wan;
  height: 10px;
  letter-spacing: 4px;
  color: black;
  line-height: 10px;
  padding-top: 0px;
  padding-left: 0px;
  font-size: 9px;
  text-transform: uppercase;
  margin: 0;
  }
}

@media (max-width: 767px) {
    .list-description h3 {
    padding-left: 0px;
  }
}

@media (max-width: 767px) {
  .list-description p {
    text-align: left;
    margin: 0;
    width: 100%;
    font-family: Play-Regular;
    letter-spacing: 0px;
    color: black;
    line-height: 20px;
    font-size: 10px;
    text-transform: none;
    padding: 15px 0px 0px 0px;
  }
}

@media (max-width: 767px) {
  .repo-button {
    padding-left: 0px;
  }
}

</style>
