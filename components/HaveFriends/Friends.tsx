'use client';
import React from 'react';
import { NumberTicker } from "@/components/magicui/number-ticker";

const HaveFriends = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <NumberTicker
        value={455}
        className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
      />
    </div>
  );
};

export default HaveFriends;
