

import React, {useState,useEffect} from 'react'
import './forms.css'

export default function formtext({newtext,position}) {

  return (

        <form
            onSubmit={newtext.handlesubmit}
            className='formtext'
            style={{ left: position.x, top: position.y, position: 'absolute' }}
        >
            <input onChange={newtext.handlechange} />
            <button type='submit'>Submit</button>
        </form>
    )
    
  
}
