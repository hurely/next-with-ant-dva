import React from 'react';
import Head from 'next/head'; 
import MyHeader from '../components/MyHeader';
import axios from '../lib/axios';
import urls from '../lib/urls';
import qs from 'qs';

import NProgress from 'nprogress';
import Router from 'next/router';
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

import {
  Form, Icon,
  Input, Button, Checkbox, message
} from 'antd'; 

const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userName:'',
      password:''
    }
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleUserPsw = this.handleUserPsw.bind(this);
    // this.login = this.login.bind(this);
  }
  handleUserChange(e){
    this.setState({username: e.target.value});
  }
  handleUserPsw(e){
    this.setState({password: e.target.value});
  }
  login(e){
    if(this.state.username==''||this.state.username==null){
      message.error('请输入用户名');
      return false;
    }
    if(this.state.password==''||this.state.password==null){
      message.error('请输入密码');
      return false;
    }
    let obj = {
      username:this.state.username,
      password:this.state.password
    }
    Router.push('/contract/list');
    axios.post(urls.login,qs.stringify(obj))
    .then(res=>{
      console.log(res);
     
    })
    .catch(error=>{
      console.log(error);
    })
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <title>OM系统 - 登录</title>
          <link rel='stylesheet' href='https://cdn.bootcss.com/antd/3.1.3/antd.css' />
          <link rel='stylesheet' href='../static/css/common.css' />
          <link rel='stylesheet' href='../static/css/login.css' />
        </Head>
        <Form id="login-demo" className="login-form">
          <FormItem>
            <p className="title">登录</p>
            {this.state.username}-{this.state.password}
          </FormItem>
          <FormItem>
            <Input value={this.state.username} onChange={this.handleUserChange} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          </FormItem>
          <FormItem>
            <Input value={this.state.password} onChange={this.handleUserPsw} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          </FormItem>
          <FormItem>
            <Button type="primary" onClick={this.login.bind(this)} className="login-form-button">
              登录
            </Button>
          </FormItem>
        </Form>
        <p className="power">Powered By React.js</p>
        <style jsx>
          {
            ` .title {
                background: none;
                text-align: center;
                font-size: 20px;
              }
              .power{
                background: none;
                text-align: center;
                font-size: 14px;
                color:#999;
              }
          `
          }
        </style>
      </div>
    )
  }
}
Login.getInitialProps = async function (context) { // const res = await axios.get(urls.contract,{page:1}) 
  return {
    data: [],
  }
}
export default Login;