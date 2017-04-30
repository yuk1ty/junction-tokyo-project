<template>
  <div>
    <div class="logo">
      <img src="./CROWDGIFT-LOGO.png" width="319" height="274" />
    </div>

    <ul class="list list--inset">
      <li class="list-item list--inset__item list-item--chevron list-item--tappable top-nav">
        <div class="list-item__center"><router-link to="/send/dashboard">Send</router-link></div>
      </li>
      <li class="list-item list--inset__item list-item--chevron list-item--tappable top-nav">
        <div class="list-item__center"><router-link to="/join/dashboard">Join</router-link></div>
      </li>
    </ul>

    <div class="tabbar">
      <label class="tabbar__item">
        <button class="tabbar__button" @click="confirmedProjects()">
          <i class="tabbar__icon zmdi zmdi-info"></i>
        </button>
      </label>

      <label class="tabbar__item">
        <button class="tabbar__button" @click="myProjects()">
          <i class="tabbar__icon zmdi zmdi-format-list-bulleted"></i>
        </button>
      </label>

      <label class="tabbar__item">
        <button class="tabbar__button" @click="userProfile()">
          <i class="tabbar__icon zmdi zmdi-account"></i>
        </button>
      </label>

      <label class="tabbar__item">
        <button class="tabbar__button" @click="chat()">
          <i class="tabbar__icon zmdi zmdi-comments"></i>
        </button>
      </label>
    </div>
  </div>
</template>

<script>
// TODO
// import Icon from 'vue-awesome/components/Icon'
import Icon from 'vue-awesome'
const USER_ID = 1

export default {
  name: 'Main',
  methods: {
    confirmedProjects: function() {
      this.$router.push({ path: '/confirmed/projects' })
    },
    myProjects: function() {
      this.$router.push({ path: '/myprojects/projects' })
    },
    userProfile: function() {
      this.$router.push({ name: 'user', params: { id: USER_ID } })
    },
    chat: function() {
      this.$router.push({ path: '/chat' })
    }
  },
  components: {
    'icon': Icon
  }
}
</script>

<style>
.logo {
  margin-top: 100px;
  margin-bottom: 30px;
}

.list-item__center a {
  color: #116cb0;
  /*color: #666;*/
  text-decoration: none;
}

.top-nav a {
  display: block;
  width: 100%;
  height: 100%;
  color: #666;
  text-decoration: none;
}
</style>
