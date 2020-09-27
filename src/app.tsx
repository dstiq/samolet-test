import React, {useEffect, useState} from 'react';
import './app.css';
import {getData} from "./api";
import Main from './views/Main/index';


export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData().then(setData)
  }, []);

  return (
    <Main items={data}/>
  );
}
