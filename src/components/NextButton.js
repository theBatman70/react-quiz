import React from "react";
import { useQuiz } from "../context/QuizContext";

export default function NextButton() {
  const { index, answer, dispatch, numQuestions } = useQuiz();

  if (answer === null) return null;
  if (index + 1 < numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );

  if (index + 1 === numQuestions)
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}
