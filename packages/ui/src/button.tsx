"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  classNameButton: string;
  classNameImage?: string;
  appName: string;
  imageLink?: string;
  callback: () => void;
}

export const Button = ({
  children,
  classNameButton,
  classNameImage,
  imageLink,
  callback,
}: ButtonProps) => {
  return (
    <button
      className={`${classNameButton} flex justify-center items-center pt-4 pb-4 rounded-3xl font-bold uppercase transition-colors duration-300 ease-in-out hover:bg-hover active:bg-blue-50 active:outline active:outline-secondary-foreground active:outline-2 active:outline-offset-[-2px] disabled:bg-disabled disabled:outline disabled:outline-secondary-foreground disabled:outline-2 disabled:outline-offset-[-2px] cursor-pointer`}
      onClick={callback}
    >
      {children}
      {imageLink && <img src={imageLink} alt="Button Icon" className={`${classNameImage}`} />}
    </button>
  );
};
