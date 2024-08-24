import logo from './logo.svg';
import Website1routes from './websites/website1/website1routes';
import React ,{useState} from 'react';
import Platform from './platform/platform';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';

function App() {
  const [editable,seteditable] = useState(true)
  return (
     <Router>
    <Routes>
      <Route path="/" element={<Platform />} />
      <Route path="/website1/*" element={<Website1routes />} />
    </Routes>
  </Router>
  );
}

export default App;
