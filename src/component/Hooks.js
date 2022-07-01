import React, {useState,useEffect} from 'react'
import "./hooks.css"

const  Hooks = () => {
    useEffect(()=>{
        // console.log("hi")
        alert('Welcome to hooks practice');
    },[])
    let [varData,setVardata]=useState(0);
  
    useEffect(()=>{
        document.title =`chats(${varData})`
    })
  

  return (
   
    <>
    <div className='Main'>
        <h1 className='Counter'>{varData}</h1>
        <div className='btn-grp'>
        <button className='Incr' onClick={()=>setVardata(varData+=1)}>Increment</button>
        <button className='Decr'onClick={()=>varData>0 ? setVardata(varData-=1):setVardata(varData)}>Decrement</button>
        </div>
    </div>
    </>
  )
}

export default Hooks;
