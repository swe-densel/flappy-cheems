import React from "react";

export default function Score({count, scoreTop, scoreRight}) {
    return (
        <h1 style={{
            position: 'absolute',
            top: scoreTop,
            right: scoreRight,
        }}> {count} </h1>
    )
}