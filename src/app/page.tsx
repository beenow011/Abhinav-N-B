import Achive from "@/components/Achive";
import Cp from "@/components/Cp";
import ContributionGraph from "@/components/Github";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import MiniHeader from "@/components/MiniHeader";
import Projects from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { SmallInfo } from "@/components/SmallInfo";
import { Compare } from "@/components/ui/compare";
import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle } from "@/components/ui/text-reveal-card";
import { Vortex } from "@/components/ui/vortex";
import Image from "next/image";


export default function Home() {

  return (
    <div className="w-[calc(100%-4rem)]  rounded-md h-screen  text-white" >
      <MaxWidthWrapper className="md:px-8">

        <div className="p-2  border rounded-3xl dark:bg-neutral-900 bg-neutral-100  border-neutral-200 dark:border-neutral-800  mt-12 ">
          <div className="flex justify-center items-center flex-col-reverse xl:flex-row gap-24">
            <Compare
              firstImage="hero3.png"
              secondImage="dog2.png"
              firstImageClassName="object-cover object-left-top"
              secondImageClassname="object-cover object-left-top"
              className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] xl:flex-1"
              slideMode="hover"
              autoplay={true}
            />
            <div className="xl:flex-1">

              <TextRevealCard
                text="Abhinav N B"
                revealText="Coder|Developer|Editor"
              >
                <TextRevealCardTitle>
                  <span className="text-orange-500">Bytes </span> &amp; <span className="text-blue-500">Ideas</span>: The Work of Abhinav
                </TextRevealCardTitle>
                <TextRevealCardDescription>
                  <MiniHeader />
                </TextRevealCardDescription>
              </TextRevealCard>
              <div className="flex justify-center  items-center">
                <p className="text-sm md:text-base font-thin md:font-normal w-1/2 md:w-3/4 xl:w-full text-center text-wrap">
                  I&apos;m Abhinav, a passionate software developer with a keen eye for detail and a love for problem-solving. My journey in tech is driven by curiosity and a deep-seated belief in the power of code to shape the future. Whether I&apos;m crafting elegant solutions, exploring new technologies, or bringing creative ideas to life, I approach every challenge with enthusiasm and a desire to learn. Beyond coding, I strive to balance the technical with the philosophical, constantly seeking harmony between logic and creativity. Join me as I continue to explore the limitless possibilities of technology and create impactful digital experiences.
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
          <div className="mt-96 md:mt-12">

            <h1 className="font-bold text-xl md:text-2xl text-green-500 mb-3">
              Github Contributions
            </h1>
            <ContributionGraph />
          </div>
          <div className="mt-12 ">
            <h1 className="font-bold text-xl md:text-2xl text-green-500 mb-3">
              Competitive Programming
            </h1>
            <Cp />
          </div>
          <div className="mt-96 md:mt-12">
            <h1 className="font-bold text-xl md:text-2xl text-green-500 mb-3">
              Projects
            </h1>
            <Projects />
          </div>
        </div>

      </MaxWidthWrapper>
    </div>
  );
}
