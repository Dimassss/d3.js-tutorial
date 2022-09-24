import React from "react";
import Face from "../components/smile/Face";
import { range } from "d3"
import { Link } from 'react-router-dom'

export default function SmilePage(){
    const width = 160
    const height = 160;

    return (<div>
        <Link to={'/'}>Home</Link><br/>
        {
            range(6*3).map((el, i) => (<Face 
                width={width} 
                height={height} 
                centerX={width / 2} 
                centerY={height / 2} 
                strokeWidth={10} 
                eyeOffsetX={30} 
                eyeOffsetY={30} 
                eyeRadius={10 + Math.random()*10} 
                mouthRadius={40} 
                mouthWidth={10}
                key={i}
            />))
        }
    </div>)
}