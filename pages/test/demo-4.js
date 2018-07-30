import React from 'react';

class Demo4 extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     liked:false
  //   }
  // }
  state = {
    liked: false
  }
  handleClick(){
    this.setState({liked: !this.state.liked});
  }
  render(){
    let text = this.state.liked ? '喜欢' : '不喜欢';
    return(
      <div>
        <p onClick={this.handleClick.bind(this)}>
          你 {text} 这个点击.
        </p>
      </div>
    )
  }
}

export default Demo4;