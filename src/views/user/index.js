import { Card, Avatar } from 'antd'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TopicList from '../../components/Topics';
import { useUserDetail } from '../../store/action/http';
import { UserOutlined } from '@ant-design/icons';

function UserPage(props) {
  let { loginname } = useParams()
  let getData = useUserDetail()
  let { data = [], loading } = useSelector(state => state.user)
  useEffect(() => {
    getData(loginname)
  }, [loginname])
  let { avatar_url, create_at, githubUsername,score, recent_replies = [], recent_topics = [] } = data
  return (<div className="user-page">
    <Card loading={loading} className="user-detail">
      <Avatar size={64} icon={<UserOutlined />} src={avatar_url} />
      <p>用户名：{loginname}注册时间：{create_at} 积分：{score}</p>
      <p>github地址：<a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer">{`https://github.com/${githubUsername}`}</a></p>
    </Card>
    <Card loading={loading} title="创建话题" type="inline">
      <TopicList loading={loading} data={recent_topics} />
    </Card>
    <Card loading={loading} title="参与话题" type="inline">
      <TopicList loading={loading} data={recent_replies} />

    </Card>

  </div>);
}

export default UserPage;