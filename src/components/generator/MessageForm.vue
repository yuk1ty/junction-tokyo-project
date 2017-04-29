<template>
  <div>
    <application-header title="おめでとう作文" direction="/"></application-header>
    <h2>To XXX</h2>
    <p>
      目的
    </p>
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
