import { indexNav } from '../../router/index.js'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import qs from 'qs'

function IndexNav() {
  let { search } = useLocation()
  let {  tab } = qs.parse(search.substr(1))
  let activeIndex = indexNav.findIndex(item => {
    return tab === item.to.slice(6)
  })
  if (activeIndex === -1) {
    activeIndex = 0
  }
  return (  
    <Menu mode="horizontal"
    selectedKeys={[activeIndex + '']}
     defaultSelectedKeys={[activeIndex + '']}>
        {
          indexNav.map((item, index) => {
            return <Menu.Item key={index} >
              <Link to={item.to} >{item.txt}</Link>
            </Menu.Item>
          })
        }
      </Menu>
  );
}

export default IndexNav;