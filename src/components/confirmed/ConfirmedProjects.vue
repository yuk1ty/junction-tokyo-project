<template>
  <div class="confirmed__list">
    <application-header title="Confirmed Projects" direction="/"></application-header>

    <div class="confirmed__list--result">
      <ul class="list" v-if="search_results.length != 0">
        <li class="list-item list-item--chevron" v-for="result in search_results">
          <div class="list-item__left">
            <span class="date">5/1</span>
          </div>

          <div class="list-item__center">
            <div class="list-item__title"><router-link :to="result.href">{{ result.title }}</router-link></div>
            <div class="list-item__subtitle">{{ result.from }} - {{ result.to }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'

const BASE_URI = '/confirmed/projects/detail'

export default {
  name: 'ConfirmedProjects',
  components: {
    'application-header': ApplicationHeader,
  },
  data() {
    return {
      search_results: [{
        title: 'Books for Yuki',
        href: BASE_URI + '/1',
        from: 'Tokyo Station',
        to: 'Ueno Station'
      }, {
        title: 'Books for Yuki',
        href: BASE_URI + '/2',
        from: 'Tokyo Station',
        to: 'Hachioji Station'
      }, {
        title: 'Books for Yuki',
        href: BASE_URI + '/3',
        from: 'Kichijoji Station',
        to: 'Mitaka Station'
      }]
    }
  }
}
</script>

<style>
.date {
  font-family: futura;
  font-size: 1.4em;
  color: #999;
}
</style>
