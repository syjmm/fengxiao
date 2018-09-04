import Vue from 'vue'
import Router from 'vue-router'


import Login from '@/components/login'
import Index from '@/components/index'
import Yewu from '@/components/yewu'
import Mine from '@/components/mine'
import Order from '@/components/order'
import Ordershow from '@/components/ordershow'
import Myuser from '@/components/myuser'
import Tixian from '@/components/tixian'
import Userinfo from '@/components/userinfo'
import Spread from '@/components/spread'
import Sign from '@/components/sign'
import Index3 from '@/components/index3'
import Team from '@/components/team'
import Userlist from '@/components/userlists'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
      {
          path: '/index',
          name: 'index',
          component: Index
      },
      {
          path: '/index3',
          name: 'index3',
          component: Index3
      },
      {
          path: '/yewu',
          name: 'yewu',
          component: Yewu
      },
      {
          path: '/mine',
          name: 'mine',
          component: Mine
      },
      {
          path: '/order',
          name: 'order',
          component: Order
      },
      {
          path: '/ordershow',
          name: 'ordershow',
          component: Ordershow
      },
      {
          path: '/myuser',
          name: 'myuser',
          component: Myuser
      },{
          path: '/userinfo',
          name: 'userinfo',
          component: Userinfo
      },
      {
          path: '/tixian',
          name: 'tixian',
          component: Tixian
      },
      {
          path: '/spread',
          name: 'spread',
          component: Spread
      },
      {
          path: '/sign',
          name: 'sign',
          component: Sign
      },
      {
          path: '/team',
          name: 'team',
          component: Team
      },
      {
          path: '/userlists',
          name: 'userlists',
          component: Userlist
      }

  ]
})
