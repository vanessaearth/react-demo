
import './/App.css';
import React, { Component } from 'react';
import ParentProvider from '../components/provider/parent'
import List from '../components/List/index'
import StateComp from '../components/StateComp/index'
import RefsComp from '../components/refsComp/index'
import CreateRefComp from '../components/refsComp/createRef'
import FormComp from '../components/FormComp'
import ChildComp from '../components/Children'
import UseHook from '../components/UseHook'
import UseScrollY from '../components/UseHook/UseScrollY.js'
import ReduxComp from '../components/Redux/index.js'
import ReduxCompHook from '../components/Redux/indexHook.js'
import TodoList from '../components/TodoList'
import { Route,Routes } from 'react-router-dom'
// function App() {
//   let scrollY=UseScrollY()
//   return ( 
//     <div style={{border:'1px solid #000',height:'1500px'}}>
//     <p style={{position:"fixed",left:0,top:0}}>当前滚动位置：{scrollY}</p>
//     </div>
//    );
// }

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Routes>
          <Route path='/' exact component={TodoList} />
          <Route path='/ReduxComp' exact component={ReduxComp} />
        </Routes>
        {/* <TodoList/>
     <ReduxComp/>
      <ReduxCompHook/>
     
      <UseHook/>
       <ChildComp title="提示">
        <div>弹框内容</div>
      </ChildComp>
      <FormComp/>
      <CreateRefComp/>
      <RefsComp/>
      <StateComp/>
      <ParentProvider/>    
      <List/>      */}
      </div>);
  }
}

export default App;
