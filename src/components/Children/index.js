import React, { Component } from 'react';
let data=`<h2>hello</h2>`
class ChildComp extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
 
  render() { 
    let {title,children}=this.props
    return ( 
      <div>
        {data}
        <div dangerouslySetInnerHTML={{
          __html:data
        }}></div>
        <h2>{title}</h2>
        <div>{children}</div>
      </div>
    );
  }
}
 
export default ChildComp;