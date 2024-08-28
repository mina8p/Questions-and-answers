import React, { useRef, useState, useEffect } from "react";
type QuestionProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
  
};
const Question: React.FC<QuestionProps> = ({
  question,
  answer,
  isOpen,
  toggle,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  
  const [height, setHeight] = useState<string>("0px");
  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);
  return (
    <div className={` border mx-2 my-2 border-gray-200  bg-white rounded-2xl `}>
      
      <div
        className="border-b rounded-2xl py-5 px-5  flex justify-between items-center cursor-pointer "
        onClick={toggle}
      >
        
        
        <div className="bg-gray-200 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`w-4 h-4 transition-transform text-gray-400 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>

        <h2 className=" text-lg font-medium rtl text-right ">{question}</h2>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: height }}
        className={`overflow-hidden transition-max-height duration-500 ease-in-out text-right`}
      >
        
        <p className="mt-2 px-5 py-4 text-gray-700 " dangerouslySetInnerHTML={{__html: answer}} ></p>
      </div>
    </div>
  );
};
export default Question;
