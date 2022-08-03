import React,{ useRef,useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function Li(props) {
  let { id, title, done } = props
  const [isEdit, changeEdit] = useState(false)
  const dispatch = useDispatch()
  let edit = useRef()
  let [val, setVal] = useState(title)
  useEffect(() => {
    if (isEdit) {
      edit.current.focus()
    }
  }, [isEdit])
  console.log('render',id)
 
  return (
    <li className={isEdit?'editing':''}>
      <div className="todo">
        <div className="display" >
          <input type="checkbox" checked={done} onChange={(e)=>{ dispatch({type:'done',id,done:e.target.checked})}}/>
          <div className="content">{title}</div>
        </div>
        <div className="edit" >
          <input ref={edit} type="text"
          value={val}
          onBlur={()=>{
            dispatch({type:'edit',id,title:val})
            changeEdit(false)}}
          onChange={(e)=>setVal(e.target.value)}/>
        </div>
        <button onClick={() => { changeEdit(true) }}>编辑</button>
        <button onClick={() => { dispatch({type:'remove',id}) }}>删除</button>
      </div>
    </li>
  );
  
}

export default React.memo(Li);