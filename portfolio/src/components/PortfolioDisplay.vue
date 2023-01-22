<template>
  <div>
    <div v-if="isFirstPage">
      <ProjectsContent />
    </div>

    <div v-if="isSecondPage">
      <DesignsContent />
    </div>

    <div v-if="isThirdPage">
      <LookbookContent />
    </div>

    <div>
      <ContactContent />
    </div>
  </div>
</template>

<script>
import ProjectsContent from './PageContent/ProjectsContent.vue'
import DesignsContent from './PageContent/DesignsContent.vue'
import LookbookContent from './PageContent/LookbookContent.vue'
import ContactContent from './PageContent/ContactContent.vue'

export default {
  components: {
    ProjectsContent,
    DesignsContent,
    LookbookContent,
    ContactContent
  },
  props: {
    pageNumber: {
      type: Number,
      default: 0
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
