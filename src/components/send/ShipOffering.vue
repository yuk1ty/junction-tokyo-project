<template>
  <div class="ship_offering__form">
    <div class="ship_offering__form__address">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="To: " value="">
    </div>
    <div class="ship_offering__form__datetime">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="Datetime:" value="">
    </div>
    <div class="ship_offering__form__from_where">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="From where:" value="">
    </div>
    <div class="ship_offering__form__to_where">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="To where:" value="">
    </div>
    <div class="ship_offering__form__purpose">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="Purpose:" value="">
    </div>
    <div class="ship_offering__form__email">
      <input type="text" class="text-input text-input--underbar text_area" placeholder="Email:" value="">
    </div>

    <button class="button--large--cta process_confirm" style="width: 95%;" @click="processConfirm()">Confirm</button>
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

<style>
.ship_offering__form {
  margin-top: 50px;
}

.process_confirm {
  margin: 0 auto;
  margin-top: 50px;
}

.text_area {
  margin-bottom: 1.4em;
  width: 20em;
}
</style>
