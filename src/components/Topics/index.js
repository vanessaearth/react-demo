
import { Avatar, List, Col } from 'antd'
import { Link } from 'react-router-dom'
import { UserOutlined } from '@ant-design/icons';
import TopicTag from './topicTag.js'
import {FromNow} from '../../utils/index.js'

function TopicList(props) {
  let { data, loading } = props
  return (
    <List className="topics-list"
      loading={loading}
      dataSource={data}
      renderItem={(data) => {
        // console.log(data)
        let { author, last_reply_at, good, top, tab, title, id } = data
        let { loginname, avatar_url } = author
        return <List.Item>
          <Col xs={24} md={20}>
            <Link to={`/user/${loginname}`} className="ml-gap">
              <Avatar icon={<UserOutlined />} src={avatar_url} />
            </Link>
            <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
            <Link to={`/topic-detail/${id}`}>
              {title}
            </Link>
          </Col>
          <Col xs={0} md={4} className="date">{
            FromNow(last_reply_at)
          }</Col>

        </List.Item>
      }}>

    </List>
  );
}

export default TopicList;