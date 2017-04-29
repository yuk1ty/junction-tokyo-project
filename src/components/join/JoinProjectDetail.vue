<template>
  <div>
    <application-header title="Project Detail" direction="/join/dashboard"></application-header>

    <div class="project_detail__detail">
      <project-detail due="4/15" :timeline="[ {name: 'name'}, {name: 'name2'}]" from="20170501" to="20170531" purpose="HBD"></project-detail>
    </div>

    <div class="tabbar">
      <button class="button--large--cta" style="width: 95%; margin: 0 auto;">Join!</button>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import ProjectDetail from '@/components/project/ProjectDetail'

export default {
  name: 'JoinProjectDetail',
  components: {
    'application-header': ApplicationHeader,
    'project-detail': ProjectDetail
  }
}
</script>
