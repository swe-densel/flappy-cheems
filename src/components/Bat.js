import React from "react";
import batImg from '../imgs/baseball-bat.png'
import batImg2 from '../imgs/baseball-bat2.png'

export default function Bat({
    batLeft, 
    batWidth, 
    batHeight, 
    gap, 
    randomBottom
}) {
    return (
        <>
            <div style={{
                position: 'absolute',
                backgroundImage: `url(${batImg2})`,
                width: batWidth,
                height: batHeight,
                left: batLeft,
                bottom: randomBottom + batHeight + gap,
            }} />

            <div style={{
                position: 'absolute',
                backgroundImage: `url(${batImg})`,
                width: batWidth,
                height: batHeight,
                left: batLeft,
                bottom: randomBottom,
            }}/>
        </>
    )
}