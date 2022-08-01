import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useTopicsDetail } from "../../store/action/http";
import { Alert } from 'antd'
import Detail from './detail'
import Replies from './replies'
function TopicDetailPage() {
  let { loading, data, isError, errorMsg } = useSelector(state => state.topicDetail)
  let getData = useTopicsDetail()
  let { id } = useParams()
  let navigate = useNavigate()
  console.log('详情数据：', data, loading)
  useEffect(() => {
    getData(id)
  }, [id])
  return (<div id="topic-detail">
    {
      isError
        ? <Alert closable message={errorMsg} type="error" onClose={navigate('/')} />
        : (
          <Fragment>
            <Detail data={data} loading={loading} />
            <Replies data={data&&data.replies} />
          </Fragment>
        )
    }
  </div>);
}

export default TopicDetailPage;