'use client';

import { ScratchToReveal } from "../magicui/scratch-to-reveal";
import profile from '@/public/profile.png';
import Image from 'next/image';

const ScratchToReviewPicture = () => {
  return (
    <div>
<ScratchToReveal
  width={250}
  height={250}
  minScratchPercentage={30}
  className="overflow-hidden rounded-2xl border-2 bg-gray-100"
  gradientColors={["#DBDBDB"]}
>
  <Image
    src={profile}
    alt="Profile"
    width={250}
    height={250}
    className="object-cover"
  />
</ScratchToReveal>
      <p className="text-base md:text-lg mb-4">ขูดเพื่อดูภาพ</p>
    </div>
  )
}
export default ScratchToReviewPicture