import {  Tag } from 'antd';

function setTag(tab){
  switch(tab){
    case 'top': return <Tag color="magenta">置顶</Tag>
    case 'good': return <Tag color="red">精华</Tag>
    case 'share': return <Tag color="orange">分享</Tag>
    case 'ask': return <Tag color="green">问答</Tag>
    case 'job': return <Tag color="blue">工作</Tag>
    case 'dev': return <Tag color="purple">测试</Tag>
  
    default:  return ''
  }
}

function TopicTag(props) {
  let {tab}=props
  return setTag(tab);
}

export default TopicTag;