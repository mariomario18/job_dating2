import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
