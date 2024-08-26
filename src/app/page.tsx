import Achive from "@/components/Achive";
import Buttons from "@/components/Buttons";
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
            <Buttons />
          </div>
          <div>

            <SmallInfo />
          </div>
          <div className="skills">
            <Skills />
          </div>
          <div className="mt-[450px] md:mt-24">

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center relative">
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-20 blur-md rounded-lg"></span>
              <span className="relative z-10">
                Github Contributions
              </span>
              <div className="absolute inset-0 border-2 border-green-600 rounded-lg -z-10"></div>
              <div className="absolute inset-0 shadow-lg rounded-lg -z-20"></div>
            </h1>


            <ContributionGraph />
          </div>
          <div className="mt-24 ">

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center relative">
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-20 blur-md rounded-lg"></span>
              <span className="relative z-10">
                Competitive Programming
              </span>
              <div className="absolute inset-0 border-2 border-green-600 rounded-lg -z-10"></div>
              <div className="absolute inset-0 shadow-lg rounded-lg -z-20"></div>
            </h1>
            <Cp />
          </div>
          <div className="mt-96 md:mt-24">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center relative">
              <span className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 opacity-20 blur-md rounded-lg"></span>
              <span className="relative z-10">
                Projects
              </span>
              <div className="absolute inset-0 border-2 border-green-600 rounded-lg -z-10"></div>
              <div className="absolute inset-0 shadow-lg rounded-lg -z-20"></div>
            </h1>
            <Projects />
          </div>
        </div>

      </MaxWidthWrapper>
    </div>
  );
}
