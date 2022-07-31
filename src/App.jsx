import React, { useState } from 'react';

const App =()=>{

  const state = useState();
  const [count, setCount]=useState(1);

//let count=1;
const Incnum =()=>{
  setCount(count+1);
}
  return(
    <>
    <div>

     <div className='lc'>CLICK  THE  BUTTON  TO  INCREASE  THE  COUNT</div>
     <br/>
     <div>
      <h1>
        {count}
      </h1>
      </div>
      <div>
      <button onClick={Incnum}>
        Click me
      </button>
      </div>
      </div>
    </>
  )
}
export default App;
