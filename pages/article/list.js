import React from 'react';
import MyHeader from '../../components/MyHeader';
import axios from '../../lib/axios';
import { bmobConfig } from '../../lib/config';
import urls from '../../lib/urls';

// import '../../static/css/common.css';

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


class ArticleList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      shows:[]
    }
  }

  componentDidMount = async function (e){
    const res = await axios.get(urls.test, config)
    this.setState({
      shows:res.data.article_list
    })
  }

  render() {
    return (
      <MyHeader title="文章列表">
        <link rel="stylesheet" href="../../static/css/common.css"/>
        <div style={myStyle.body}>
          {/* <p className="about">传递的参数{props.url.query.id | 'null'}</p> */}
          <p className="about">获取的数据</p>
          <Table dataSource={this.state.shows} columns={columns} />
          <style jsx>
            {`
            .about {color:#666;padding:10px}
          `}
          </style>
        </div>
      </MyHeader>
    )
  }
}




export default ArticleList;