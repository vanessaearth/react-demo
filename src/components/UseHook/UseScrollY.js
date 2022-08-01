import {useState, useEffect } from "react";

function UseScrollY() {
  let [scrollY,setScrollY]=useState(0)
  function scroll(){
    setScrollY(window.scrollY)
  }
  useEffect(()=>{
    window.addEventListener('scroll',scroll)
    return ()=>{
      window.removeEventListener('scroll',scroll)
    }
  },[])
  return scrollY;
}

export default UseScrollY;