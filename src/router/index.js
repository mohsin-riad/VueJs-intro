import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import History from '@/components/History'
import AboutHistory from '@/components/AboutHistory'
import Parent from '@/components/Parent'
import Child from '@/components/Child'
import List from '@/components/List'
import Employee from '@/components/Employee'
import Insert from '@/components/Insert'
import Update from '@/components/Update'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about-us',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/about-history',
      name: 'AboutHistory',
      component: AboutHistory
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/employee',
      name: 'Employee',
      component: Employee
    },
    {
      path: '/insert',
      name: 'Insert',
      component: Insert
    },
    {
      path: "/update/:id",
      name: 'Update',
      component: Update
    }
  ]
})
