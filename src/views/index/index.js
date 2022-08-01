
import TopicList from '../../components/Topics/index.js'
import { Fragment, useEffect } from 'react'
import IndexNav from './indexNav.js';
import IndexPagination from './indexPagination';
import { useSelector } from 'react-redux';
import { useTopicsList } from '../../store/action/http.js';
import { useLocation } from 'react-router-dom';
import qs from 'qs'

function IndexPage(props) {
  let { data, loading } = useSelector(state => state.topics)
  let getData = useTopicsList()
  let { search } = useLocation()
  let { tab='all', page=1 } = qs.parse(search.substr(1))
  useEffect(() => {
    getData(tab, page)
  }, [tab, page])
  return (
    <Fragment>
      <IndexNav />
      <TopicList data={data} loading={loading} />
      {loading?'':<IndexPagination/>}
      {/* <IndexPagination/> */}
    </Fragment>
  );
}

export default IndexPage;