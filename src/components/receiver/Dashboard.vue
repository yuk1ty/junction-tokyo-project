<template>
  <div>
    <application-header title="Your Message" direction="/"></application-header>
    <div class="center">{{ message }}</div>
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
