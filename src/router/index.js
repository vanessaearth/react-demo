import React from 'react-router-dom';

import IndexPage from '../views/index/index'
import TopicDetailPage from '../views/topicDetail/index'
import UserPage from '../views/user/index'
import GetStartPage from '../views/getstart/index'
import AboutPage from '../views/about/index'
import Page404 from '../views/page404/index'
export let routes = [{
  path: '/',
  exact: true,
  element:<IndexPage/>,
  render(props) {
    return <IndexPage {...props} />
  }
},
{
  path: '/topic-detail/:id',
  exact: true,
  element:<TopicDetailPage/>,
  render(props) {
    return <TopicDetailPage {...props} />
  }
},{
  path:'/user/:loginname',
  exact:true,
  element:<UserPage/>,
  render(props){
    return <UserPage {...props} />
  }
},{
  path:'/getstart',
  exact:true,
  element:<GetStartPage/>,
  render(props){
    return <GetStartPage {...props} />
  }
},{
  path:'/about',
  exact:true,
  element:<AboutPage/>,
  render(props){
    return <AboutPage {...props} />
  }
},{
  path:'*',
  exact:true,
  element:<Page404/>,
  render(props){
    return <Page404 {...props} />
  }
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

