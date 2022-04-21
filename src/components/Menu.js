import React from "react";
import logo from '../imgs/flappy-cheems-logo.png'
import btnStart from '../imgs/start-button.png'
import pinkWindow from '../imgs/pink-window.png'

export default function Menu({startGame}) {

    return (
        <>
            <div style={{
                backgroundImage: `url(${logo})`,
                position: 'absolute',
                width: 500,
                height: 500,
                top: 100,
                left: 250
            }}/>

            <button onClick={startGame} style={{
                backgroundImage: `url(${btnStart})`,
                position: 'absolute',
                width: 205,
                height: 67,
                bottom: 150,
                left: 400
            }}/>

            <div style={{
                backgroundImage: `url(${pinkWindow})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                position: 'absolute',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                right: 300
            }}>
                
                <h5 style={{
                    position: 'relative',
                    color: "black"
                }}> How To Play: 
                </h5>

                <ol>
                    <li style={{
                        textAlign: "justify",
                        color: "black"
                    }}>Guide Cheems by clicking on the screen.</li>

                    <li style={{
                        textAlign: "justify",
                        color: "black"
                    }}>Do not get bonked by baseball bats.</li>

                    <li style={{
                        textAlign: "justify",
                        color: "black"
                    }}>Please play in fullscreen.</li>
                </ol>


            </div>
        </>
        
    )
}