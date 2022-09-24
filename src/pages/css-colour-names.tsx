import { csv } from "d3";
import React, { useEffect, useState } from "react";


const csvURL = "https://gist.githubusercontent.com/Dimassss/ac57ba6e63bff08e3c8c1e5e753b69cb/raw/3cfa44d2a1d9f6c5f6929f875a671c20b10cc849/css-named-colours.csv"

export default function CssColourNames(){
    const [data, setData] = useState(null)

    useEffect(() => {
        csv(csvURL).then(d => {
            setData(d)
        })
    }, [])

    return (<div>{data ? "Loaded" : 'Loading'}</div>)
}