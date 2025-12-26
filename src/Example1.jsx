import { useRef, useState } from "react"

function Example1(){
    const clickRef = useRef(0)
    const[render,setRender]= useState(false)

    function handleClick(){
        clickRef.current++
        console.log("Cilck", clickRef.current)
    }
     function handleRender(){
        setRender(!render)
     }
    return(
        <div>
            <h2>UseReference Example</h2>
            <p>count {clickRef.current}</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleRender}>Refresh UI</button>
        </div>
    )


}
export default Example1