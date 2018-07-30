import React from 'react';

class MyComponent extends React.Component{
  render(){
    return (
      <h1>{this.props.name}</h1>
    )
  }
}

class Demo2 extends React.Component{
  render(){
    const lists = ['我是谁','我来自哪里','我要到哪儿去'];
    return(
      <div className="list">
        <ul>
          {
            lists.map((list,index)=>{
              return(
                <li key={index}>
                  <MyComponent name={list}></MyComponent>
                </li>
              )
            })
          }  
        </ul>
        
      </div>
    )
  }
}

export default Demo2;