import React , { useState } from "react";
import Formtext from "../components/formtext";
const useChangetext = (text1,condition,setvisible) =>{
    const [text , settext ] = useState(text1)
    const [newtext,setnewtext] = useState("")
    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }
    const handlesubmit = (e) => {
e.preventDefault()
if(condition){
    settext(newtext)
    setvisible(false)
}}
    return { 
        text, 
        newtext, 
        handlechange, 
        handlesubmit, 
        setnewtext
      };
}
export default useChangetext;