<template>
    <div class="page">
      <application-header title="Profile" direction="/"></application-header>
      <profile-content :user-id="this.$route.params.id"></profile-content>
    </div>
</template>

<script>
import ApplicationHeader from '@/components/header/ApplicationHeader'
import ProfileContent from '@/components/user/ProfileContent'

export default {
  components: {
    'application-header': ApplicationHeader,
    'profile-content': ProfileContent
  }
}
</script>
