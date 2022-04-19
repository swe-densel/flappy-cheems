import React from "react";
import cheemsImg from '../imgs/cheems.png'

export default function Cheems({cheemsBottom, cheemsLeft}) {
    const cheemsWidth = 100
    const cheemsHeight = 100

    return (
        <div style={{
            backgroundImage: `url(${cheemsImg})`,
            position: 'absolute',
            width: cheemsWidth,
            height: cheemsHeight,
            bottom: cheemsBottom - (cheemsHeight/2),
            left: cheemsLeft - (cheemsWidth/2),
        }}/>
    )
}