//高阶组件就是一个函数，传给它一个组件，它返回一个新的组件。
import React from 'react';

export default (WrappedComponent,name)=>{
  class NewComponent extends React.Component{
    constructor(){
      super();
      this.state = {data:null}
    }

    componentWillMount(){
      const isServer = typeof window === 'undefined';
      let data = ''
      if(!isServer) data = localStorage.getItem(name);//拿到缓存
      this.setState({data});
    }

    render(){
      return (<WrappedComponent data={this.state.data} />)
    }
  }
  return NewComponent;
}