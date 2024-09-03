"use client";
import { Dispatch, SetStateAction, useState } from "react";
import ButtonComponent from "./Button.component";
import QuestionOrderComponent from "./QuestionOrder.component";
import { Question } from "../types/question.type";

export default function QuestionComponent({
  question,
  order,
}: {
  question: Question;
  order: number;
}) {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <section className="flex justify-between w-3/5 mx-auto  font-semibold border-b-2 border-gray-100 py-5">
      <QuestionOrderComponent order={order} />
      <div className="text-left ml-5 w-full text-foreground mr-10">
        <h3 className="text-2xl">{question.question}</h3>
        {isActive && (
          <div className="mt-2 text-sm">
            {question.answers.map((answer, index) => {
              return <p key={index}>{answer}</p>;
            })}
          </div>
        )}
      </div>
      <ButtonComponent isActive={isActive} setIsActive={setIsActive} />
    </section>
  );
}
