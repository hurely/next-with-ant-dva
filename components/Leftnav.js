import React from 'react';
import { Menu, Icon, Switch } from 'antd';
import Link from 'next/link';

import Router from 'next/router';
Router.onRouteChangeStart = () => {
  NProgress.start()
}
Router.onRouteChangeComplete = () => {
  NProgress.done()
}
Router.onRouteChangeError = () => {
  NProgress.done()
}

const SubMenu = Menu.SubMenu;

class Sider extends React.Component {
  state = {
    theme: 'dark',
    current: '1',
  }

  //类似created
  componentDidMount = function (e) {

  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const navList = [
      { src: '/', title: '首页', id: '1' },
      { src: '/article/list', title: '文章列表', id: '2' },
      { src: '/login', title: '登录', id: '3' }
    ];

    const listItems = navList.map((list, index) => {
      return (
        <Menu.Item key={list.id}>
          <a href={list.src}>{list.title}</a>
        </Menu.Item>
      )
    })
    return (
      <div className="left-nav">
        {/* <Switch
          checked={this.state.theme === 'dark'}
          onChange={this.changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        /> */}
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256, paddingTop: '45px' }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>demo</span></span>}>
            {listItems}
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Sider;