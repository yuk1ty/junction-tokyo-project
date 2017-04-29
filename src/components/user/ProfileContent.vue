<template>
  <div class="profile-content">
    <p>{{ userName }}</p>
    <p>
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProfileContent',
  props: [ 'user-id' ],
  data() {
    return {
      userName: 'Junction Tokyo 2017',
      message: 'Junction Tokyo 2017に参加中です。よろしくお願いします。'
    }
  }
}
</script>
