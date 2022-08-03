
import { lazy } from 'react'

export let routes = [{
  path: '/',
  exact: true,
  element:lazy(() => import('../views/index/index'))
},
{
  path: '/topic-detail/:id',
  exact: true,
  element:lazy(() => import('../views/topicDetail/index'))
},{
  path:'/user/:loginname',
  exact:true,
  element:lazy(() => import('../views/user/index'))
},{
  path:'/getstart',
  exact:true,
  element:lazy(() => import('../views/getstart/index'))
},{
  path:'/about',
  exact:true,
  element:lazy(() =>import('../views/about/index'))
},{
  path:'*',
  exact:true,
  element:lazy(() => import('../views/page404/index'))
}
]
export  let navs=[
  {
    to:'/',
    txt:'首页'
  },{
    to:'/getstart',
    txt:'新手入门'
  },{
    to:'/about',
    txt:'关于我们'
  }
]
export let indexNav=[
  {txt:'全部',to:'/?tab=all'},
  {txt:'精华',to:'/?tab=good'},
  {txt:'分享',to:'/?tab=share'},
  {txt:'问答',to:'/?tab=ask'},
  {txt:'工作',to:'/?tab=job'},
  {txt:'测试',to:'/?tab=dev'},
]
export const types=['all','yuwen','shuxue','yingyu','meishu']

