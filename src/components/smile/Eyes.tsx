import React from "react";

type Props = {
    offX: number, 
    offY: number,
    r: number
}

export default function Eyes({ offX, offY, r }: Props){
    return (<>
        <circle
            cx={-offX}
            cy={-offY}
            r={r}
        ></circle>
        <circle
            cx={offX}
            cy={-offY}
            r={r}
        ></circle>
    </>)
}