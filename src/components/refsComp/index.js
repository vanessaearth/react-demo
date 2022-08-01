import React, { Component } from 'react';

class RefsComp extends Component {
  state = {  }
  componentDidMount() {
    console.log('refs parent:',this.refs.parent)
    console.log('refs child :',this.refs.child)
  }
  render() { 
    return (<div>
      <p ref="parent">父组件内容</p>
      <Child ref="child"/>
    </div>  );
  }
}
class Child extends Component {
  state = {  } 
  render() { 
    return (<p >子组件内容</p>);
  }
}
 
 
export default RefsComp;