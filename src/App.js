import React, { useState } from 'react';
import './style.css';

const Card = () => {
  const [my, myf] = useState('yolo');

  const handler = () => {
    myf('test01');
  };

  return <div onClick={() => myf('test02')}>{my}</div>;
};

export default function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
