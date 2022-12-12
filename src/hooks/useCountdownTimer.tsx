import { useEffect, useState } from 'react'

export const useCountdownTimer = () => {
  const [countDown, setCountDown] = useState(0)
  const [runTimer, setRunTimer] = useState(true);
  

  // const togglerTimer = () => setRunTimer((t) => !t);

  const resetTimer = () =>{
    setRunTimer(false)
    setTimeout(() =>{
      setRunTimer(true)
    },1000)
  }

  useEffect(() => {
    let timerId: any

    if (runTimer) {
      setCountDown(60 * 10)
      timerId = setInterval(() => {
        setCountDown((countDown) => countDown - 1)
      }, 1000)
    } else {
      clearInterval(timerId)
    }

    return () => clearInterval(timerId)
  }, [runTimer])

  useEffect(() => {
    if (countDown < 0 && runTimer) {
      setRunTimer(false)
      setCountDown(0)
    }
  }, [countDown, runTimer])

  const seconds = String(countDown % 60).padStart(2, '0')
  const minutes = String(Math.floor(countDown / 60)).padStart(2, '0')

  return { seconds, minutes,resetTimer }
}
