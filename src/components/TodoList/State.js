import { useDispatch, useSelector } from "react-redux";

function State() {
  // let data=useSelector(state=>state)
  let data=useSelector(state=>state.TodoReducer)

  let done=data.filter(item=>item.done)
  let unDone=data.filter(item=>!item.done)
  let dispatch=useDispatch()

  return ( 
    <div className="todo-state" id="todo-state">
      <div className="left">{unDone.length}项待完成</div>
      <div className="right" onClick={()=>{dispatch({type:'remove_done'})}}>clear{done.length}项已完成</div>
    </div>
  );
}

export default State;