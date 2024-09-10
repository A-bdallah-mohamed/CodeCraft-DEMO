import React , { useEffect, useState } from "react";
import Formtext from "../components/formtext";
const UseChangetext = (textt,setvisible) =>{

    const [text,    settext ] = useState(textt)
    const [newtext,setnewtext] = useState("")
    const [prevtext,setprevtext] = useState([textt])
    const [itemid,setitemid] = useState(0)
    const [disableredobutton,setdisableredobutton] = useState(true)
    const[disabelundo,setdisabelundo] = useState(true)
    const [newarray,setnewarray] = useState([])
    const handlechange = (e)  => {
        setnewtext(e.target.value)
    }

useEffect(()=>{
console.log("existing array",prevtext)
console.log("id",itemid)
console.log("item itself",prevtext[itemid])
console.log("length",prevtext.length)
console.log( "redo",disableredobutton)
console.log( "undo",disabelundo)
setnewarray([...prevtext])
console.log("new array",newarray)
settext(prevtext[itemid])
if(itemid < prevtext.length-1){
    setdisableredobutton(false)
}
 else if(!itemid < prevtext.length-1){
    setdisableredobutton(true)
}
 if (itemid > 0){
    setdisabelundo(false)
}
else if (itemid == 0){
    setdisabelundo(true)
}
},[prevtext,itemid,text])


    const handlesubmit = (e) => {
        e.preventDefault();
const newid = itemid + 1
const length = prevtext.length
const diff = length - newid
const neww = newarray
neww.splice(newid , diff , newtext)
setnewarray(neww)
        setitemid(itemid+1)

        setprevtext(newarray);

    setvisible(false)

    }


const undo =(e)=>{
    e.preventDefault();
    if (itemid > 0){
        const lessid = itemid - 1
        setitemid(lessid)
    }
else{
console.log("cant undo")
}
    setvisible(false)
}

const redo = (e) => {
    e.preventDefault();
    if(itemid < prevtext.length-1){
        setitemid(itemid+1)
    }
    setvisible(false)
}
    return { 
        text, 
        newtext, 
        handlechange, 
        handlesubmit, 
        setnewtext,
        prevtext,
        undo, redo ,disableredobutton ,disabelundo
      };
}
export default UseChangetext;