import '../static/css/App.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { routes } from '../router/index.js'
import { Route, Routes } from "react-router-dom";
import { Layout } from 'antd'
import Header from '../components/Layout/header.js'
import Footer from '../components/Layout/footer.js'
function App() {
  let data = useSelector(state => state)
  return (
    <Layout className='page'>
      <Header />
      <Layout.Content>
        <div className='wrap'>
          <Routes>
            {
              routes.map((item, index) => {
                return (
                  <Route
                    key={index}
                    path={item.path}
                    exact={item.exact}
                    element={item.element} />)
              })
            }
          </Routes>
        </div>
      </Layout.Content>
      <Footer />
    </Layout>
  );
}

export default App;