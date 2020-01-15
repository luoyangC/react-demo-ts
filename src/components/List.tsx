import React from 'react';
import { Tag } from 'antd';

const List = () => {
  const colors = ['pink', 'red', 'orange', 'green', 'cyan'];
  return (
    <div>
      <h1>Hello List</h1>
      {
        colors.map((item) => (
          <Tag color={item} key={item}>{item}</Tag>
        ))
      }
    </div>
  );
};

export default List;
