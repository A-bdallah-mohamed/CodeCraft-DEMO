import React , {useState}from 'react'

export default function Home({editable}) {
  const [borderedBox, setBorderedBox] = useState(null);

  const borderStyle = { border: '2px solid black' };

  const putborder = (component) => {
    if(editable){
      setBorderedBox(component);
    }

  };


  return (
    <div className='website1homecontainer'>
        <div className='box' style={borderedBox === 1 ? borderStyle : {}} onMouseEnter={()=>putborder(1)} onMouseLeave={()=>putborder(0)}></div>
    </div>
  )
}
