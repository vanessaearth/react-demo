import { Menu, Row, Col, Affix, Layout } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { navs } from '../../router/index.js'
function Header() {
  let { pathname } = useLocation()
  let activeIndex = navs.findIndex(item => {
    return pathname === item.to
  })

  return (
    <Affix offsetTop={0}>
      <Layout.Header id="header">
        <Row>
          <Col xs={6} sm={4} md={2}>
            <h1 className="logo">
              <Link to="/">logo</Link>
            </h1>
          </Col>
          <Col xs={18} sm={20} md={22}>
            <Menu defaultSelectedKeys={[activeIndex+'']} mode="horizontal" theme="dark">
              {
                navs.map((item, index) => {
                  return (
                    <Menu.Item key={index}>
                      <Link to={item.to}>{item.txt}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
    </Affix>

  );
}

export default Header;