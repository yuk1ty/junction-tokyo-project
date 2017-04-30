<template>
<div>
  <application-header title="Chat" direction="/"></application-header>
  <div class="message">
    メッセージのやりとりをするためのチャットルームを作ろう
  </div>
</div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'

export default {
  name: 'Chat',
  components: {
    'application-header': ApplicationHeader
  }
}
</script>
<style>
.message {
  margin-top: 50px;
}
</style>
