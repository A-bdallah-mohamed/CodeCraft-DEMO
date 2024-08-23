import logo from './logo.svg';
import Website1 from './websites/website1/website1';
import React ,{useState} from 'react';
import Platform from './platform/platform';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  const [editable,seteditable] = useState(true)
  return (
     <Router>
    <Routes>
      <Route path="/" element={<Platform />} />
      <Route path="/website1" element={<Website1 />} />
    </Routes>
  </Router>
  );
}

export default App;
