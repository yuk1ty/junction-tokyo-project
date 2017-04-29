<template>
  <div class="toolbar toolbar--material application-header">
    <div class="toolbar__left toolbar--material__left">
      <span class="toolbar-button toolbar-button--material"><router-link :to="direction"><i class="tabbar__icon zmdi zmdi-arrow-left"></i></router-link></span>
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

<style>
.application-header a[href^="#"] {
  color: #fff;
  text-decoration: none;
}

/*.router-link-active {
  color: #fff;
  text-align: none;
  text-decoration: none;
}*/
</style>
