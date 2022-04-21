import React, { useEffect, useState } from "react";
import pinkWindow from '../imgs/pink-window.png';

export default function RandomAPI() {
    const [message, setMessage] = useState('')
    const [url, setUrl] = useState('')

    const getDogData = async () => {
        try {
          const response = await fetch('https://dog.ceo/api/breeds/image/random', {
            headers: {
              Accept: 'application/json'
            }
          })
    
          const { message } = await response.json()
          setMessage(message)
    
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
        let dogTimerId = setInterval(() => {
            getDogData()
          }, 3000)
    
          return () => {
            clearInterval(dogTimerId)
          } 
    })

    const getMemeData = async () => {
      try {
        const response = await fetch('https://meme-api.herokuapp.com/gimme', {
          headers: {
            Accept: 'application/json'
          }
        })
  
        const { url } = await response.json()
        setUrl(url)
  
      } catch (error) {
        console.log(error)
      }
  }

    useEffect(() => {
      let memeTimerId = setInterval(() => {
          getMemeData()
        }, 3200)
  
        return () => {
          clearInterval(memeTimerId)
        } 
  })

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
            right: 400,
            bottom: 25,
        }}>
            <img 
              alt=""
              style={{
                backgroundImage: `url(${message})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                position: 'relative',
                width: 225,
                height: 225,
                top: 10,
            }}/>
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
            right: 300,
            top: 25,
        }}>
            <img 
              alt=""
              style={{
                backgroundImage: `url(${url})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% 100%',
                position: 'relative',
                width: 225,
                height: 225,
                top: 10,
            }}/>
        </div>
      </>
    )
}


  