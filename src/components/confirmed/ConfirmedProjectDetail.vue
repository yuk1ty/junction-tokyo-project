<template>
  <div>
    <application-header title="To XXX" direction="/confirmed/projects"></application-header>

    <div class="project_detail__detail">
      <project-detail due="4/15" :timeline="timeline" from="2017/05/01" to="2017/05/31" purpose="HBD"></project-detail>
      <div class="center map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3240.44957040023!2d139.69739011471083!3d35.69055298019216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1493465984926" width="300" height="225" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

      <div class="tabbar">
        <button class="button--large--cta" style="width: 95%; margin: 0 auto;" @click="moveToGenerateMessage()">Message</button>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import ProjectDetail from '@/components/project/ProjectDetail'

export default {
  name: 'ConfirmedProjectDetail',
  components: {
    'application-header': ApplicationHeader,
    'project-detail': ProjectDetail
  },
  methods: {
    moveToGenerateMessage: function() {
      this.$router.push({ path: '/message/form' })
    }
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
