import Vue from 'vue'

const state = {
  hello: ''
}

const mutations = {
  setHello (state, payload) {
    state.hello = payload
  }
}

const getters = {
  hello: state => {
    return state.hello
  }
}

const actions = {
  hello: async (context) => {
    const path = '/.netlify/functions/hello'

    let response = {}
    try {
      response = await Vue.axios.get(path)
    } catch (error) {
      return Promise.reject(new Error(error))
    }

    const data = response.data

    context.commit('setHello', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
