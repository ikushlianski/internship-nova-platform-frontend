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
          className="bg-transparent border border-[#0092FC] rounded-full h-12 w-12 text-3xl  text-[#0092FC] font-thin "
          onClick={() => setIsActive(!isActive)}
        >
          &#x2715;
        </button>
      ) : (
        <button
          className=" bg-[#0092FC] rounded-full h-12 w-12 text-white text-5xl font-thin"
          onClick={() => setIsActive(!isActive)}
        >
          &#43;
        </button>
      )}
    </section>
  );
}
