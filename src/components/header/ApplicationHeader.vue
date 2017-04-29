<template>
  <div class="toolbar toolbar--material">
    <div class="toolbar__left toolbar--material__left">
      <span class="toolbar-button toolbar-button--material"><router-link :to="direction">Back</router-link></span>
    </div>
    <div class="toolbar__center toolbar--material__center">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApplicationHeader',
  props: ['title', 'direction']
}
</script>
