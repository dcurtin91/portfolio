import React, { useEffect, useRef, useState } from "react";


export default function SummaryTwo() {
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

            <div onClick={() => setIsOpen(!isOpen)} className="sum" >Summary</div>
            {isOpen && <div style={{ textAlign: "center", fontSize: "14px", paddingTop: "20px", color: "black", backgroundColor: "#f7f7f7", border: "2px solid #000000", position: "fixed", paddingInline: "10px", width: "500px" }}>Visualize audio through a spectrogram. <br></br>Upload a track or stream from your browser via YouTube, Apple Music, Spotify, etc.<br></br>
                Use the two graphs to compare your mix/master to your favorite artists' songs.
                <h3 style={{ cursor: "pointer", color: "GrayText", marginTop: "10px" }} onClick={() => setIsOpen(false)}>close</h3></div>}
        </div>
    )
}
