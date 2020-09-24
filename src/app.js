const Vue = require('vue')

module.exports = function createApp(context) {
    return new Vue({
        data:{url:context.url},
        template:`<div>hello 访问的url是: {{ url }}</div>`
    })
  }

// import Vue from 'vue'
// import App from './App.vue'

// export function createApp() {
//     const app = new Vue({
//         reder: h => h(App)
//     })
//     return  {app} 
// }