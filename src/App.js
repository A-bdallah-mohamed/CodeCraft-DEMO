import logo from './logo.svg';
import Website1 from './websites/website1/website1';
import React ,{useState} from 'react';
import Platform from './platform/platform';
function App() {
  const [editable,seteditable] = useState(true)
  return (
    <div className='container'>
<Platform />
</div>
  );
}

export default App;
