'use client';
import React, { FC, useState } from 'react';
import { IFAQItemProps } from '../types/FAQSection.types';

const FAQItem: FC<IFAQItemProps> = ({ ind, question, answer }) => {
  const [state, setState] = useState<boolean>(true);

  const handleClick = () => {
    setState((prevSatate) => !prevSatate);
  };

  return (
    <div>
      <div className="flex justify-between mb-8 pb-8 border-b-2">
        <div className="text-primary-foreground text-2xl sm:text-3xl lg:text-5xl font-semibold shadow-sm flex">
          <p className="mr-5 text-blue-500">{`/0${ind + 1}`} </p>
          <div>
            <p>{question}</p>
            <p
              className={`mt-6 text-base sm:text-xl lg:text-2xl transition-all duration-500 ease-in-out overflow-hidden ${
                state ? 'opacity-0 max-h-0' : 'opacity-100 max-h-screen'
              }`}
            >
              {answer}
            </p>
          </div>
        </div>
        <div>
          <button
            onClick={handleClick}
            className={`${state ? '' : 'hidden'} w-8 h-8 md:w-14 md:h-14 rounded-full bg-blue-500 flex justify-center items-center`}
          >
            <span className="inline-block w-8 h-px bg-white-foreground relative">
              <span className="inline-block w-8 h-px bg-white-foreground rotate-90 absolute top-0 left-0"></span>
            </span>
          </button>
          <button
            onClick={handleClick}
            className={`${state ? 'hidden' : ''} w-8 h-8 md:w-14 md:h-14 rounded-full border border-blue-500 flex justify-center items-center`}
          >
            <span className="inline-block w-5 md:w-8 h-px bg-blue-500 rotate-45 relative">
              <span className="inline-block w-5 md:w-8 h-px bg-blue-500 rotate-90 absolute top-0 left-0"></span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
