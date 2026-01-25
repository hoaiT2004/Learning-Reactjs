import React, { useEffect, useState } from 'react'

function Timer() {
  const [second, setSecond] = useState(1);
  const [minute, setMinute] = useState(59);
  const [hour, setHour] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
        const newSecond = second + 1;
        console.log("Gia tri cũ:", second);
        if (newSecond >= 60) {
            setSecond(newSecond - 60);
            const newMinute = minute + 1;
            if (newMinute >= 60) {
                setMinute(0);
                setHour(hour + 1);
            } else {
                setMinute(newMinute);
            }
        } else {
            setSecond(newSecond);
        }
    }, 1000)

    return (() => clearInterval(interval));
  }, []);

    return (
    <>
        <p>Thời gian</p>
        {hour + ":" + minute + ":" + second}
    </>
  )
}

export {Timer}
