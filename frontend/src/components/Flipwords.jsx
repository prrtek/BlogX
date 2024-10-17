import React from "react";
import { FlipWords } from "./ui/Flip";

export function FlipWordsDemo() {
  const words = ["Informed", "Inspired", "Creative", "Curious", "Connected"];

  return (
    <div className=' mt-5 flex justify-center items-center px-4'>
      <div className='text-7xl mx-auto font-normal text-neutral-600 dark:text-neutral-400'>
        Stay
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
