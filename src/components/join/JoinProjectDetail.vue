<template>
  <div>
    <application-header title="Project Detail" direction="/join/dashboard"></application-header>

    <div class="project_detail__detail">
      <project-detail due="5/1" :timeline="timeline" from="2017/05/01" to="2017/05/31" purpose="HBD"></project-detail>
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
  },
  data() {
    return {
      timeline:

        [
          {
            Datetime: '2017/04/30 11:30',
            Station: 'Ueno'
          },
          {
            Datetime: '2017/04/30 12:30',
            Station: 'Tokyo'
          },
          // },
          // {
          //   Datetime: '201705011130',
          //   Station: 'Kitasenju'
          // },
          // {
          //   Datetime: '201705011230',
          //   Station: 'Kashiwa'
          // }
        ]

    }
  }
}
</script>
