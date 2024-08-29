import React , { useState } from "react";

const useChangetext = (text1,condition) =>{
    const [text , settext ] = useState(text1)
    const [newtext,setnewtext] = useState("")

    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }

    const handlesubmit = (e) => {
e.preventDefault()
if(condition){
    settext(newtext)
}

    }

    return { 
        text, 
        newtext, 
        handlechange, 
        handlesubmit, 
        setnewtext 
      };
    
}

export default useChangetext;