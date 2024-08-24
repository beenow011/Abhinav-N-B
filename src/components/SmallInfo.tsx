"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "./ui/layout-grid";
// import { LayoutGrid } from "../ui/layout-grid";

export function SmallInfo() {
    return (
        <div className="h-screen py-20 w-full">
            <h1 className="text-white font-bold">
                Little about me
            </h1>
            <LayoutGrid cards={cards} />
        </div>
    );
}

const SkeletonOne = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Hailing from Chikkamagaluru
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                Nestled in the lush landscapes of Karnataka, Chikkamagaluru is where I call home. Known for its coffee plantations and scenic beauty, this charming town has shaped my roots and inspired my journey.
            </p>
        </div>
    );
};

const SkeletonTwo = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                A Creative Technologist
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                With a passion for video editing, photography, and web development, I blend creativity with technology. My skills in crafting visually stunning content and building dynamic web solutions reflect my dedication to innovation and artistic expression.
            </p>
        </div>
    );
};
const SkeletonThree = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                I love my Pug, Vinny
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I&apos;m an avid pet lover, and my heart belongs to Vinny, my adorable pug. His playful antics and loyal companionship add joy to my life, making every day brighter with his wagging tail and loving presence.
            </p>
        </div>
    );
};
const SkeletonFour = () => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                Pursuing Excellence at NIE
            </p>
            <p className="font-normal text-base text-white"></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                I’m currently studying at The National Institute of Engineering (NIE) in Mysuru. Renowned for its rigorous academic environment and innovative approach, NIE is where I&apos;m honing my skills and preparing for a future in computer science engineering.
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <SkeletonOne />,
        className: "md:col-span-2",
        thumbnail:
            "ckm.jpg",
    },
    {
        id: 2,
        content: <SkeletonTwo />,
        className: "col-span-1",
        thumbnail:
            'myimg.jpg'
    },
    {
        id: 3,
        content: <SkeletonThree />,
        className: "col-span-1",
        thumbnail:
            "vinny.jpg",
    },
    {
        id: 4,
        content: <SkeletonFour />,
        className: "md:col-span-2",
        thumbnail:
            "nie.jpg",
    },
];
