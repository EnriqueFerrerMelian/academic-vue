import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import StudentCreate from '../views/student/StudentCreate.vue'
import StudentEdit from '../views/student/StudentEdit.vue'
import StudentView from '../views/student/StudentView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/viewe/:id',
    name: 'view',
    component: StudentView
  },
  {
    path: '/createe',
    name: 'create',
    component: StudentCreate
  },
  {
    path: '/edite/:id',
    name: 'edit',
    component: StudentEdit
  }  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
