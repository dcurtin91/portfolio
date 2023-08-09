import React, { useEffect, useRef, useState } from "react";
import './App.css';

export default function Summary() {
    const ref = useRef()

    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleClickOutside = event => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen, ref]
    )


    return (
        <div ref={ref}>

            <div onClick={() => setIsOpen(!isOpen)} className="sum">Summary</div>
            {isOpen && <div style={{ textAlign: "center", fontSize: "14px", paddingTop: "20px", color: "black", backgroundColor: "#f7f7f7", border: "2px solid #000000", position: "fixed", paddingInline: "10px", width: "500px" }}>ChatGPT attempts to sell itself a Honda Civic.<br></br>
                The chat contains two characters:<br></br>
                Jimmy, a timid individual who is interested in a car but is not sure if he's financially ready, and Gary, an aggressive salesman who won't give up.<br></br>
                *New messages sent every Tuesday*
                <h3 style={{ cursor: "pointer", color: "GrayText", marginTop: "10px" }} onClick={() => setIsOpen(false)}>close</h3></div>}
        </div>
    )
}
