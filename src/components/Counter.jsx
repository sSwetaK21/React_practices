import React,{useState, useEffect} from "react";

function Counter(){
    const [count, setCount] = useState(0);
    const [disable, setdisable] = useState(false)
    const handleIncre =()=>{
      setCount(count + 1)
    }
    const handleReset=()=>{
      setCount(0);
      setdisable(false)
    }
  const disabledFun =()=>{
    if(count <=0){
      setdisable(true)
    } else{
      setdisable(false);
      setCount(count - 1)
    }
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      document.title = `Time is: ${new Date()}`;
    }, 1000);
 
    return () => {
      document.title = "Time stopped.";
      clearInterval(intervalId);
    }
  }, []);

  
    return (
      <div className="App">
        <h1>Counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={handleIncre}> Increase</button>
          <button disabled ={disable} onClick={disabledFun}> Decrease</button>
          <button onClick={handleReset}> Reset</button>
          </div>
      </div>
    )
}
export default Counter