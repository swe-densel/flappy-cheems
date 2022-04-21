import React, { useState } from "react";
import database from "../utils/firebase";
import { ref, set } from "firebase/database";

import sadPic from '../imgs/game-over.jpg'
import btnRetry from '../imgs/retry-button.png'
import pinkWindow from '../imgs/pink-window.png'

export default function Retry({resetGame, score}) {
    const [name, setName] = useState('')
    const [isRecordVisible, setIsRecordVisible] = useState(true)

    const handleOnChange = (e) => {
        setName(e.target.value);
      };

    const saveScore = () => {
        set(ref(database, 'scores/' + name), {
            name: name,
            score: score
          });
        setIsRecordVisible(false)
    };

    return (
        <>
            <div style={{
                backgroundImage: `url(${sadPic})`,
                position: 'absolute',
                width: 500,
                height: 354,
                bottom: 320
            }}/>

            <button 
                onClick={resetGame} 
                style={{
                    backgroundImage: `url(${btnRetry})`,
                    position: 'absolute',
                    width: 205,
                    height: 67,
                    bottom: 225,
            }}/>

            <div style={{
                backgroundImage: `url(${pinkWindow})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                bottom: 30,
            }}>
                {isRecordVisible ?
                <>
                    <h5 style={{
                        position: 'relative',
                        color: "black"
                    }}>
                        Save your name to enter the score board.
                    </h5>

                    <input 
                        type="text" 
                        onChange={handleOnChange} 
                        value={name} 
                        style={{
                            width: 200,
                            height: 30,
                        }} />

                    <button 
                        onClick={saveScore}
                        style={{
                            height: 30,
                            width: 90
                        }}>Save</button>
                </>
                :
                    <h5 style={{
                        position: 'relative',
                        color: "black"
                    }}>
                        Name saved successfully! :)
                    </h5>
            }
                
            </div>
        </>
        
    )
}