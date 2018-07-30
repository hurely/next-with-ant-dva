import React from 'react';

class Demo3 extends React.Component{
  handleClick(){
    this.refs.myTextInput.focus();
  }
  render(){
    return(
      <div>
        <input type="text" ref="myTextInput" />
        <br/>
        <input type="button" value="Focus the text input" onClick={this.handleClick.bind(this)} />
      </div>
    )
  }
}

export default Demo3;