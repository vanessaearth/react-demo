import React,{ useState } from "react";
import { useDispatch } from "react-redux";

function Create() {
  const [val,setVal]=useState("")
  const dispatch=useDispatch()
  const addOne=()=>{
    val.trim()
    dispatch({
      type:'add',
      title:val
    })
    setVal('')

  }
  const changeOne=(e)=>{
    setVal(e.target.value)
  }
  const keydown=(keycode)=>{
    if(keycode===13){
      this.addOne()
    }
  }
  return (  
    <div id="create-todo">
      <input id="new-todo" value={val} onKeyDown={keydown} 
      onChange={changeOne}
       placeholder="enter" type="text" autoComplete="off"/>
    <button onClick={addOne}>add</button>
    </div>
  );
}

export default Create;