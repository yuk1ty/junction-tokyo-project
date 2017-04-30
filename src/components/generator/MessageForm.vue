<template>
  <div>
    <application-header title="おめでとう作文" direction="/"></application-header>
    <h2>To XXX</h2>
    <h3>Purpose</h3>
    <p>
      Celebrate XXX's birthday!
    </p>

    <div class="random_message">
      <p>
        H: <input type="text" class="text-input text-input--underbar text_area" v-model="message1" />
      </p>
      <p>
        A: <input type="text" class="text-input text-input--underbar text_area" v-model="message2" />
      </p>
      <p>
        P: <input type="text" class="text-input text-input--underbar text_area" v-model="message3" />
      </p>
      <p>
        P: <input type="text" class="text-input text-input--underbar text_area" v-model="message4" />
      </p>
      <p>
        Y: <input type="text" class="text-input text-input--underbar text_area" v-model="message5" />
      </p>
    </div>

    <button class="button--large--cta" style="width: 95%; margin: 0 auto;" @click="add(message1 + message2 + message3 + message4 + message5)">Confirm</button>

  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import { mapMutations } from 'vuex'

export default {
  name: 'MessageForm',
  data() {
    return {
      // TODO www
      message1: 'お誕生日',
      message2: 'おめでとう',
      message3: '今年一年は',
      message4: '',
      message5: 'かな？'
    }
  },
  components: {
    'application-header': ApplicationHeader,
  },
  methods: {
    add: function(message) {
      // ちょっと強引だがUserNameをキーにメッセージを登録。
      localStorage.setItem("userName", message)
      this.$router.push({ path: '/receiver/dashboard' })
    }
  }
}
</script>

<style>
.random_message {
  margin-top: 2.5em;
}

.text_area {
  margin-bottom: 1.4em;
  width: 20em;
}
</style>
