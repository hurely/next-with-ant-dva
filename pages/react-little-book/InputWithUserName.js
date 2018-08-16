
import React from 'react';
import wrapWithLoadData from './wrapWithLoadData';

// @wrapWithLoadData
class InputWithUserName extends React.Component{
  render(){
    return <input value={this.props.data}/>
  }
}

InputWithUserName  = wrapWithLoadData(InputWithUserName,'username');

export default InputWithUserName;