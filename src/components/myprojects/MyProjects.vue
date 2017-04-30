<template>
  <div>
    <application-header title="My Projects" direction="/"></application-header>

    <div class="confirmed__list--result">
      <div class="list">
        <div class="list-item list-item--chevron" v-for="result in search_results">
          <div class="list-item__left">
            <!-- <span class="date">{{ result.fromDatetime }}</span> -->
            <span class="date">{{ result.From.Date }}</span>
          </div>

          <div class="list-item__center">
            <div class="list-item__title"><router-link :to="uri">{{ result.Title }}</router-link></div>
            <div class="list-item__subtitle">{{ result.From.Station }} - {{ result.To.Station }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import axios from 'axios'

const BASE_URI = '/myprojects/projects/detail'

const CONFIG = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }
}

export default {
  name: 'MyProjects',
  components: {
    'application-header': ApplicationHeader
  },
  data() {
    let results = []
    axios.get('https://cvqwleho24.execute-api.ap-northeast-1.amazonaws.com/Dev?type=getprojects', CONFIG).then(response => {
      let projects = response.data.projects
      for (let i = 0; i < projects.length; i++) {
        results.push(projects[i].Ticket)
      }
    }).catch(error => {
      console.log(error)
    })

    return {
      search_results: results,
      uri: BASE_URI + '/1'
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
