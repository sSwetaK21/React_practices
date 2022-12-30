import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    const [timer,setTimer] = useState(new Date());
    
    useEffect(() => {
        var timing = setInterval(()=>setTimer(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timing)
        }
    
    });

    return(
        <div>
            <p> Time : {timer.toLocaleTimeString()}</p>
            <p> Date : {timer.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime