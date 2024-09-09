

import React, {useState,useEffect} from 'react'
import './forms.css'
import UseChangetext from '../custom hooks/Changetext'
export default function formtext({newtext,position,formvisible,setformvisible,datatype,editable}) {
  return (

        <form
            className='formtext '
            style={{ left: position.x, top: position.y, position: 'absolute' }}
        >
            <div onClick={()=>setformvisible(false)} className='closelogo'>X</div>
            
  
       
            <label htmlFor='text' >Text</label>
            <div className='inputnbutton'>
            <input onChange={(e)=>newtext.handlechange(e)} placeholder={newtext.text} id='text'/>
            <button type='submit' onClick={newtext.handlesubmit}>Submit</button>
            <button onClick={newtext.undo} disabled={newtext.disabelundo}>Undo</button>
            <button onClick={newtext.redo} disabled={newtext.disableredobutton}>Redo</button>
            </div>

        </form>
    )
    
  
}