import React from 'react';

class Demo5 extends React.Component{
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
    return(
      <div>
        <p>
          你输入了{this.state.text}
        </p>
        <input type="text" placeholder="请输入..." onChange={this.handleChange.bind(this)}/>
      </div>
    )
  }
}

export default Demo5;