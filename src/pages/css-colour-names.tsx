import { csv, arc } from "d3";
import React, { useEffect, useState } from "react";


const csvURL = "https://gist.githubusercontent.com/Dimassss/ac57ba6e63bff08e3c8c1e5e753b69cb/raw/3cfa44d2a1d9f6c5f6929f875a671c20b10cc849/css-named-colours.csv"

type csvEl = {
    'CSS Level': string,
    'Keyword': string,
    'RGB hex value': string
}

const pieArc = (i: number, piecesNumber: number, width: number, radius: number, velocity: number = 1) => {
    const step = (2 * Math.PI) / piecesNumber

    const a = arc()
        .innerRadius(radius * (i/piecesNumber))
        .outerRadius(radius * ((i+1)/piecesNumber) + width)
        .startAngle(step*i * velocity)
        .endAngle(step * (i+1) * velocity)
    
    return a(null)
}

export default function CssColourNames(){
    const [data, setData] = useState(null)
    const radius = 500;
    const width = 20

    useEffect(() => {
        csv(csvURL).then((d) => {
            setData(d)
            console.log(d)
        })
    }, [])

    if(!data){
        return <div>Loading</div>
    }

    return (<svg height={window.innerHeight} width={innerWidth}>
        <g transform={`translate(${window.innerWidth/2}, ${window.innerHeight/2})`}>
            {data.map((d: csvEl, i: number) => (
                <path 
                    fill={d['RGB hex value']} 
                    d={pieArc(i, data.length, width, radius, 5)}
                    key={i}
                />
            ))}
        </g>
    </svg>)
}