import React, { useState, useRef, useEffect } from 'react';

function useHook() {
  const [name, setName] = useState('tom')
  const [num, setNum] = useState(1)

  let elp = useRef()
  //显示全称方法
  const showName = () => {
    console.log('ref', elp)
    setName('tom 全称')
  }
  useEffect(() => {
    console.log('组件挂载完成')
    return () => {
      console.log('清理更新前的一些全局内容，检测组件即将卸载')
    }
  }, [num])
  return (
    <div>
      <span ref={elp}>{name}</span>
      <button onClick={showName}>显示名字</button>
      <div>
        num:<input type="number" value={num} onChange={(e)=>{setNum(e.target.value)}}/>
      </div>

    </div>
  );
}

export
  default useHook;