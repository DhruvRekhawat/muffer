import React from "react";
import { Compare } from "@/components/ui/compare";

export default function Comparison() {
  return (
    <>
    <h2>Experience the <span>muffer</span> Advantage</h2>
    <div className="flex h-128 max-w-4xl items-center justify-center px-1 [perspective:800px] [transform-style:preserve-3d] md:px-8 mx-auto">
        
      
      <div
        className="mx-auto h-full w-full rounded-3xl border border-neutral-200 bg-neutral-100 p-1 md:h-3/4 md:p-4 dark:border-neutral-800 dark:bg-neutral-900"
      >
        <Compare
          firstImage="https://assets.aceternity.com/notes-dark.png"
          secondImage="https://assets.aceternity.com/linear-dark.png"
          firstImageClassName="object-cover object-left-top w-full"
          secondImageClassname="object-cover object-left-top w-full"
          className="h-full w-full rounded-[22px] md:rounded-lg"
          slideMode="drag"
          autoplay={false}
        />
      </div>
    </div>
    </>
  );
}
