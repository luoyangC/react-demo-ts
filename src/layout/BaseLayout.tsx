import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { useHistory } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

interface LayoutProps {
  children?: React.ReactNode;
}

function BaseLayout({ children }: LayoutProps) {
  const route = useHistory();
  function handleClick(item: any) {
    route.push(item.key);
  }
  return (
    <Layout>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0 }}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} onClick={handleClick}>
          <Menu.Item key="/">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
          </Menu.Item>
          <Menu.Item key="/about">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}

export default BaseLayout;
