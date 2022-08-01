import { Pagination } from 'antd'
import { useLocation, Link } from 'react-router-dom';
import qs from 'qs'

function IndexPagination() {
  let { search } = useLocation()
  let { tab = 'all', page = 1 } = qs.parse(search.substr(1))
  return (
    <div>
      <Pagination
        current={page-0}
        defaultPageSize={10}
        total={100}
        itemRender={(page, type) => {
          switch (type) {
            case 'page': return <Link to={`/?tab=${tab}&page=${page}`}>{page}</Link>
            case 'prev': return <Link to={`/?tab=${tab}&page=${page}`}>{'<'}</Link>
            case 'next': return <Link to={`/?tab=${tab}&page=${page}`}>{'>'}</Link>
            default: return <Link to={`/?tab=${tab}&page=${page}`}>{'...'}</Link>
          }
        }}
      />

    </div>
  );
}

export default IndexPagination;