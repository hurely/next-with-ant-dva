import React from 'react';
import head from 'next/head'
// import  './demo.css';
import MyHead from '../../components/MyHeader';

class Demo6 extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     text:''
  //   }
  // }
  state = {
    text: ''
  }
  handleChange(e){
    this.setState(
      {text: e.target.value}
    );
  }
  render(){
    const myStyle = {
      h1: {
        textAlign: "center"
      },
      p:{
        color:'blue'
      }
    }
    return(
      <div>
        <MyHead>
        <h1 style={myStyle.h1}>demo-6</h1>
        <p style={{color:'red'}}>
          你输入了{this.state.text}
        </p>
        <p style={myStyle.p}>
          你输入了{this.state.text}
        </p>
        <p  className="style1">style1</p>
        <input className="input" type="text" placeholder="请输入..." onChange={this.handleChange.bind(this)}/>
        <style jsx>
          {
            ` .style {
                background: #dcdcdc;
                font-size: 20px;
                height:40px;
                line-height:40px;
                padding:0 2%;
              }
              .input{
                width:96%;
                height:40px;
                padding:0 2%;
              }
            `
          }
        </style>
        {/* <style jsx>{styles}</style> */}
        </MyHead>
        {/* <head> */}
          <link rel='stylesheet' href='../../static/css/demo.css' />
          <link rel='stylesheet' href='../../static/css/common.css' />
        {/* </head> */}
        
      </div>
      
    )
  }
}

export default Demo6;