import React, { Component } from 'react';

class StateComp extends Component {
 
  state = {name:'hello'  }
  changeState=()=>{
    this.setState({ name: 'tom' })
    console.log(this.state.name)
    this.setState({ name: 'jerry' })
    console.log(this.state.name)
  }
  render() { 
    let { name } = this.state
    return ( 
      <div>
           <div>{name}</div>
      <button onClick={this.changeState}>修改state</button>
      </div>
     );
  }
}
 
export default StateComp;