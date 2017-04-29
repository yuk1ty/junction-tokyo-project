<template>
  <div>
    <application-header title="Join" direction="/"></application-header>

    <div class="join__form">
      <form>
        <div class="join__form__from_where">
          <input type="text" class="text-input text-input--transparent" placeholder="From where:" value="">
        </div>
        <div class="join__form__to_where">
          <input type="text" class="text-input text-input--transparent" placeholder="To where:" value="">
        </div>

        <div class="join__form__datetime">
          <input type="text" class="text-input text-input--transparent" placeholder="Datetime:" value="">
        </div>

        <button class="button--large--cta" style="width: 95%; margin: 0 auto;">Search</button>
      </form>
    </div>

    <div class="join__search_result">
      <ul class="list" v-if="search_results.length != 0">
        <li class="list-item list-item--chevron" v-for="result in search_results">
          <div class="list-item__left">
            <img class="list-item__thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAIAAAADnC86AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAB3RJTUUH3wwJCB8v/9zErgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAAAvSURBVFjD7c0BDQAACAMgtX+KJzWGm4MCdJK6MHVELBaLxWKxWCwWi8VisVj8MV7qBgI2A8rYpgAAAABJRU5ErkJggg==">
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

const BASE_URI = '/join/projects/detail'

export default {
  name: 'ParticipateDashboard',
  components: {
    'application-header': ApplicationHeader,
  },
  data() {
    return {
      search_results: [{
        title: 'xxx',
        href: BASE_URI + '/1',
        from: 'Tokyo Station',
        to: 'Ueno Station'
      }, {
        title: 'yyy',
        href: BASE_URI + '/2',
        from: 'Tokyo Station',
        to: 'Hachioji Station'
      }, {
        title: 'zzz',
        href: BASE_URI + '/3',
        from: 'Kichijoji Station',
        to: 'Mitaka Station'
      }]
    }
  }
}
</script>
