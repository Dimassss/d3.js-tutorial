import React from "react";
import { arc } from 'd3'

type Props = {
    mouthWidth: number,
    mouthRadius: number
}

export default function Mouth({mouthWidth, mouthRadius}: Props){
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthRadius + mouthWidth)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2)

    return (<path d={mouthArc(null)}/>)
}