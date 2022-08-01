import { Provider } from './context'
import Child from './child'
import Child2 from './child2'
import React, { Component } from 'react';

class ParentProvider extends Component {

  state = {}
  render() {
    return (
      <div>
        <Provider value={{ info: 'provideData' }}>
          <Child />
        </Provider>
        <Provider value={{ info: 'provideData' }}>
          <Child2 />
        </Provider>
      </div>
    );
  }
}

export default ParentProvider;