<template>
  <div>
    <application-header title="My Projects" direction="/"></application-header>

    <div class="confirmed__list--result">
      <div class="list" v-if="search_results.length != 0">
        <div class="list-item list-item--chevron" v-for="result in search_results">
          <div class="list-item__left">
            {{ result.fromDatetime }}
          </div>

          <div class="list-item__center">
            <div class="list-item__title"><router-link :to="result.href">{{ result.title }}</router-link></div>
            <div class="list-item__subtitle">{{ result.from }} - {{ result.to }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'

const BASE_URI = '/myprojects/projects/detail'

export default {
  name: 'MyProjects',
  components: {
    'application-header': ApplicationHeader
  },
  data() {
    return {
      search_results: [{
        title: 'JON\'s birthday present',
        href: BASE_URI + '/1',
        from: 'Tokyo Station',
        to: 'Ueno Station',
        fromDatetime: '05/01'
      }, {
        title: 'Books for Yuki',
        href: BASE_URI + '/2',
        from: 'Tokyo Station',
        to: 'Hachioji Station',
        fromDatetime: '05/01'
      }, {
        title: 'Delivery Pictures',
        href: BASE_URI + '/3',
        from: 'Kichijoji Station',
        to: 'Mitaka Station',
        fromDatetime: '06/01'
      }]
    }
  }
}
</script>
