import React, { useState } from "react";
import Question from "./Question";
import data from "../data.json";

const QandA: React.FC = () => {
  const [isAllOpen, setIsAllOpen] = useState(false);
  const [openQuestions, setOpenQuestions] = useState<boolean[]>(
    data.map(() => false)
  );
  const toggleAll = () => {
    const newIsAllOpen = !isAllOpen;
    setIsAllOpen(newIsAllOpen);
    setOpenQuestions(data.map(() => newIsAllOpen));
  };
  const toggleQuestion = (index: number) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
    if (updatedOpenQuestions.every((isOpen) => isOpen)) {
      setIsAllOpen(true);
    } else if (updatedOpenQuestions.every((isOpen) => !isOpen)) {
      setIsAllOpen(false);
    }
  };
  return (
    <div className="max-w-6xl mx-auto p-2 pb-64 ">
      <button
        onClick={toggleAll}
        className="mb-4 mt-4 px-6 ml-6 py-2 bg-gray-500 text-white rounded"
      >
        {isAllOpen ? "بستن همه" : "بازکردن همه"}
      </button>
      {/* <div className="grid grid-cols-1 gap-4  lg:grid-cols-2"> */}
      <div className="flex flex-wrap justify-center  ">
        {data.map((item, index) => (
          <div key={index} className="w-full lg:w-1/2 ">
            <Question
              question={item.title}
              answer={item.text}
              isOpen={openQuestions[index]}
              toggle={() => toggleQuestion(index)}
              
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default QandA;
