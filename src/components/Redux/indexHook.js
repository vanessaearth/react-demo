import { connect, useDispatch, useSelector } from 'react-redux';
function ReduxComp(props) {
  // let {count,dispatch}=props
  const count=useSelector(state=>state.count)
  const dispatch=useDispatch()
  return (  
    <div>
      <span>{count}</span>
      <button onClick={()=>{dispatch({type:'add'})}}>+</button>
      <button onClick={()=>{dispatch({type:'reduce'})}}>-</button>
    </div>
  );
}
// ReduxComp=connect(state=>state)(ReduxComp)
export default ReduxComp;