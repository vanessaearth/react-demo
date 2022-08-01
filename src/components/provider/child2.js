import React, { Component } from 'react';
import context from './context';
class Child extends Component {
 
  static contextType=context
  r
  render() { 
    return (  
       <p>{this.context.info}</p>
    );
  }
}
Child.contextType=context
export default Child;