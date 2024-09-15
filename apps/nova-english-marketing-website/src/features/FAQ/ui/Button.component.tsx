"use client";

import { Dispatch, SetStateAction } from "react";

export default function ButtonComponent({
  isActive,
  setIsActive,
}: {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <section>
      {isActive ? (
        <button
          className="bg-transparent border border-blue-500 rounded-full h-12 w-12 text-3xl  text-blue-500 font-thin "
          onClick={() => setIsActive(!isActive)}
        >
          &#x2715;
        </button>
      ) : (
        <button
          className=" bg-blue-500 rounded-full h-12 w-12 text-white-foreground text-5xl font-thin"
          onClick={() => setIsActive(!isActive)}
        >
          &#43;
        </button>
      )}
    </section>
  );
}
