import React from 'react';
import Link from 'next/link';
import MyHeader from '../components/MyHeader';
import axios from '../lib/axios';
import { bmobConfig } from '../lib/config';
import urls from '../lib/urls';

import { Button } from 'antd'

const myStyle = {
   backgroundColor: '#1890ff', 
   color: '#fff', 
   display: 'block', 
   width: '100px', 
   height: '40px', 
   lineHeight: '40px', 
   textAlign: 'center', 
   margin: '10px auto',
   borderRadius:'10px',
}

const Router = (props) => (
  <MyHeader title="router">

    <Link prefetch href="index">
      {/* 注意加上prefetch */}
      <a style={myStyle}>index</a>
    </Link>
    <Link prefetch href="about?id=11">
      {/* 注意加上prefetch */}
      <a style={myStyle}>about</a>
    </Link>
    <Link prefetch href="userlist?id=888">
      {/* <Button style={{margin:'0 auto'}}>userlist</Button> */}
      <a style={myStyle}>userlist</a>
    </Link>
    <Link prefetch href="test?id=888">
      {/* <Button style={{margin:'0 auto'}}>userlist</Button> */}
      <a style={myStyle}>test</a>
    </Link>
    <Link prefetch href="form?id=888">
      {/* <Button style={{margin:'0 auto'}}>userlist</Button> */}
      <a style={myStyle}>form</a>
    </Link>
  </MyHeader>
)

export default Router;