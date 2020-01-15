import React, { useState } from 'react';
import { Input } from 'antd';

const { Search } = Input;

const Form = () => {
  const [text, setText] = useState('');
  const handleSearch = (e: any) => {
    console.log(e.target.value);
    setText(e.target.value);
    // setText(value)
  };
  return (
    <div>
      <h1>Hello Form</h1>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        value={text}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Form;
