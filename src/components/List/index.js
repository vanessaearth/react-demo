import { Fragment } from "react";
import Dl from './dl'
import { data } from './data'
import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
  }

  state = { openName: '', }
  changeOpen = (name) => {
    this.setState({ openName: name })
  }
  addOne() {
    //react中阻止默认事件不能使用return false,需使用event.preventDefault
    alert('add')
  }
render() {
  let { openName } = this.state
  return (
    <Fragment>
      <button onClick={this.addOne}>add</button>
      <div>openName,{openName}</div>
      {
        Object.keys(data).map(item => {
          return (
            <Dl key={item}
              name={item}
              dlData={data[item]}
              openName={openName}
              changeOpen={this.changeOpen} />
          )
        })
      }
    </Fragment>
  );
}
}

export default List;