'use client';

import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";


const page = () => {
  return (
    <div>
            <ScratchToReveal
      width={250}
      height={250}
      minScratchPercentage={30}
      className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
      gradientColors={["#DBDBDB"]}
    >
        <p className="text-9xl">😎</p>
        </ScratchToReveal>
    </div>
  )
}
export default page