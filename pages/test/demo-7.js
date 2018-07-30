import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Table,Divider ,Modal} from 'antd';
import MyHeader from '../../components/MyHeader';


import urls from '../../lib/urls';
import axios from '../../lib/axios';
import * as config from '../../lib/config';

const _config = {
  headers: {
    'X-Bmob-Application-Id': config.bmobConfig.applicationId,
    'X-Bmob-REST-API-Key': config.bmobConfig.restApiKey,
    'Content-Type': 'application/json'
  }
};


export default class Demo7 extends React.Component {

  //声明
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      selectRow:{},
    }
    this.columns = [{
      title: '用户id',
      dataIndex: 'objectId',
      key: 'objectId',
    }, {
      title: '用户名',
      dataIndex: 'uname',
      key: 'uname',
    }, {
      title: '用户地址',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: '创建时间',
      dataIndex: 'createdAt',
      key: 'createdAt',
    }, {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text, record) => (
        <span>
          <a href="javascript:;">编辑 一 {record.objectId}</a>
          <Divider type="vertical" />
          <a href="javascript:;" onClick={()=>this.delete(record)}>删除</a>
        </span>
      ),
    }];
  }

  //点击按钮获取数据
  getData = async () => {
    let res = await axios.get(urls.demo7, _config)
    console.log(res);
    this.setState({
      data: res.data.results,
    })
  }

  //获取初始数据
  componentDidMount = async function (e) {
    const res = await axios.get(urls.demo7,_config);
    console.log(res)
    // this.setState({
    //   data: res.data.results
    // })
  }
  
  //ddelet
  delete(e){
    console.log(e);
    axios.delete(urls.demo7+'/'+e.objectId,_config)
    .then(res=>{
      this.getData();
      console.log(res)
    })
    .catch(err=>{console.log(err)})
  }

  //修改
  edit(e){
    console.log(e);
    axios.put(urls.demo7+'/'+e.objectId,e,_config)
    .then(res=>{
      this.getData();
      console.log(res)
    })
    .catch(err=>{console.log(err)})
  }
  
  //渲染数据
  render() {

    const addModal = {

    }

    const columns = this.columns;
    return (
      <div>
        <link rel='stylesheet' href='../../static/css/antd.css' />
        <link rel="stylesheet" href="../../static/css/common.css" />
        <MyHeader title="demo-7">
          <Button style={{ marginTop: '20px', marginBottom: '20px' }} onClick={this.getData}>获取数据</Button>
          <Button style={{ marginLeft: '20px', marginTop: '20px', marginBottom: '20px' }} onClick={this.addData}>增加数据</Button>
          <Table dataSource={this.state.data} columns={columns} size="small" />
          {/* <p>{this.state.data}</p> */}
        </MyHeader>
      </div>
    )
  }
}
