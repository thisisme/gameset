import Vue from 'vue'

const state = {}

const mutations = {}

const getters = {}

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

    console.log(data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
