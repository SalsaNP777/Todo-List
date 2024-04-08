import Vue from 'vue'
import VueRouter from 'vue-router'
import TodosPage from '@/views/TodosPage.vue'
import TodosDetailPage from '@/views/TodosDetailPage.vue'
import CreatePage from '@/views/CreatePage.vue'
import UpdatePage from '@/views/UpdatePage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/todos', name: 'TodosPage', component: TodosPage },
  { path: '/create', name: 'CreatePage', component: CreatePage},
  { path: '/todos/:id', name: 'TodosDetailPage', component: TodosDetailPage}, 
  { path: '/update/:id', name: 'UpdatePage', component: UpdatePage},
  // { path: '/delete/:id', name: 'DeletePage', component: UpdatePage},
  { path:'/', redirect:'/todos' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
