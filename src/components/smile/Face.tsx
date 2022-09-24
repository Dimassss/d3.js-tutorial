import React from "react"
import BackgroundCircle from "./BackgroundCircle"
import Eyes from "./Eyes"
import FaceContainer from "./FaceContainer"
import Mouth from "./Mouth"

type Props = {
    width: number,
    height: number,
    centerX: number,
    centerY: number,
    strokeWidth: number,
    eyeOffsetX: number,
    eyeOffsetY: number,
    eyeRadius: number,
    mouthRadius: number,
    mouthWidth: number
}

export default function Face({
    width,
    height,
    centerX,
    centerY,
    strokeWidth,
    eyeOffsetX,
    eyeOffsetY,
    eyeRadius,
    mouthRadius,
    mouthWidth
}: Props){
    return (<FaceContainer width={width} height={height} centerX={centerX} centerY={centerY}>
        <BackgroundCircle radius={centerY - strokeWidth / 2} strokeWidth={strokeWidth}/>
        <Eyes offX={eyeOffsetX} offY={eyeOffsetY} r={eyeRadius}/>
        <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
    </FaceContainer>)
}