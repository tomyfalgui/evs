import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import db from './DB'
import constants from './constants'
import * as XLSX from 'xlsx'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import firebase from 'firebase'
const config = {
  apiKey: 'AIzaSyAyoiibg1AitZOlh-HDEALhOzLpVyP7Bzw',
  projectId: 'evssync',
  authDomain: 'evssync.firebaseapp.com',
  databaseURL: 'https://evssync.firebaseio.com'
}

const fire = firebase.initializeApp(config)
const firedb = fire.database()
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$const = constants
Vue.prototype.$xlsx = XLSX
Vue.prototype.$firedb = firedb
/* eslint-disable no-new */

new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
