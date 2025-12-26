import { useEffect, useState } from "react"

function Example(){
    const[data,setData] = useState(null)
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json))
    })

    return(
        <>
        {data ? <h1>{data.title}</h1> : <p>Loading...</p>}
        {/* yeta ternary operator use gareko ho */}
        </>
    )
}
export default Example