import React from 'react';
import MyHeader from '../components/MyHeader';
import axios from '../lib/axios';
import { bmobConfig } from '../lib/config';
import urls from '../lib/urls';

import { Table } from 'antd';

const config = {
  headers: {
    'X-Bmob-Application-Id': bmobConfig.applicationId,
    'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
    'Content-Type': 'application/json'
  }
};

const myStyle = {
  body:{
    width:'800px',
    margin:'10px auto'
  }
}

const About = (props) => (
  <MyHeader title="用户列表">
    <div style={myStyle.body}>
      <p className="about">传递的参数{props.url.query.id | 'null'}</p>
      <p className="about">获取的数据</p>
      <Table dataSource={props.shows} columns={columns} />
      <style jsx>
        {`
        .about {color:#666;padding:10px}
      `}
      </style>
    </div>
  </MyHeader>
)

const columns = [{
  title: 'id',
  dataIndex: 'id',
  key: 'id',
}, {
  title: '文章名',
  dataIndex: 'title',
  key: 'title',
}, {
  title: '发布时间',
  dataIndex: 'pubdate',
  key: 'pubdate',
}];


const isServer = typeof window === 'undefined'

About.getInitialProps = async function (context) {
    // console.log(context);
    const res = await axios.get(urls.jt, config)
    // console.log(res.data);
    return {
      shows: res.data.article_list
    }
}

export default About;