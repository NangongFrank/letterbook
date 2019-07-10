import Vue from 'vue'
import App from './App'
import "static/font/iconfont.css"
import {date} from '@/extends/functions'

Vue.prototype.$date = date
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
