import React, { useEffect } from "react";

export default function Timer({ secondsRemaing, dispatch }) {
  const mins = Math.floor(secondsRemaing / 60);
  const seconds = secondsRemaing % 60;

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
