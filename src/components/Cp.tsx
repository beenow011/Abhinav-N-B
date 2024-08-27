'use client';
import DoughnutChart from './Chart';

function Cp() {

    const leetcodeStats = [
        {
            title: "Problems Solved",
            value: "142",
        },
        {
            title: "Easy",
            value: "82",
        },
        {
            title: "Medium",
            value: "55",
        },
        {
            title: "Hard",
            value: "5",
        },
    ];
    const gfgStats = [
        {
            title: "Coding Score",
            value: '613'
        },
        {
            title: "Problems Solved",
            value: "208",
        },
        {
            title: "Easy",
            value: "82",
        },
        {
            title: "Medium",
            value: "91",
        },
        {
            title: "Hard",
            value: "13",
        },
    ];

    return (
        <div className='flex flex-col md:flex-row justify-evenly mt-80 md:mt-10 h-96'>
            <DoughnutChart stats={leetcodeStats} chartTitle="LeetCode Stats" />
            <DoughnutChart stats={gfgStats} chartTitle="GeeksforGeeks Stats" />
        </div>
    )
}

export default Cp