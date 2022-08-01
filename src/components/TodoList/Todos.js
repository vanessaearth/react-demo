import Li from './li'
import { useSelector } from 'react-redux'

function Todos() {
  // let data=useSelector(state=>state)
  let data=useSelector(state=>state.TodoReducer)

  return ( 
    <ul id="todo-list">
      {
        data.map(item => (<Li key={item.id} {...item}/>))
      }
    </ul>
  );
}

export default Todos;