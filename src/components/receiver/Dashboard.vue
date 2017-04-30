<template>
  <div>
    <application-header title="Your Message" direction="/"></application-header>
    <div class="center message_board">
      <p>
      {{ message }}
      </p>
    </div>
  </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'

export default {
  name: 'ReceiverDashboard',
  data() {
    return {
      message: localStorage.userName
    }
  },
  components: {
    'application-header': ApplicationHeader
  }
}
</script>

<style>
.message_board {
  margin: 200px 2em;
  padding: 25px 40px;
  background: #CFCFC4;
}
</style>
