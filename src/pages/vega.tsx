import React, { useEffect, useState } from "react";
import { viz } from '../utils/viz'
import { config } from "../utils/config";
import { getData } from "../utils/getData";


const run = async () => {
    const d = await getData()
    console.log(d)
    const marks = viz
        .data(d)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .autosize({ type: 'fit', contains: 'padding' })
        .config({config})

    document.body.appendChild(await marks.render())
}


export default function VegaPage(){
    useEffect(() => {
        run()
    }, [])

    return (<div></div>)
}