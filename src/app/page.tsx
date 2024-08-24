import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MiniHeader from "@/components/MiniHeader";
import { Skills } from "@/components/Skills";
import { SmallInfo } from "@/components/SmallInfo";
import { Compare } from "@/components/ui/compare";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";


export default function Home() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-screen  text-white" >
      <MaxWidthWrapper className="md:px-8">

        <div className="p-4  border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800 px-4 mt-12 ">
          <div className="flex justify-center items-center  gap-24">
            <Compare
              firstImage="hero3.png"
              secondImage="dog2.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] flex-1"
              slideMode="hover"
              autoplay={true}
            />
            <div className="flex-1">

              <TextRevealCard
                text="Abhinav N B"
                revealText="Coder|Developer|Editor"
              >
                <TextRevealCardTitle>
                  Portfolio
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  <MiniHeader />
                </TextRevealCardDescription>
              </TextRevealCard>
              <div>
                <p className="">
                  I'm Abhinav, a passionate software developer with a keen eye for detail and a love for problem-solving. My journey in tech is driven by curiosity and a deep-seated belief in the power of code to shape the future. Whether I'm crafting elegant solutions, exploring new technologies, or bringing creative ideas to life, I approach every challenge with enthusiasm and a desire to learn. Beyond coding, I strive to balance the technical with the philosophical, constantly seeking harmony between logic and creativity. Join me as I continue to explore the limitless possibilities of technology and create impactful digital experiences.
                </p>
              </div>

            </div>
          </div>
          <div>

            <SmallInfo />
          </div>
          <div className="skills">
            <Skills />
          </div>
        </div>

      </MaxWidthWrapper>
    </div>
  );
}
