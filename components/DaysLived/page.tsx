'use client';
import React, { useState, useEffect } from 'react';
import { NumberTicker } from "@/components/magicui/number-ticker";

const DaysLived = () => {
  const [daysLived, setDaysLived] = useState(0);

  useEffect(() => {
        const birthDate = new Date(2012, 5, 27); // Months are 0-based (0 = January, so 5 = June)
        const today = new Date();
        
    const timeDifference = today.getTime() - birthDate.getTime(); // In milliseconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days

    setDaysLived(days);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <NumberTicker
      value={daysLived}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
    </div>
  );
};

export default DaysLived;