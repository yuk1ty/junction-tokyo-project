import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  messages: []
}

const action = {
  addMessage: ({ commit }, message) => {
    commit('add', message)
  }
}

const getters = {
  getMessages: state => {
    return state.messages
  }
}

const mutations = {
  add(state, message) {
    console.log("comming")
    state.messages.push(message)
  }
}

export const store = new Vuex.Store({
  state,
  action,
  getters,
  mutations
})
