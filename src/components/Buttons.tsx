'use client'
import React from 'react'
import { BackgroundGradient } from './ui/background-gradient'
import { File, Github, Instagram, Linkedin, Mail, PhoneCall } from 'lucide-react';

function Buttons() {
    const connections = [
        {
            title: 'LinkedIn',
            url: 'https://www.linkedin.com/in/abhinavnb01107/',
            icon: <Linkedin className='h-5 w-5' /> // Update with the actual path to your LinkedIn icon
        },
        {
            title: 'Instagram',
            url: 'https://www.instagram.com/abhinav_nb/',
            icon: <Instagram className='h-5 w-5' /> // Update with the actual path to your Instagram icon
        },
        {
            title: 'GitHub',
            url: 'https://github.com/beenow011',
            icon: <Github className='h-5 w-5' />// Update with the actual path to your GitHub icon
        },
        {
            title: 'Email',
            url: 'mailto:abhinavnb11@gmail.com',
            icon: <Mail className='h-5 w-5' />// Update with the actual path to your email icon
        },

        {
            title: 'Phone',
            url: 'tel:+91-8277123450',
            icon: <PhoneCall className='h-5 w-5' /> // Update with the actual path to your phone icon
        }
        ,
        {
            title: 'Resume',
            url: 'https://drive.google.com/file/d/1O8bnULoetGGtj8er01orq_2s2l_TFA8N/view?usp=sharing', // Update with the actual path to your resume PDF
            icon: <File className='h-5 w-5' /> // Update with the actual path to your resume icon
        }
    ];

    return (
        <div className='mt-12 flex flex-wrap gap-2 justify-evenly'>
            {
                connections.map((connection, index) => {
                    return (
                        <BackgroundGradient key={index} className="rounded-[22px] md:m-1 w-36 max-w-sm p-2 sm:p-5 bg-white dark:bg-zinc-900">
                            <a href={connection.url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4">
                                {connection.icon}
                                <span className="text-lg font-semibold dark:text-white">{connection.title}</span>
                            </a>
                        </BackgroundGradient>
                    )
                })
            }
            {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">

                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Buy now </span>
                    <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                        $100
                    </span>
                </button>
            </BackgroundGradient> */}
        </div>
    )
}

export default Buttons