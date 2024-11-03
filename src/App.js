import logo from './logo.svg';
import'./App.css';
import { useState } from 'react';

function App(){
  let [count,setCount]=useState(1)
    let displayItem=()=>{
      setCount(count++)
    }

return (
    <div className= 'bg-[red] ml-[50px] pt-[50px] text-[40px] c-[white]'>
      {count}
    <button onClick={displayItem}className='bg-[white]'>click me</button>
    <button className='bg-[blue]'>click me</button>
    </div>
  );
}

export default App;

