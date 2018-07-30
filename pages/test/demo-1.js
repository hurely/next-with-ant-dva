import React from 'react';
class Demo1 extends React.Component{
  render(){
    const lists = ['我是谁','我来自哪里','我要到哪儿去'];
    return(
      <div className="list">
        <ul>
          {
            lists.map((list,index)=>{
              return(
                <li key={index}>{list}</li>
              )
            })
          }  
        </ul>
        
      </div>
    )
  }
}

export default Demo1;