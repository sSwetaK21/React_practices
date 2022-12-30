import React, {useState,useRef} from 'react'

export default function Controlled() {
const [name, setName] = useState('')
function handleSubmit() {
  alert(`Name: ${name}`);
}

  return (
    <div className="App">
 <h2>controlled</h2>
 <form onSubmit={handleSubmit}>
   <input type="text" value={name} onChange={(e) =>{setName(e.target.value)}}/>
     <button type="submit"> Submit</button>
   </form>
    </div>
  );
}
