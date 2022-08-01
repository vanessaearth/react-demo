import React, { Component, createRef } from 'react';

class CreateRefComp extends Component {
  state = {  }
  parent=createRef()
  child=createRef()
  componentDidMount() {
    console.log('creste-refs parent:',this.parent.current)
    console.log('create-refs child :',this.child.current)
  }
  render() { 
    return (<div>
      <p ref={this.parent}>父组件内容</p>
      <Child ref={this.child}/>
    </div>  );
  }
}
class Child extends Component {
  state = {  } 
  render() { 
    return (<p >子组件内容</p>);
  }
}
 
 
export default CreateRefComp;