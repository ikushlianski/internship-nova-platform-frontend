import React, { FC } from 'react';
import { IFAQItemProps } from '../types/FAQSection.types';

const FAQItem: FC<IFAQItemProps> = ({ ind, question, answer }) => {
  return (
    <div>
      <div className="flex justify-between mb-8 pb-8 border-b-2">
        <div className="text-primary-foreground text-2xl md:text-5xl font-semibold shadow-sm flex">
          <p className="mr-5 text-blue-500">{`/0${ind + 1}`} </p>
          <p>{question}</p>
        </div>
        <div>
          <button className="w-8 h-8 md:w-14 md:h-14 rounded-full bg-blue-500 flex justify-center items-center">
            <span className="inline-block w-8 h-px bg-white-foreground relative">
              <span className="inline-block w-8 h-px bg-white-foreground rotate-90 absolute top-0 left-0"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="hidden">{answer}</div>
    </div>
  );
};

export default FAQItem;
