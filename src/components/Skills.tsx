"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "./hooks/use-outside-click";
import { Tabs } from "./ui/tabs";
import SkillPage from "./SkillPage";
import { langCard } from "@/cards/languages.card";
import { frameworkCards } from "@/cards/frameworks.card";
import { dbCard } from "@/cards/database.card";
import { cloudServicesCard } from "@/cards/webservices.card";
// import { useOutsideClick } from "@/hooks/use-outside-click";

export function Skills() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/beenow011/events")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setData(data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
    const tabs = [
        {
            title: "Languages",
            value: "languages",
            content: (
                <SkillPage heading='Languages' cards={langCard} />
            ),
        },
        {
            title: "Framework",
            value: "framework",
            content: (
                <SkillPage heading='Framework' cards={frameworkCards} />
            ),
        },
        {
            title: "Databases",
            value: "databases",
            content: (
                <SkillPage heading='Databases' cards={dbCard} />
            ),
        },
        {
            title: "Webservices",
            value: "webservices",
            content: (
                <SkillPage heading='Webservices' cards={cloudServicesCard} />
            ),
        }
    ];


    return (
        <>
            <h1 className="font-bold">Skills</h1>
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-2">
                <Tabs tabs={tabs} />
            </div>

        </>
    );
}


const cards = [
    {
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: "/vinny.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br /> Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                </p>
            );
        },
    },
    {
        description: "Babbu Maan",
        title: "Mitran Di Chhatri",
        src: "/vinny.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br /> His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                </p>
            );
        },
    },

    {
        description: "Metallica",
        title: "For Whom The Bell Tolls",
        src: "/vinny.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that resonate deeply with
                    their audience. Formed in Los Angeles, California, they have become a
                    cultural icon in the heavy metal music industry. <br /> <br /> Their
                    songs often reflect themes of aggression, social issues, and personal
                    struggles, capturing the essence of the heavy metal genre. With a
                    career spanning over four decades, Metallica has released numerous hit
                    albums and singles that have garnered them a massive fan following
                    both in the United States and abroad.
                </p>
            );
        },
    },
    {
        description: "Led Zeppelin",
        title: "Stairway To Heaven",
        src: "/vinny.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Led Zeppelin, a legendary British rock band, is renowned for their
                    innovative sound and profound impact on the music industry. Formed in
                    London in 1968, they have become a cultural icon in the rock music
                    world. <br /> <br /> Their songs often reflect a blend of blues, hard
                    rock, and folk music, capturing the essence of the 1970s rock era.
                    With a career spanning over a decade, Led Zeppelin has released
                    numerous hit albums and singles that have garnered them a massive fan
                    following both in the United Kingdom and abroad.
                </p>
            );
        },
    },
    {
        description: "Mustafa Zahid",
        title: "Toh Phir Aao",
        src: "/vinny.jpg",
        ctaText: "Play",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
                    renowned for its intense storyline and powerful performances. Directed
                    by Mohit Suri, the film has become a significant work in the Indian
                    film industry. <br /> <br /> The movie explores themes of love,
                    redemption, and sacrifice, capturing the essence of human emotions and
                    relationships. With a gripping narrative and memorable music,
                    &quot;Aawarapan&quot; has garnered a massive fan following both in
                    India and abroad, solidifying Emraan Hashmi&apos;s status as a
                    versatile actor.
                </p>
            );
        },
    },
];
