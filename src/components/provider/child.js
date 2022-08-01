import React, { Component } from 'react';
import { Consumer } from './context'
class Child extends Component {

  state = {}
  render() {
    return (
      <Consumer>
        {(val) => {
            return <p> {val.info}</p>
          }}
      </Consumer>
    );
  }
}

export default Child;