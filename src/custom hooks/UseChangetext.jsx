import React , { useEffect, useState } from "react";
import Form from "../components/Form";
import * as FaIcons from 'react-icons/fa'
const UseChangetext = (textt,setvisible,icon) =>{

// reutrn outline style
// change text style (bordered, underlined, italic)
// change react icons

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
    const [fontsize,setfontsize] = useState(16)
    const [newfont,setnewfont] = useState(fontsize)
    const handlefontchange = (e) => {
         e.preventDefault()
        setnewfont(e.target.value)
    }
const style = {
    fontSize: fontsize
}
const [colorcode,setcolorcode] = useState("#000000")
const [Color,setColor] = useState(colorcode)
const colorhandlechange = (e) =>{
    e.preventDefault();
    setcolorcode(e.target.value)
}
const [Tstyle,setTstyle] = useState("none")
const [textstyle,settextstyle] = useState(Tstyle)
const stylehandlechange = (e) => {
    e.preventDefault()
    settextstyle(e.target.value)
}
useEffect(()=>{
console.log("existing array",prevtext)
console.log("id",itemid)
console.log("item itself",prevtext[itemid])
console.log("length",prevtext.length)
console.log( "redo",disableredobutton)
console.log( "undo",disabelundo)
console.log("new array",newarray)
console.log("Color",colorcode)
console.log("font size in ",itemid, " is ",fontsize)
console.log("react icons FA",FaIcons.FaMix)
setnewarray([...prevtext])
settext(prevtext[itemid])
    setdisableredobutton(itemid < prevtext.length-1)
    setdisableredobutton(itemid == prevtext.length-1)
    setdisabelundo(itemid > 0)
    setdisabelundo(itemid == 0)
},[prevtext,itemid,text,colorcode])


    const handlesubmit = (e) => {


        e.preventDefault()

if(!newtext == ""){
    const newid = itemid + 1
    const length = prevtext.length
    const diff = length - newid
    const neww = newarray
    neww.splice(newid , diff , newtext)
    
    
            setnewarray(neww)
            setitemid(itemid+1)
            setprevtext(newarray);
}
setColor(colorcode)
        setvisible(false)
        setfontsize(newfont)
        setTstyle(textstyle)
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
        undo, redo ,disableredobutton ,disabelundo,style ,fontsize,handlefontchange,icon,Color,colorhandlechange,colorcode,Tstyle,
        stylehandlechange
      };
}
export default UseChangetext;