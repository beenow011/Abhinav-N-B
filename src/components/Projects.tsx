import Image from 'next/image'
import React from 'react'
import { WobbleCard } from './ui/wobble-card'
import { link } from 'fs'

function Projects() {
    const projects = [
        {
            title: 'Quill - PDF Questioning Platform',
            description: 'Developed a Next.js (TS) project for uploading PDFs and chatting with them using OpenAI. Integrated authentication via Kinde and utilized modern data fetching with tRPC & Zod. Created a clean, modern UI using shadcn-ui and used LangChain for AI memory and Pinecone for vector storage.',
            image: '/projects/quill.jpg',
            link: 'https://quill-azure.vercel.app/',
            bg: 'bg-indigo-800'
        },
        {
            title: 'CineVerse - Personalized Cine Expedition',
            description: 'A platform for movie enthusiasts to discuss and explore movies using advanced AI technology. Key features include an AI chatbot, discussion rooms, movie recommendations, and plot-based movie suggestions.',
            image: '/projects/cineverse.png',
            link: 'https://cine-x.vercel.app/',
            bg: 'bg-red-800'
        },
        {
            title: 'PlayNow - Video Sharing Website',
            description: 'Developed a full-stack video-sharing website using the MERN stack. Implemented features such as user authentication, cloud storage integration, and responsive design, deployed the backend on Azure.',
            image: '/projects/playitnow.png',
            link: 'https://www.playitnow.co',
            bg: 'bg-purple-800'
        },
        {
            title: 'DocNow - Real-time Collaborative Text Editor',
            description: 'A powerful, real-time collaborative text editor inspired by Google Docs. Built with Next.js, integrated with Liveblocks for real-time collaboration, and styled using Tailwind CSS. Features secure user authentication, document management, comments, and more.',
            image: '/projects/docnow.png',
            link: 'https://docnow-omega.vercel.app/',
            bg: 'bg-teal-800'
        },
        {
            title: 'SolveSphere AI',
            description: 'A web app providing solutions for multiple-choice questions (MCQs) and coding challenges using AI. Developed a responsive UI with a clean and modern design.',
            image: '/projects/copycode.png',
            link: 'https://copycode-delta.vercel.app/',
            bg: 'bg-purple-600'
        }
    ];

    return (
        <div className="flex flex-col gap-4 max-w-7xl mx-auto w-full">
            {
                projects.map((project, index) => {
                    return (
                        <WobbleCard
                            key={index}
                            containerClassName={`h-full ${project.bg} min-h-[500px] lg:min-h-[300px] `}
                            className=""
                            link={project.link}
                        >
                            <div className='relative '>
                                <div className="max-w-xl xl:max-w-md">
                                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                                        {project.title}
                                    </h2>
                                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                                        {project.description}
                                    </p>
                                </div>
                                <Image
                                    src={project.image}
                                    width={500}
                                    height={500}
                                    alt="linear demo image"
                                    className="absolute hidden xl:block -right-4 lg:-right-[5%] z-[100] filter top-20 object-contain rounded-2xl"
                                />
                            </div>
                        </WobbleCard>
                    )
                })
            }
            {/* <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
                className=""
            >
                <div className="max-w-xs">
                    <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Gippity AI powers the entire universe
                    </h2>
                    <p className="mt-4 text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                <Image
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 min-h-[300px]">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    No shirt, no shoes, no weapons.
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    If someone yells “stop!”, goes limp, or taps out, the fight is over.
                </p>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Signup for blazing-fast cutting-edge state of the art Gippity AI
                        wrapper today!
                    </h2>
                    <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        With over 100,000 mothly active bot users, Gippity AI is the most
                        popular AI platform for developers.
                    </p>
                </div>
                <Image
                    src="/linear.webp"
                    width={500}
                    height={500}
                    alt="linear demo image"
                    className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
            </WobbleCard> */}
        </div>
    )
}

export default Projects