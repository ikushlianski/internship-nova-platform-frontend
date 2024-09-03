import { questions } from "../api/questions";
import QuestionComponent from "./Question.component";

export default function Main() {
  return (
    <section>
      <h1 className="text-4xl font-bold text-center mb-5 relative">
        FAQ
        <span className="-z-20 absolute left-1/2 transform -translate-x-1/2 -bottom-1 h-5 w-24 rounded-full bg-cover bg-no-repeat bg-center bg-[url('https://i.yapx.cc/X6TAI.png')]"></span>
      </h1>
      {questions.map((question, index) => {
        return (
          <QuestionComponent
            key={index}
            question={question}
            order={index + 1}
          />
        );
      })}
    </section>
  );
}
