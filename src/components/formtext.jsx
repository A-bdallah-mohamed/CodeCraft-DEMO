

import React, {useState,useEffect} from 'react'
import './forms.css'

export default function formtext({newtext,position,formvisible,setformvisible}) {
  return (

        <form
            onSubmit={newtext.handlesubmit}
            className='formtext formappeared'
            style={{ left: position.x, top: position.y, position: 'absolute' }}
        >
            <div onClick={()=>setformvisible(false)} className='closelogo'>X</div>
            <label for="text" >Text</label>
            <div className='inputnbutton'>
            <input onChange={newtext.handlechange} placeholder={newtext.text} id='text'/>
            <button type='submit'>Submit</button>
            <button onClick={newtext.undo}>undo</button>
            </div>
        </form>
    )
    
  
}
