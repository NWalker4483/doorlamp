// 0. If using a module system (e.g. via vue-cli), import Vue and VueRouter
// and then call `Vue.use(VueRouter)`.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files

import Gallery from './components/Gallery.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Archive from './components/Archive.vue'
 
// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home},
  { path: '/gallery', component: Gallery},
  { path: '/about', component: About},
  { path: '/archive', component: Archive},
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
new Vue({
  render: h => h(App),
  
  router
}).$mount('#app')

// Now the app has started!