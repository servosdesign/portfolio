<template>
  <div>
    <ProjectsContent />
    <DesignsContent />
  </div>
</template>

<script>
import ProjectsContent from './ProjectsContent.vue'
import DesignsContent from './DesignsContent.vue'

export default {
  components: {
    ProjectsContent,
    DesignsContent
  },
  data () {
    return {}
  }
}
</script>
