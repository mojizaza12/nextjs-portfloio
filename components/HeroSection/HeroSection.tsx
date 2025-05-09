"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "@/components/magicui/particles";
import Image from 'next/image';
import waveEmoji from '@/public/emoji/wave.png';
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ArrowUpRight } from "lucide-react";
import Link from 'next/link'
import { TypeAnimation } from "react-type-animation";
import { SparklesText } from "../magicui/sparkles-text";

export function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);
 
  return (
    <>
      <BlurFade delay={0.15} inView>
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background/50">
          <Particles
            className="absolute inset-0 -z-10"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />
          <div className="text-center px-4">
            <h1 className="flex items-center justify-center gap-2 text-4xl sm:text-6xl md:text-8xl font-semibold leading-none">
            <SparklesText sparklesCount={5}>
              Bannawat&apos;s About Me
              </SparklesText>
              <Image 
                src={waveEmoji}
                alt="Wave emoji"
                width={64}
                height={64}
                className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 inline-block"
              />
            </h1>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Full Stack Developer',
                1000,
                'Live Stream Operator',
                1000,
              ]}
              wrapper="div"
              speed={50}
              className="text-xl sm:text-2xl md:text-3xl mt-4"
              repeat={Infinity}
            />
          </div>

          <div className="absolute bottom-20 sm:bottom-32 w-full flex justify-center">
            <Link href="#Portfolio">
              <ShimmerButton className="mt-4 gap-2 text-base sm:text-lg text-white dark:text-white lg:text-lg bg-black/80 dark:bg-white/10">
                <span>View About Me</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </BlurFade>
    </>
  );
}

export default HeroSection;
