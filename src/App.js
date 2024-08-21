import logo from './logo.svg';

import Website1 from './websites/website1/website1';
import React ,{useState} from 'react';
function App() {
  const [editable,seteditable] = useState(true)
  return (
    <div className='container'>
<Website1 />
</div>
  );
}

export default App;
