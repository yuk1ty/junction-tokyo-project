<template>
  <div>
    <div class="toolbar">
      <div class="toolbar__center">
        Crowd Gift
      </div>
    </div>

    <ul class="list list--inset">
      <li class="list-item list--inset__item list-item--chevron list-item--tappable">
        <div class="list-item__center"><router-link to="/send/dashboard">Send</router-link></div>
      </li>
      <li class="list-item list--inset__item list-item--chevron list-item--tappable">
        <div class="list-item__center"><router-link to="/join/dashboard">Join</router-link></div>
      </li>
    </ul>

    <div class="tabbar">
      <label class="tabbar__item">
        <!-- <input type="radio" name="tabbar-b" checked="checked"> -->
        <button class="tabbar__button" @click="confirmedProjects()">
          <i class="tabbar__icon ion-stop"></i>
        </button>
      </label>

      <label class="tabbar__item">
        <!-- <input type="radio" name="tabbar-b"> -->
        <button class="tabbar__button" @click="userProfile()">
          <i class="tabbar__icon ion-record"></i>
        </button>
      </label>

      <label class="tabbar__item">
        <input type="radio" name="tabbar-b">
        <button class="tabbar__button">
          <i class="tabbar__icon ion-star"></i>
        </button>
      </label>
    </div>
  </div>
</template>

<script>
// TODO
const USER_ID = 1

export default {
  name: 'Main',
  methods: {
    confirmedProjects: function() {
      this.$router.push({ path: '/confirmed/projects' })
    },
    userProfile: function() {
      this.$router.push({ name: 'user', params: { id: USER_ID } })
    }
  }
}
</script>
