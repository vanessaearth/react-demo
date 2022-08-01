import React, { Component } from 'react';

class FormComp extends Component {
  constructor(props) {
    super(props);
  }
  state = { val:'',checked:false }
  handleInput=(e)=>{
    this.setState({val:e.target.value})
  }
  handleCheck=(e)=>{
    this.setState({checked:e.target.checked})
  }
  render() { 
    let {val,checked}=this.state
    return ( 
      <div>
        <input type="text" value={val} onChange={this.handleInput}/>{val}
        <input type="checkbox" chexked={checked} onChange={this.handleCheck}/>{checked}
      </div>
     );
  }
}
 
export default FormComp;