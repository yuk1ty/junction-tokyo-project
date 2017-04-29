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
        H: <input type="text" class="text-input text-input--underbar" />
      </p>
      <p>
        A: <input type="text" class="text-input text-input--underbar" />
      </p>
      <p>
        P: <input type="text" class="text-input text-input--underbar" />
      </p>
      <p>
        P: <input type="text" class="text-input text-input--underbar" />
      </p>
      <p>
        Y: <input type="text" class="text-input text-input--underbar" />
      </p>
    </div>

    <div class="tabbar">
      <button class="button--large--cta" style="width: 95%; margin: 0 auto;">Confirm</button>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'

export default {
  name: 'MessageForm',
  components: {
    'application-header': ApplicationHeader,
  }
}
</script>
