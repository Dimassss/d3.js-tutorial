import React from "react";

type Props = {
    radius: number,
    strokeWidth: number
}

export default function BackgroundCircle({ radius, strokeWidth}: Props){
    return (<circle
        r={radius}
        fill="yellow"
        stroke="black"
        strokeWidth={strokeWidth}
    ></circle>)
}