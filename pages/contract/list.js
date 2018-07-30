import React from 'react';
import { Form, Icon, Input, Button, Checkbox ,Table} from 'antd';
import MyHeader from '../../components/MyHeader';

import urls from '../../lib/urls';
import axios from '../../lib/axios';

const columns = [{
  title: 'id',
  dataIndex: 'objectId',
  key: 'objectId',
}, {
  title: '姓名',
  dataIndex: 'uname',
  key: 'uname',
}, {
  title: '电话',
  dataIndex: 'uphone',
  key: 'uphone',
}, {
  title: '地址',
  dataIndex: 'address',
  key: 'address',
}];
class ContractIndex extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data:[]
        }
    }

  getData =async () =>{
    let res = await axios.get(urls.contract,{page:1})
    console.log(res);
    this.setState({
      data:JSON.stringify(res.data.data).toString()
    })
  }

  componentDidMount = async function (e){
        const res = await axios.get(urls.contract);
        console.log(res)
        this.setState({
            shows:res.data.list
        })
    }
  render() {
    return (
      <div>
        <link rel="stylesheet" href="../../static/css/common.css"/>
        <MyHeader title="二方合同列表">
          <Button onClick={this.getData}>获取数据</Button>
          <Table dataSource={this.props.data} columns={columns} size="small" />
          <p>{this.state.data}</p>
        </MyHeader>
      </div>
    )
  }
}

ContractIndex.getInitialProps = async function (context) {
  // const res = await axios.get(urls.contract,{page:1})
  return {
    data: [],
  }
}

export default ContractIndex;