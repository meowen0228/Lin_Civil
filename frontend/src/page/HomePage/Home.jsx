import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { Layout, Menu } from 'antd';
// import * as API from '../../service/API';
import './Home.scss';
import MenuList from './MenuList';

const { Header, Content, Footer, Sider } = Layout;

function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedKey, setSelectedKey] = useState(location.pathname);
  const [title, setTitle] = useState('Welcome');

  // const logout = () => {
  //   sessionStorage.clear();
  //   navigate('/');
  // };

  const test = (r) => {
    navigate(r);
  };

  useEffect(() => {
    setSelectedKey(location.pathname);
    const index = MenuList.map((v) => v.path).indexOf(location.pathname);
    if (index !== -1) {
      setTitle(MenuList[index].label);
    }
  }, [location]);

  return (
    <Layout style={{ minHeight: '100%' }}>
      <Sider
        breakpoint="md"
        collapsedWidth="0"
      >
        <div className="logo">CIVIL</div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[selectedKey]}
          items={MenuList.map(
            (v) => ({
              key: v.path,
              icon: React.createElement(v.icon),
              label: v.label,
              onClick: () => test(v.path),
            }),
          )}
        />
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: '0 20px 0 20px',
            color: 'white',
            fontSize: 'large',
            letterSpacing: 5,
            opacity: '.9',
          }}
        >
          {title}
        </Header>
        <Content
          style={{
            margin: '24px 16px 0',
          }}
        >
          <Outlet />
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
}

export default Home;
