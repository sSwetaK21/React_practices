import React,{useState, useEffect} from 'react'

function FetchData() {
    const [data, setData] = useState([])
     useEffect( ()=>{
        const url = "https://jsonplaceholder.typicode.com/users/1";

        const fetchData =async ()=>{
            try{
                const res = await fetch(url)
                const json = await res.json()
                // console.log(json)
                setData(json)
            } catch(error){
                console.log(error)
            }
        }

        fetchData()
     },[])

    return(
        <>
       
                <div>
                    <p>{data.name}</p>
                    <p>{data.email}</p>
                </div>

        </>
    )
}

export default FetchData