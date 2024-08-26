import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface Stat {
    title: string;
    value: number | string;
}

interface DoughnutChartProps {
    stats: Stat[];
    chartTitle: string;
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ stats, chartTitle }) => {
    const labels = stats.map(stat => stat.title);
    const dataValues = stats.map(stat => parseInt(stat.value as string, 10));

    const data = {
        labels,
        datasets: [
            {
                label: chartTitle,
                data: dataValues,
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ]
            }
        ]
    };

    return (
        <div >
            <h2 className='text-blue-400 font-bold mb-2'>{chartTitle}</h2>
            <Doughnut data={data} />
        </div>
    );
};

export default DoughnutChart;
