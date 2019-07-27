import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    },
    add (state, a) {
      state.count += a
    }
  },
  actions: {
    acsetcount (Store) {
      setTimeout(() => {
        // Store.commit('mutations里的方法'，第二个传参)
        Store.commit('add', 100)
      }, 3000)
    }
  }
})
