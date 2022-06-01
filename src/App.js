import React, { useState } from 'react';
import './style.css';

const Inner = (props) => {
  const inner_handler = (event) => {
    console.log(event.target.innerText);
    props.onNewData(Math.random());
  };

  return <div onClick={inner_handler}> random </div>;
};

const Card = (props) => {
  const [my, myf] = useState('yolo');

  const handler = () => {
    myf('test01');
  };

  return <Inner onNewData={props.onNewData} myfunc={props.myfunc} />;
};

export default function App() {
  const [my_data, my_func] = useState('msg');

  const handler = () => {
    console.log('log log log');
  };

  const inner_h = (data) => {
    console.log(data);
    my_func(data);
  };

  return (
    <div>
      <div>{my_data}</div>
      <Card onNewData={inner_h} myfunc={handler} />
    </div>
  );
}
