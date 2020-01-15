import React from 'react';
import { Menu, Icon } from 'antd';
import { useHistory } from 'react-router-dom';


const Tab = () => {
  const route = useHistory();
  function handleClick(item: any) {
    route.push(item.key);
  }
  return (
    <Menu mode="horizontal" onClick={handleClick}>
      <Menu.Item key="/">
        <Icon type="appstore" />
        Home
      </Menu.Item>
      <Menu.Item key="/about">
        <Icon type="setting" />
        About
      </Menu.Item>
    </Menu>
  );
};

export default Tab;
