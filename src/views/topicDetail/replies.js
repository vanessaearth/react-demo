import { Card, List, Comment, Avatar } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { FromNow } from '../../utils/index.js'
import { Link } from "react-router-dom";
function Rsplies(props) {
  let { data = [], loading } = props
  data.reverse()
  return (
    <Card
      title="评论列表">
      <List dataSource={data} renderItem={
        (item) => {
          let { author, content, create_at } = item
          return <Comment
            avatar={
              <Avatar icon={<UserOutlined />}
                src={author.avatar_url}
                title={author.loginname} />
            }
            author={<Link to={`/user/${author.loginname}`}>{author.loginname}</Link>}
            content={
              <div dangerouslySetInnerHTML={{
                __html: content
              }}></div>
            }
            datetime={<time>发表时间：{FromNow(create_at)}</time>}
          />
        }
      } 
      pagination={{
       simple:true
      }}
      />
    </Card>
  );
}

export default Rsplies;