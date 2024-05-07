import React from "react";
import Options from "./Options";
import { useQuiz } from "../context/QuizContext";

export default function Question() {
  const {currentQuestion: question} = useQuiz()
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} />
    </div>
  );
}
