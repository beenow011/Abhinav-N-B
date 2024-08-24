import React from 'react'

const MiniHeader = () => {
    return (
        <ul className="flex gap-0.5 md:gap-2 justify-center items-center text-blue-400">

            <li className="mx-2 md:mx-4 hover:text-slate-700 hover:bg-blue-400 transition p-2 rounded-md cursor-pointer">Home</li>
            <li className="mx-2 md:mx-4 hover:text-slate-700 hover:bg-blue-400 transition p-2 rounded-md cursor-pointer">Projects</li>
            <li className="mx-2 md:mx-4 hover:text-slate-700 hover:bg-blue-400 transition p-2 rounded-md cursor-pointer">About</li>
            <li className="mx-2 md:mx-4 hover:text-slate-700 hover:bg-blue-400 transition p-2 rounded-md cursor-pointer">Contact</li>
        </ul>
    )
}

export default MiniHeader