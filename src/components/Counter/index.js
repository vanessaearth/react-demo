import { useEffect, useState,useRef } from "react";

function Counter() {
  let [count, setCount] = useState(1)
  let prevCount=useRef(count)
  useEffect(()=>{
    console.log('prevCount',prevCount)
    prevCount.current=count
  })
  return (<div>
    {count}
    <button onClick={() => {
      setCount(count+1)
      console.log(count)
      setTimeout(() => {
        console.log(count)
        setCount(count+1)
        console.log(count)
      })
    }}>
      add
    </button>
  </div>);
}

// import React, { Component } from 'react';

// class Counter extends Component {

//   state = { count: 1 }
//   render() {
//     return (<div>
//       <div>{this.state.count}</div>
//       {/*  异步表现 */}
//       {/* <button onClick={() => {
//         this.setState({ count: this.state.count + 1 })
//         console.log(this.state.count)
//         this.setState({ count: this.state.count + 1 })
//         console.log(this.state.count)
//       }}>add</button> */}
//       {/*    同步写法 */}
//       <button onClick={() => {

//         setTimeout(() => {
//           this.setState({ count: this.state.count + 1 })
//           console.log(this.state.count)

//           this.setState({ count: this.state.count + 1 })
//           console.log(this.state.count)
//         },1000)

//       }}>add</button>
//     </div>);
//   }
// }

export default Counter;