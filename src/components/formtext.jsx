

import React, {useState,useEffect} from 'react'
import './forms.css'

export default function formtext({newtext,position,formvisible,setformvisible}) {

  return (

        <form
            onSubmit={newtext.handlesubmit}
            className='formtext'
            style={{ left: position.x, top: position.y, position: 'absolute' }}
        >
            <div onClick={()=>setformvisible(false)}>X</div>
            <input onChange={newtext.handlechange} placeholder={newtext.text}/>
            <button type='submit'>Submit</button>
        </form>
    )
    
  
}
