import React , { useState } from "react";
import Formtext from "../components/formtext";
const useChangetext = (text1,condition,setvisible) =>{
    const [text , settext ] = useState(text1)
    const [newtext,setnewtext] = useState("")
    const [prevtext,setprevtext] = useState("")
    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }
    const handlesubmit = (e) => {
e.preventDefault()
if(condition){
    setprevtext(text)
    settext(newtext)
    setvisible(false)
}}
const undo =()=>{
    setnewtext(prevtext)
    setprevtext(text)
    settext(newtext)
    console.log("current text is : ",text,"prevtext is : ",prevtext)
}
    return { 
        text, 
        newtext, 
        handlechange, 
        handlesubmit, 
        setnewtext,
        prevtext,
        undo
      };
}
export default useChangetext;