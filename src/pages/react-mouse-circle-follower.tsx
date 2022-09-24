import React, { MouseEvent, useState } from "react";


const width = window.innerWidth
const height = window.innerHeight;
const circleRadius = 30
const initialMousePosition = {x: width / 2, y: height / 2}

export default function ReactMouseCircleFollower(){
    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = (e: MouseEvent) => {
        const { clientX: x, clientY: y } = e
        setMousePosition({x,y})
    }

    return (<svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius}
        ></circle>
    </svg>)
}