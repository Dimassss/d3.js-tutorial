import React from "react"

type Props = {
    children: JSX.Element[],
    width: number,
    height: number,
    centerX: number,
    centerY: number
}

export default function FaceContainer({children, width, height, centerX, centerY}: Props){

    return (<svg width={width} height={height}>
        <g transform={`translate(${centerX}, ${centerY})`}>
            {children}
        </g>
    </svg>)
}