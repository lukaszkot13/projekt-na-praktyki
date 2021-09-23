import React, { useState, useRef } from "react";
import styled from "styled-components";

import Propsy from "../components/StoperPrppsy";

const CointainerLicznik = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin-top: 6%;
`;
const Czasomierz = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Stoper = () => {
  const [timer, setTimer] = useState(Propsy.start);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + Propsy.zwieksz);
    }, Propsy.coIleSekundWyswietla);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsPaused(false);
  };

  const handleResume = () => {
    setIsPaused(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + Propsy.zwieksz);
    }, Propsy.coIleSekundWyswietla);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setIsActive(false);
    setIsPaused(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  return (
    <div className="app">
      <CointainerLicznik>
        <h3>Stoper</h3>
        <div className="stopwatch-card">
          <Czasomierz>{formatTime()}</Czasomierz>
          <div className="buttons">
            <button onClick={handleStart}>Start</button>
            <button onClick={handlePause}>Pause</button>
            <button onClick={handleResume}>Resume</button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      </CointainerLicznik>
    </div>
  );
};

export default Stoper;
