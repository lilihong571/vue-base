import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo1 from '@/pages/demo1/index.vue'
import Demo2 from "@/pages/demo2/index.vue"
import Demo3 from '@/pages/demo3/index.vue'
import Demo4 from '@/pages/demo4/index.vue'
import Demo5 from '@/pages/demo5/index.vue'
import Demo6 from "@/pages/demo6/index.vue"
import Demo7 from '@/pages/demo7/index.vue'
import IfElse from '@/pages/demo7/if-else.vue'
import VShow from '@/pages/demo7/v-show.vue'
import Demo8 from '@/pages/demo8/index.vue'
import Demo9 from '@/pages/demo9/index.vue'
import DButton from '@/pages/demo9/button.vue'
import Dothis from '@/pages/demo9/dothis.vue'
import Demo10 from '@/pages/demo10/index.vue'
import Checkbox from '@/pages/demo10/checkbox.vue'
import Select from '@/pages/demo10/select.vue'
import Demo11 from '@/pages/demo11/index.vue'
import Test from '@/pages/demo11/test.vue'
import Demo12 from '@/pages/demo12/index.vue'
import Demo13 from '@/pages/demo13/index.vue'
import Demo13Test from '@/pages/demo13/test.vue'
import Demo14 from '@/pages/demo14/index.vue'
import Demo15 from '@/pages/demo15/index.vue'
import Demo15Test from '@/pages/demo15/test.vue'
import Demo16 from '@/pages/demo16/index.vue'
import Demo17 from '@/pages/demo17/index.vue'
import Demo18 from '@/pages/demo18/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/demo1',
      name:'demo1',
      component: Demo1
    },
    {
      path:"/demo2",
      name:"demo2",
      component: Demo2
    },
    {
      path:'/demo3',
      name:'demo3',
      component:Demo3
    },
    {
      path:'/demo4',
      name:'demo4',
      //  component:require('@/pages/demo4/index.vue')
      component:Demo4
    },
    {
      path:"/demo5",
      name:"demo5",
      component:Demo5
    },
    {
      path:"/demo6",
      name:"demo6",
      component:Demo6
    },
    {
      path:'/demo7',
      name:'demo7',
      component:Demo7
    },
    {
      path:'/demo7/if-else',
      name:'if-else',
      component:IfElse
    },
    {
      path:'/demo7/v-show',
      name:'v-show',
      component:VShow
    },
    {
      path:'/demo8',
      name:'demo8',
      component:Demo8
    },
    {
      // 因为这个界面需要接受参数，所以对应的path也得修改
      // userId和传过来的参数相对应     
      //:表示后面的参数是不确定的（不固定的）  :表示通配符，你是任何值都可以
      path:'/demo9/:userId',
      name:'demo9',
      component:Demo9
    },
    {
      path:'/demo9/button',
      name:'button',
      component:DButton
    },
    {
      path:'/demo9/dothis',
      name:'dothis',
      component:Dothis
    },
    {
      path:'/demo10',
      name:'demo10',
      component:Demo10
    },
    {
      path:'/demo10/checkbox',
      name:'checkbox',
      component:Checkbox
    },
    {
      path:'/demo10/select',
      name:'select',
      component:Select
    },
    {
      path:'/demo11',
      name:'demo11',
      component:Demo11
    },
    {
      path:'/demo11/test',
      name:'test',
      component:Test
    },
    {
      path:'/demo12',
      name:'demo12',
      component:Demo12
    },
    {
      path:'/demo13',
      name:'demo13',
      component:Demo13
    },
    {
      path:'/demo13/test',
      name:'demo13Test',
      component:Demo13Test
    },
    {
      path:'/demo14',
      name:'demo14',
      component:Demo14
    },
    {
      path:'/demo15',
      name:'demo15',
      component:Demo15
    },
    {
      path:'/demo15/test',
      name:'demo15Test',
      component:Demo15Test
    },
    {
      path:'/demo16',
      name:'demo16',
      component:Demo16
    },
    {
      path:'/demo17',
      name:'demo17',
      component:Demo17
    },
    {
      path:'/demo18',
      name:'demo18',
      component:Demo18
    },
  ]
})
