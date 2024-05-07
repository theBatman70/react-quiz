import React, { useEffect } from "react";
import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  const { secondsRemaining, dispatch } = useQuiz();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins} : {seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
