<template>
  <div>
    <application-header title="To XXX" direction="/myprojects/projects"></application-header>
    <project-detail due="4/15" :timeline="timeline" from="20170501" to="20170531" purpose="HBD"></project-detail>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import ProjectDetail from '@/components/project/ProjectDetail'

export default {
  name: 'MyProjectDetail',
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
