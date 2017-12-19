import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Layout from '../components/page/Layout/Layout.vue'
import Home from '../components/page/Home/Home.vue'
import Notice from '../components/page/Notice/Notice.vue'
import NoticeD from '../components/page/Notice/NoticeD.vue'
import AddNotice from '../components/page/Notice/AddNotice.vue'
import My from '../components/page/My/My.vue'
import Map from '../components/page/Map/Map.vue'
import Login from '../components/page/Login/Login.vue'
import Register from '../components/page/Register/Register.vue'

import About from '../components/page/About/About.vue'
import Instr from '../components/page/About/Instr.vue'
import AddressBook from '../components/page/AddressBook/AddressBook.vue'
import Find from '../components/page/Find/Find.vue'
import Politics from '../components/page/Politics/Politics.vue'
import PoliticsD from '../components/page/Politics/PoliticsD.vue'
import ManagePage from '../components/page/ManagePage/ManagePage.vue'
import PubManagePage from '../components/page/ManagePage/PubManagePage.vue'
import ManageD from '../components/page/ManagePage/ManageD.vue'
import RootManagePage from '../components/page/RootManagePage/ManagePage.vue'
import ToolManagePage from '../components/page/ToolManagePage/ManagePage.vue'

import Table from '../components/page/Table/Table.vue'

import RootManageD from '../components/page/RootManagePage/ManageD.vue'
import ToolManageD from '../components/page/ToolManagePage/ManageD.vue'
import SelectRoot from '../components/page/SelectRoot/ManagePage.vue'
import SelectRootD from '../components/page/SelectRoot/ManageD.vue'
import SelectPersonnel from '../components/page/SelectPersonnel/ManagePage.vue'
import SelectPersonnelD from '../components/page/SelectPersonnel/ManageD.vue'
import Scan from '../components/page/Scan/Scan.vue'

import IMagement from '../components/page/IncidentManagement/IncidentManagement.vue'
import IMagementPush from '../components/page/IncidentManagement/IncidentManagementPush.vue'
import IMagementQs from '../components/page/IncidentManagement/IncidentManagementQs.vue'
import IMagementHandle from '../components/page/IncidentManagement/IncidentManagementHandle.vue'
import IMagementHandleD from '../components/page/IncidentManagement/IncidentManagementHandleD.vue'

Vue.use(Router)

export default new Router({
  routes: [
    
     {
      path: '/',
      // name: 'layout',
      component: Layout,
      children: [
        { path: '/', redirect: '/home' },
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/find',
          name: 'find',
          component: Find
        },
        {
          path: '/addressBook',
          name: 'addressBook',
          component: AddressBook
        },
         {
          path: '/my',
          name: 'my',
          component: My
        },
         {
          path: '/map',
          name: 'map',
          component: Map
        }

      ]
    },
    {
      path:'/notice',
      name: 'notice',
      component: Notice
    },{
      path:'/noticeD/:id',
      name: 'noticeD',
      component: NoticeD
    },{
      path:'/addNotice',
      name: 'addNotice',
      component:AddNotice
    },{
      path:'/login',
      name: 'login',
      component: Login
    }
    ,
    {
      path:'/register',
      name: 'register',
      component:Register
    },
    
    {
      path:'/about',
      name: 'about',
      component: About
    },
    {
      path:'/instr',
      name: 'instr',
      component: Instr
    },
    {
      path:'/politics',
      name: 'politics',
      component: Politics
    },
    {
      path:'/politicsD/:id',
      name: 'politicsD',
      component: PoliticsD
    },
   
     {
      path:'/managePage',
      name: 'managePage',
      component: ManagePage
    },
    {
      path:'/pubManagePage',
      name: 'pubManagePage',
      component: PubManagePage
    },
     {
      path:'/manageD/:id',
      name: 'manageD',
      component: ManageD
    },
     {
      path:'/rootManagePage',
      name: 'rootManagePage',
      component: RootManagePage
    },
    {
      path:'/toolManagePage',
      name: 'toolManagePage',
      component:ToolManagePage
    },
   
    {
      path:'/rootManageD/:id',
      name: 'rootManageD',
      component:RootManageD
    },
      {
      path:'/toolManageD/:id',
      name: 'toolManageD',
      component:ToolManageD
    },
    {
      path:'/selectRoot',
      name: 'selectRoot',
      component:SelectRoot
    },

    {
      path:'/selectRootD/:id',
      name: 'selectRootD',
      component:SelectRootD
    },


    
    {
      path:'/selectPersonnel',
      name: 'selectPersonnel',
      component:SelectPersonnel
    },
     {
      path:'/selectPersonnelD/:id',
      name: 'selectPersonnelD',
      component:SelectPersonnelD
    },
  
    {
      path:'/table/:id',
      name: 'table',
      component: Table
    },
  
    {
      path:'/scan',
      name: 'scan',
      component: Scan
    }
    
    ,
  
    {
      path:'/imagement',
      name: 'imagement',
      component: IMagement
    }
    
    ,
  
    {
      path:'/imagementPush',
      name: 'imagementPush',
      component: IMagementPush
    },
    
  
    {
      path:'/imagementQs',
      name: 'imagementQs',
      component: IMagementQs
    },
    
     {
      path:'/imagementHandle',
      name: 'imagementHandle',
      component: IMagementHandle
    },
     {
      path:'/imagementHandleD',
      name: 'imagementHandleD',
      component: IMagementHandleD
    }
   
  ]
})
