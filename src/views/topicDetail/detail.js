import { Card, Col, Row } from "antd"
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { FromNow } from '../../utils/index.js'
import TopicTag from '../../components/Topics/topicTag.js'
function Detail(props) {
  let { data={}, loading } = props
  console.log(data)
  let { title, author, content, create_at, good, top, tab, visit_count } = data
  let username = author ? author.loginname : ''
  return (
    <Card
      bordered
      loading={loading}
      title=
      {
        <Fragment>
          <h2>{title}</h2>
          <Row>
            <Col span={2} xs={3}>
              <TopicTag tab={top ? 'top' : good ? 'good' : tab} />
            </Col>
            <Col span={4} xs={6}>
              <p>作者:<Link to={`/user/${username}`}>{username}</Link></p>
            </Col>
            <Col span={6} xs={7}>
              创建时间：{FromNow(create_at)}</Col>
            <Col span={12} xs={8}>浏览数量：{visit_count}</Col>
          </Row>
        </Fragment>
      }
      type="inner"
    >
      <div dangerouslySetInnerHTML={{
        __html: content
      }}>
      </div>
    </Card>


  );
}

export default Detail;