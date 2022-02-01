import React, { useState, useEffect } from "react";
import "./ticker.css";


const Ticker = () => {
  const targetDate = "02/28/2022 15:49:00";

  const calculateTimeLeft = () => {
    //let year = new Date().getFullYear();
    let difference = +new Date(targetDate) - +new Date().getTime();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="banner">
      <h1 className="bannerText">
      Public Sale in: <br />{timerComponents.length ? timerComponents : <span>Time's up!</span>}
      </h1>
    </div>
  );
};

export default Ticker