import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  { 
        path: '', 
        redirect: '/Home page'
       },
       
       {
        path: '/top',
        component: () => import('../views/Thefrontend/top.vue'),
        
          children: [
           
            {
              path: '/about',
              component: () => import('../views/Thefrontend/about.vue')
          
            },
            {
              path: '/account',
              component: () => import('../views/Thefrontend/account.vue')
          
            },
            {
              path: '/borrowing',
              component: () => import('../views/Thefrontend/borrowing.vue')
          
            },
            {
              path: '/disclosure',
              component: () => import('../views/Thefrontend/disclosure.vue')
          
            },
            {
              path: '/cheshi',
              component: () => import('../views/Thefrontend/cheshi.vue')
          
            },
            {
              path: '/Home page',
              component: () => import('../views/Home page.vue')
          
            },
              
          ]
        },
      

  {
    path: '/login',
    component: () => import('../views/login.vue')
  },


]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
