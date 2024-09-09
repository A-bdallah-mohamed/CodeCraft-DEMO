import React , { useEffect, useState } from "react";
import Formtext from "../components/formtext";
const UseChangetext = (textt,setvisible) =>{

    const [text,    settext ] = useState(textt)
    useEffect(()=>{
console.log(textt)
    },[text])
    const [newtext,setnewtext] = useState("")

    const [prevtext,setprevtext] = useState("")


    const handlechange = (e)  => {
        setnewtext(e.target.value)
        
        console.log(newtext)
    }


    const handlesubmit = (e) => {
        e.preventDefault();
        console.log("current is : ",text)
        setprevtext(text)
        settext(newtext)
        console.log("new is : ",newtext)
   
    console.log("prev is : ",prevtext)

   
    setvisible(false)
    }


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
export default UseChangetext;