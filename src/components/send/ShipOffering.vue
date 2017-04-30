<template>
  <div class="ship_offering__form">
    <div class="ship_offering__form__address">
      <input type="text" class="text-input text-input--underbar text_area" v-model="name" placeholder="To: " value="">
    </div>
    <div class="ship_offering__form__datetime">
      <input type="text" class="text-input text-input--underbar text_area" v-model="datetime" placeholder="Datetime:" value="">
    </div>
    <div class="ship_offering__form__from_where">
      <input type="text" class="text-input text-input--underbar text_area" v-model="projectFrom" placeholder="From where:" value="">
    </div>
    <div class="ship_offering__form__to_where">
      <input type="text" class="text-input text-input--underbar text_area" v-model="projectTo" placeholder="To where:" value="">
    </div>
    <div class="ship_offering__form__purpose">
      <input type="text" class="text-input text-input--underbar text_area" v-model="purpose" placeholder="Purpose:" value="">
    </div>
    <div class="ship_offering__form__email">
      <input type="text" class="text-input text-input--underbar text_area" v-model="mail" placeholder="Email:" value="">
    </div>

    <button class="button--large--cta process_confirm" style="width: 95%;" @click="processConfirm()">Confirm</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ShipOffering',
  data() {
    return {
      datetime: '',
      projectFrom: '',
      projectTo: '',
      purpose: '',
      name: '',
      receiverUserId: '',
      mail: '',
    }
  },
  methods: {
    processConfirm: function() {
      let self = this;

      let config = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        }
      }
      axios.post('https://cvqwleho24.execute-api.ap-northeast-1.amazonaws.com/Dev?type=makeproject', JSON.stringify({
        Datetime: self.datetime,
        ProjectFrom: self.projectFrom,
        ProjectTo: self.projectTo,
        Purpose: self.purpose,
        Name: self.name,
        RecieverUserId: self.receiverUserId,
        Mail: self.mail
       }), config).then(response => {
         console.log(response)
         self.$router.push({ path: '/myprojects/projects' })
       }).catch(error => {
        console.log(error)
      })
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
