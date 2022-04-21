import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Bat from './components/Bat';
import Cheems from './components/Cheems'
import useWindowDimensions from './utils/dimensions';
import Score from './components/Score';
import Menu  from './components/Menu';
import Retry from './components/Retry';
import RandomAPI from './components/RandomAPI';
import Memes from './components/Memes';

export default function App() {
  const windowHeight = useWindowDimensions().height
  const windowWidth = useWindowDimensions().width

  const cheemsLeft = windowWidth / 2
  const [cheemsBottom, setCheemsBottom] = useState(windowHeight/2)
  const gravity = 3

  const batWidth = 50
  const batHeight = 500
  const gap = 160

  const [batLeft, setBatLeft] = useState(windowWidth)
  const [batLeft2, setBatLeft2] = useState(windowWidth + windowWidth/3)
  const [batLeft3, setBatLeft3] = useState(windowWidth + windowWidth*2/3)

  const [batNegHeight, setBatNegHeight] = useState(0)
  const [batNegHeight2, setBatNegHeight2] = useState(0)
  const [batNegHeight3, setBatNegHeight3] = useState(0)

  const gameTimerId = useRef(0)
  const batLeftTimerId = useRef(0)
  const batLeftTimerId2 = useRef(0)
  const batLeftTimerId3 = useRef(0)

  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(true)
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [isRetryVisible, setIsRetryVisible] = useState(false)  

  const startGame = () => {
    setIsGameOver(false)
    setIsMenuVisible(false)
  }

  const resetGame = () => {
    setScore(0)

    setCheemsBottom(windowHeight/2)
    setBatLeft(windowWidth)
    setBatLeft2(windowWidth + windowWidth/3)
    setBatLeft3(windowWidth + windowWidth*2/3)

    setBatNegHeight(0)
    setBatNegHeight2(0)
    setBatNegHeight3(0)

    setIsRetryVisible(false)
    setIsMenuVisible(true)
  }

  const jump = () => {
    if(!isGameOver && (cheemsBottom < windowHeight)){
      setCheemsBottom(cheemsBottom => cheemsBottom + 50)
    }
  }

  //start falling cheems
  useEffect(() => {
    if (cheemsBottom > 0 && !isGameOver){
      gameTimerId.current = setInterval(() => {
        setCheemsBottom(cheemsBottom => cheemsBottom - gravity)
      }, 30)
 
      return () => {
        clearInterval(gameTimerId.current)
      }
    }
  }, [cheemsBottom, isGameOver])

  //baseball bat 1 movement
  useEffect(() => {
    if (!isGameOver){

      if (batLeft > -batWidth) {
        batLeftTimerId.current = setInterval(() => {
          setBatLeft(batLeft => batLeft - 5 - (score * 0.1))
        }, 20)
  
        return () => {
          clearInterval(batLeftTimerId.current)
        }    
  
      } else {
        setBatLeft(windowWidth - Math.random() * 20)
        setBatNegHeight( - Math.random() * 225)
        setScore(score => score + 1)
      }
    }

  }, [batLeft, isGameOver, score, windowWidth])

  //baseball bat 2 movement
  useEffect(() => {
    if (!isGameOver){

      if (batLeft2 > -batWidth) {
        batLeftTimerId2.current = setInterval(() => {
          setBatLeft2(batLeft2 => batLeft2 - 5 - (score * 0.1))
        }, 20)
  
        return () => {
          clearInterval(batLeftTimerId2.current)
        }    
  
      }  else {
        setBatLeft2(windowWidth - Math.random() * 20)
        setBatNegHeight2( - Math.random() * 225)
        setScore(score => score + 1)
        
      }
    }

  }, [batLeft2, isGameOver, score, windowWidth])

  //baseball bat 3 movement
  useEffect(() => {
    if (!isGameOver){

      if (batLeft3 > -batWidth) {
        batLeftTimerId3.current = setInterval(() => {
          setBatLeft3(batLeft3 => batLeft3 - 5 - (score * 0.1))
        }, 20)
  
        return () => {
          clearInterval(batLeftTimerId3.current)
        }    
  
      }  else {
        setBatLeft3(windowWidth - Math.random() * 20)
        setBatNegHeight3( - Math.random() * 225)
        setScore(score => score + 1)
        
      }
    }
    
  }, [batLeft3, isGameOver, score, windowWidth])

  useEffect(() => {
    if (
      ((cheemsBottom < (batNegHeight + batHeight + 30) ||
      cheemsBottom > (batNegHeight + batHeight + gap - 30 )) &&
      (batLeft > windowWidth/2 -30 && batLeft < windowWidth/2 + 30))
      || 
      ((cheemsBottom < (batNegHeight2 + batHeight + 30) ||
      cheemsBottom > (batNegHeight2 + batHeight + gap - 30 )) &&
      (batLeft2 > windowWidth/2 -30 && batLeft2 < windowWidth/2 + 30))
      ||
      ((cheemsBottom < (batNegHeight3 + batHeight + 30) ||
      cheemsBottom > (batNegHeight3 + batHeight + gap - 30 )) &&
      (batLeft3 > windowWidth/2 -30 && batLeft3 < windowWidth/2 + 30)) 
    ) {

      gameOver()
    
    }  
    
  })

  const gameOver = () => {
    clearInterval(gameTimerId.current)
    clearInterval(batLeftTimerId.current)
    clearInterval(batLeftTimerId2.current)
    clearInterval(batLeftTimerId3.current)
    setIsGameOver(true)
    setIsRetryVisible(true)
  }

  return (
      <div class='App' onClick={jump}>
        <header class='App-header'>
          <RandomAPI/>
          <Memes />
          <Cheems 
            cheemsBottom = {cheemsBottom}
            cheemsLeft = {cheemsLeft}
          />
          <Bat
            batLeft = {batLeft}
            batWidth = {batWidth}
            batHeight = {batHeight}
            gap = {gap}
            randomBottom = {batNegHeight}
          />
          <Bat
            batLeft = {batLeft2}
            randomBottom = {batNegHeight2}
            batWidth = {batWidth}
            batHeight = {batHeight}
            gap = {gap}
          />
          <Bat
            batLeft = {batLeft3}
            randomBottom = {batNegHeight3}
            batWidth = {batWidth}
            batHeight = {batHeight}
            gap = {gap}
          />
          <Score 
            count = {score}
            scoreTop = {windowHeight/50}
            scoreRight = {windowWidth/50}
          />

          {isMenuVisible ? 
            <Menu 
              startGame = {startGame}
            /> 
          : null}

          {isRetryVisible ? 
            <Retry 
              resetGame = {resetGame}
              score = {score}
            /> 
          : null}
          
        </header>
      </div>
  );
}
