'use client';

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Particles } from "../magicui/particles";
import Image from 'next/image';
import { SparklesText } from "../magicui/sparkles-text";
import { ScrollFade, ScrollFadeItem } from "../magicui/scroll-fade";
import ScratchToReviewPicture from "../ScratchToReviewPicture/ScratchToReviewPicture";
import { section } from "motion/react-client";

const AboutMe = () => {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <section id="AboutMe" className="py-16">
        <div className="container mx-auto px-4">
          <ScrollFade>
            <div className="flex flex-col items-center mb-12">
              <SparklesText sparklesCount={3}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
              </SparklesText>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 rounded-full"></div>
            </div>
          </ScrollFade>
            
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            <ScrollFade direction="left" delay={0.2}>
              <div className="md:w-1/3 flex justify-center">
                <ScratchToReviewPicture />
                
              </div>
            </ScrollFade>
              
            <ScrollFade direction="right" delay={0.3} staggerChildren={0.1}>
              <div className="md:w-2/3">
                <div className="bg-background/50 backdrop-blur-sm border border-border rounded-xl p-6 shadow-lg">
                  <ScrollFadeItem>
                    <h3 className="text-xl font-semibold mb-4">Bannawat</h3>
                  </ScrollFadeItem>
                  
                  <ScrollFadeItem delay={0.1}>
                    <p className="mb-4">
                      I am a passionate Full Stack Developer with expertise in modern web technologies.
                      My journey in software development started when I was young, and I've been building
                      digital experiences ever since.
                    </p>
                  </ScrollFadeItem>
                  
                  <ScrollFadeItem delay={0.2}>
                    <p className="mb-4">
                      When I'm not coding, you can find me exploring new technologies, contributing to
                      open-source projects, or sharing my knowledge with the community.
                    </p>
                  </ScrollFadeItem>
                  
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <ScrollFadeItem delay={0.3}>
                      <div>
                        <h4 className="font-medium mb-2">Skills</h4>
                        <ul className="space-y-1">
                          <li>• React & Next.js</li>
                          <li>• TypeScript</li>
                          <li>• Tailwind CSS</li>
                          <li>• Node.js</li>
                        </ul>
                      </div>
                    </ScrollFadeItem>
                    
                    <ScrollFadeItem delay={0.4}>
                      <div>
                        <h4 className="font-medium mb-2">Interests</h4>
                        <ul className="space-y-1">
                          <li>• Web Development</li>
                          <li>• UI/UX Design</li>
                          <li>• Open Source</li>
                          <li>• Live Streaming</li>
                        </ul>
                      </div>
                    </ScrollFadeItem>
                  </div>
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
