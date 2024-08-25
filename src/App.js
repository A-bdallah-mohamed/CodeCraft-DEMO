import logo from './logo.svg';
import Website1routes from './websites/website1/website1routes';
import React ,{useState} from 'react';
import Platform from './platform/platform';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import websitesDB from './db/websiteDB';
function App() {
  const DB = websitesDB
  const [editable,seteditable] = useState(true)
  return (
     <Router>
    <Routes>
      <Route path="/" element={<Platform />} />
      {websitesDB.map((website, inx) => (
              <Route path={`/${website.name}/*`} element={<website.component />} key={inx} />
           
      ))}
    </Routes>
  </Router>
  );
}

export default App;
