<template>
  <div class="ship_offering__form">
    <div class="ship_offering__form__address">
      <input type="text" class="text-input text-input--transparent" placeholder="To: " value="">
    </div>
    <div class="ship_offering__form__datetime">
      <input type="text" class="text-input text-input--transparent" placeholder="Datetime:" value="">
    </div>
    <div class="ship_offering__form__from_where">
      <input type="text" class="text-input text-input--transparent" placeholder="From where:" value="">
    </div>
    <div class="ship_offering__form__to_where">
      <input type="text" class="text-input text-input--transparent" placeholder="To where:" value="">
    </div>
    <div class="ship_offering__form__purpose">
      <input type="text" class="text-input text-input--transparent" placeholder="Purpose:" value="">
    </div>
    <div class="ship_offering__form__email">
      <input type="text" class="text-input text-input--transparent" placeholder="Email:" value="">
    </div>

    <button class="button--large--cta" style="width: 95%; margin: 0 auto;" @click="processConfirm()">Confirm</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShipOffering',
  methods: {
    processConfirm: function() {
      // let config = {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'Access-Control-Allow-Origin': '*',
      //   }
      // }
      // axios.post('https://cvqwleho24.execute-api.ap-northeast-1.amazonaws.com/Dev?type=makeproject', JSON.stringify({
      //   Datetime: 'YYYYMMDDhhmm',
      //   ProjectFrom: 'Tokyo',
      //   ProjectTo: 'Shimbashi',
      //   Purpose: 'String',
      //   Name: 'hanako6',
      //   RecieverUserId: 123,
      //   Mail: 'aaa@test.com'
      // }), config).then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error)
      // })
      // axios.get('https://cvqwleho24.execute-api.ap-northeast-1.amazonaws.com/Dev?type=getprojects', config).then(response => {
      //   console.log(response)
      // }).catch(error => {
      //   console.log(error)
      // })

      // TODO うまく動かないｗ

      this.$router.push({ path: '/myprojects/projects' })
    }
  }
}
</script>
