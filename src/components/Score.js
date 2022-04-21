import React, { useEffect, useState } from "react";
import database from "../utils/firebase";
import {ref, onValue, query, orderByChild, limitToLast } from "firebase/database";

export default function Score({count, scoreTop, scoreRight}) {
    const [scoreBoard, setScoreBoard] = useState([])

    useEffect(() => {
        const scoreRef = query(ref(database, 'scores'), orderByChild('score'))
        const top5Ref = query(scoreRef, limitToLast(5))

        onValue(top5Ref, (snapshot) => {
            const players = snapshot.val()
            const newBoard = []
            for(let key in players){
                newBoard.push({key, ...players[key]})
            }
            console.log(newBoard)
            setScoreBoard(newBoard.sort((a,b) => b.score - a.score))
        })
    }, [])   
    
    return (
        <div style={{
            position: 'absolute',
            top: scoreTop,
            right: scoreRight,
        }}>
            <h1>Score: {count}</h1>
            <h4>Score Board: </h4>
            <ol>
                {scoreBoard.map((player) => (
                    <li key={player.player} style={{
                        textAlign: "justify"
                    }}> 
                        {player.name} - {player.score}
                    </li>
                ))
            }</ol>
        </div>
        
    )
}