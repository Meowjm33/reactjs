import { useState } from "react"

function ColorBox() {
    const [color, setColor] = useState("rgba(241, 157, 67, 1)")
    return (
        <>

            <body style={{
                background: color
            }} />
            <h3>Choose the background color You Like</h3>
            <button onClick={() => setColor("rgba(231, 69, 96, 1)")}>Red</button >
            <button onClick={() => setColor("pink")}>Pink</button >
            <button onClick={() => setColor("rgb(159, 72, 178)")}>Purple</button >
                

        </>
    )
}
export default ColorBox