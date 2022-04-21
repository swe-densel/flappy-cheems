import React from "react";
import pinkWindow from '../imgs/pink-window.png';

export default function Memes() {
    return (
        <>
            <div style={{
              backgroundImage: `url(${pinkWindow})`,
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              padding: 10,
              width: 250,
              height: 250,
              position: 'absolute',
              bottom: 50,
              left: 50,
          }}>
              <img 
                alt=""
                style={{
                    backgroundImage: `url('https://c.tenor.com/hnbGxf0Zhu8AAAAd/mnananaicls-dance.gif')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    position: 'relative',
                    width: 225,
                    height: 225,
                    top: 10,
                }} />
          </div>

          <div style={{
              backgroundImage: `url(${pinkWindow})`,
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              padding: 10,
              width: 250,
              height: 250,
              position: 'absolute',
              top: 50,
              left: 500,
          }}>
              <img 
                alt=""
                style={{
                    backgroundImage: `url('https://c.tenor.com/_4YgA77ExHEAAAAC/rick-roll.gif')`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '100% 100%',
                    position: 'relative',
                    width: 225,
                    height: 225,
                    top: 10,
                }} />
          </div>
        </>
    )
}