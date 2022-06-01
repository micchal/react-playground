import React, { useState } from 'react';
import './style.css';

const Card = () => {
  const [my, myf] = useState('yolo');

  const handler = () => {
    myf('yolo2');
  };

  return <div onClick={() => myf('michal')}>{my}</div>;
};

export default function App() {
  return (
    <div>
      <Card />
    </div>
  );
}
