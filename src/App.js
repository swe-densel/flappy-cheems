import React, { useEffect, useState } from 'react';
import './App.css';
import Bat from './components/Bat';
import Cheems from './components/Cheems'
import useWindowDimensions from './components/Dimensions';
import Score from './components/Score';

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

  let gameTimerId
  let batLeftTimerId
  let batLeftTimerId2
  let batLeftTimerId3

  const [score, setScore] = useState(0)
  const [isGameOver, setIsGameOver] = useState(false)


  //start falling cheems
  useEffect(() => {
    if (cheemsBottom > 0){
      gameTimerId = setInterval(() => {
        setCheemsBottom(cheemsBottom => cheemsBottom - gravity)
      }, 30)
 
      return () => {
        clearInterval(gameTimerId)
      }
    }
  }, [cheemsBottom])

  const jump = () => {
    if(!isGameOver && (cheemsBottom < windowHeight)){
      setCheemsBottom(cheemsBottom => cheemsBottom + 50)
    }
  }

  useEffect(() => {
    if (batLeft > -batWidth) {
      batLeftTimerId = setInterval(() => {
        setBatLeft(batLeft => batLeft - 5 - (score * 0.1))
      }, 20)

      return () => {
        clearInterval(batLeftTimerId)
      }    

    } else {
      setBatLeft(windowWidth - Math.random() * 20)
      setBatNegHeight( - Math.random() * 100)
      setScore(score => score + 1)
    }

  }, [batLeft])

  useEffect(() => {
    if (batLeft2 > -batWidth) {
      batLeftTimerId2 = setInterval(() => {
        setBatLeft2(batLeft2 => batLeft2 - 5 - (score * 0.1))
      }, 20)

      return () => {
        clearInterval(batLeftTimerId2)
      }    

    }  else {
      setBatLeft2(windowWidth - Math.random() * 20)
      setBatNegHeight2( - Math.random() * 100)
      setScore(score => score + 1)
      
    }

  }, [batLeft2])

  useEffect(() => {
    if (batLeft3 > -batWidth) {
      batLeftTimerId3 = setInterval(() => {
        setBatLeft3(batLeft3 => batLeft3 - 5 - (score * 0.1))
      }, 20)

      return () => {
        clearInterval(batLeftTimerId3)
      }    

    }  else {
      setBatLeft3(windowWidth - Math.random() * 20)
      setBatNegHeight3( - Math.random() * 100)
      setScore(score => score + 1)
      
    }

  }, [batLeft3])

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
    clearInterval(gameTimerId)
    clearInterval(batLeftTimerId)
    clearInterval(batLeftTimerId2)
    clearInterval(batLeftTimerId3)
    setIsGameOver(true)
  }



  return (
      <div class='App' onClick={jump}>
        <header class='App-header'>
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
        </header>
      </div>
  );
}
