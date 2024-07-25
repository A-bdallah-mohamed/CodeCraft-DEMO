import logo from './logo.svg';
import './App.css';
import Temp from './components/temp';
import Home from './websites/website1/home';
import React ,{useState} from 'react';
function App() {
  const [editable,seteditable] = useState(true)
  return (
    <>
<Temp />
<Home editable={editable}/>
<Home />
</>
  );
}

export default App;
