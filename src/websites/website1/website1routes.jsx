import React from 'react'
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import { Switch , Link} from 'react-router-dom';
import Website1 from './website1';
import Learnmorepage from './learnmorepage';
import { FaBackward } from "react-icons/fa";
import { useState } from 'react';
export default function Website1routes() {
  const [editable,seteditable] = useState(false)
  return (
    <>
    
 <div className='goback'>
 <div className='iconntext'>
   <Link to='/' className='iconntext'>
 <FaBackward className='backicon'/> <p> Back to Main page </p>
 </Link>
 </div>
</div>
   <Routes>
        <Route path='/' element={<Website1 />} />
        <Route path='/Edit' element={<Website1 />} />
        <Route path='/Learnmore' element={<Learnmorepage/>} />
    </Routes>
    </>
  )
}
