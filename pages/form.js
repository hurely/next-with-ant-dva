
import React from 'react';
import { Form, Icon, Input, Button, Checkbox ,message} from 'antd';
import MyHeader from '../components/MyHeader';

import urls from '../lib/urls';
import axios from '../lib/axios';
import {bmobConfig} from '../lib/config';

import qs from 'qs';

const config = {
  headers: {
    'X-Bmob-Application-Id': bmobConfig.applicationId,
    'X-Bmob-REST-API-Key': bmobConfig.restApiKey,
    'Content-Type': 'application/json'
  }
}

const FormItem = Form.Item;

const myStyle = {
  h1: {
    textAlign: "center"
  }
}

class NormalLoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'kung'
    }
  }
  info = () => {
    message.success('退出成功');
  }
  handleSubmit =  (e) => {
    e.preventDefault();
    this.props.form.validateFields( (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post(urls.login,qs.stringify(values))
        .then(res=>{
          console.log(res);
        })
        .catch(error=>{
          console.log(error);
        })
      }
    });
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  logOut =async () =>{
    let res =await axios.get('api/logout')
    this.info();
    console.log(this.form);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <MyHeader title="form">
        <h1 style={myStyle.h1}>I'm {this.state.name}</h1>
        <Form onSubmit={this.handleSubmit} id="login-demo" className="login-form">
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [{ required: true, message: 'Please input your username!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              登录
            </Button>
            <Button type="primary" onClick={this.logOut} className="login-form-button">
              退出登陆
            </Button>
          </FormItem>
        </Form>
      </MyHeader>
    );
  }
}


const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

// ReactDOM.render(<WrappedNormalLoginForm />, mountNode);

export default WrappedNormalLoginForm;