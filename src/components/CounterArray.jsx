import React, {useState} from 'react'

export default function CounterArray() {
  const [count, setCount] = useState([0])

  const handleAppend =()=>{
    setCount([...count, count[count.length -1] +1])
  }
  const handlePop =()=>{
   
      setCount([...count.slice(0, count.length-1)])
    
  }
  
  return (
    <div className="App">
      <h1>{count}</h1>
      <button disabled={count.length === 11} onClick={handleAppend}>Append</button>
      <button disabled={count.length === 1} onClick={handlePop}>Pop</button>
    </div>
  );
}
