import Title from './Title'
import Create from './Create'
import Todos from './Todos'
import State from './State'
import './index.css'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
function TodoList() {
  let data=useSelector(state=>state.TodoReducer)
  return (
    <div className="box">
      <Title />
      <Create />
      {
        data.length > 0 &&
        <Fragment>
          <Todos />
          <State />
        </Fragment>
      }

    </div>
  );
}

export default TodoList;