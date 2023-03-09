<template>
  <div>
    <div v-if="isFirstPage">
      <ProjectsContent :text-language="textLanguage" />
    </div>

    <div v-if="isSecondPage">
      <DesignsContent :text-language="textLanguage" />
    </div>

    <div v-if="isThirdPage">
      <LookbookContent />
    </div>
  </div>
</template>

<script>
import ProjectsContent from './PageContent/ProjectsContent.vue'
import DesignsContent from './PageContent/DesignsContent.vue'
import LookbookContent from './PageContent/LookbookContent.vue'

export default {
  components: {
    ProjectsContent,
    DesignsContent,
    LookbookContent
  },
  props: {
    pageNumber: {
      type: Number,
      default: 0
    },
    textLanguage: {
      type: String,
      default: 'english'
    }
  },
  data () {
    return {}
  },
  computed: {
    isFirstPage () {
      return this.pageNumber === 0
    },
    isSecondPage () {
      return this.pageNumber === 1
    },
    isThirdPage () {
      return this.pageNumber === 2
    }
  }
}
</script>
