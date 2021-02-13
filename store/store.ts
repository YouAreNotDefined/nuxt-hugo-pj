import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  'commonLinks': [
    {
      to: '/',
      text: 'Bouzuweed',
      img: true
    }, {
      to: '/about',
      text: 'ABOUT ME',
      img: false
    }
  ]
}

export default new Vuex.Store({
  state,
  getters: {}
})
