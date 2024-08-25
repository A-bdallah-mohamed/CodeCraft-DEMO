import React from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import { Switch , Link} from 'react-router-dom';
import Website1 from './website1';
import { FaBackward } from "react-icons/fa";
import { useState } from 'react';
export default function Website1routes({editable ,seteditable }) {
  return (
    <>
    
 <div className='goback'>
 <div className='iconntext'>
   <Link to='/' className='iconntext' onClick={() => seteditable(false)}>
 <FaBackward className='backicon'/> <p> Back to Main page </p>
 </Link>
 </div>
</div>
   <Routes>
        <Route path='/' element={<Website1 editable={editable} seteditable={seteditable} />} />
        <Route path='/Edit' element={<Website1 editable={editable} seteditable={seteditable} />} />
    </Routes>
    </>
  )
}
