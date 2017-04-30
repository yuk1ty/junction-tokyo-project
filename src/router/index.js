import Vue from 'vue'
import 'onsenui'
import VueOnsen from 'vue-onsenui'
import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'

import Router from 'vue-router'
import Main from '@/components/Main'
import ShippingDashboard from '@/components/send/Dashboard'
import ShipOffering from '@/components/send/ShipOffering'
import ParticipateDashboard from '@/components/join/Dashboard'
import ProjectDetail from '@/components/project/ProjectDetail'
import ReceiverDashboard from '@/components/receiver/Dashboard'
import DeliveryStatus from '@/components/join/DeliveryStatus'
import JoinProjectDetail from '@/components/join/JoinProjectDetail'
import ConfirmedProjects from '@/components/confirmed/ConfirmedProjects'
import ConfirmedProjectDetail from '@/components/confirmed/ConfirmedProjectDetail'
import MessageForm from '@/components/generator/MessageForm'
import MyProjects from '@/components/myprojects/MyProjects'
import MyProjectDetail from '@/components/myprojects/MyProjectDetail'
import UserProfile from '@/components/user/UserProfile'
import Chat from '@/components/chat/Chat'

Vue.use(Router)
Vue.use(VueOnsen)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/send/dashboard',
      name: 'ShippingDashboard',
      component: ShippingDashboard
    },
    {
      path: '/send/offering',
      name: 'ShipOffering',
      component: ShipOffering
    },
    {
      path: '/join/status/:id',
      name: 'DeliveryStatus',
      component: DeliveryStatus
    },
    {
      path: '/join/dashboard',
      name: 'ParticipateDashboard',
      component: ParticipateDashboard
    },
    {
      path: '/join/projects/detail/:id',
      component: JoinProjectDetail
    },
    {
      path: '/projects/detail/:id',
      component: ProjectDetail
    },
    {
      path: '/receiver/dashboard',
      name: 'ReceiverDashboard',
      component: ReceiverDashboard
    },
    {
      path: '/confirmed/projects',
      name: 'ConfirmedProjects',
      component: ConfirmedProjects
    },
    {
      path: '/confirmed/projects/detail/:id',
      name: 'ConfirmedProjectDetail',
      component: ConfirmedProjectDetail
    },
    {
      path: '/message/form',
      name: 'MessageForm',
      component: MessageForm
    },
    {
      path: '/myprojects/projects',
      name: 'MyProjects',
      component: MyProjects
    },
    {
      path: '/myprojects/projects/detail/:id',
      name: 'MyProjectDetail',
      component: MyProjectDetail
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserProfile
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})
