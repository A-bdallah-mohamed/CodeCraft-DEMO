

import React, {useState,useEffect} from 'react'
import './forms.css'
import UseChangetext from '../custom hooks/UseChangetext'
export default function Form({newtext,position,formvisible,setformvisible,datatype,editable,setselectedItemId}) {

    // add code for image change
const fontsizes = [10,12,14,16,18,20,22,24,26,28,30]
  return (
        <form
            className='formtext '
            style={{ left: position.x, top: position.y, position: 'absolute' }}
        >
            <div onClick={()=>setformvisible(false)} className='closelogo'>X</div>
            
  
       
            <label htmlFor='text' style={{marginBottom:"15px"}} >"{newtext.text}" {datatype}</label>
            <div className='inputnbutton'>
            <input onChange={(e)=>newtext.handlechange(e)} placeholder={newtext.text} id='text'/>
     
            <button onClick={newtext.undo} disabled={newtext.disabelundo}>Undo</button>
            <button onClick={newtext.redo} disabled={newtext.disableredobutton}>Redo</button>
          
           
            </div>
            <div className='fontsizeselect'>
        <label htmlFor='fontsize'>Font Size : </label>
            <select onChange={(e)=>newtext.handlefontchange(e)} id='fontsize'>
            <option value={newtext.fontsize}>{newtext.fontsize}</option>
          {fontsizes.map((number,indx)=> (
            newtext.fontsize == number ? <></> :
            <option key={indx} value={number}>{number} </option>
          ))}
            </select>
            <label htmlFor='fontsize'>Color : </label>
     <input type='color' onChange={(e)=>newtext.colorhandlechange(e)} value={newtext.colorcode}></input>
</div>
<div className='checkboxes'>
<label>Bold
<input type='checkbox'/></label>
<label>italic
<input type='checkbox'/></label>
<label>underline
<input type='checkbox'/></label>
</div>
<button type='submit' onClick={newtext.handlesubmit}>Submit</button>
            </form>
     
  
    )
    
  
}