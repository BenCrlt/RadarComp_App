import Chart, { ChartOptions, ScaleChartOptions } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { ChartData, ChartDataset, ChartType } from 'chart.js';
import { Radar } from 'react-chartjs-2'

const backgroundColor : string[] = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(60, 255, 51, 0.2)',
    'rgba(51, 221, 255, 0.2)',
    'rgba(255, 51, 224, 0.2)',
    'rgba(255, 252 , 51, 0.2)'
];
const borderColor : string[] = [
    'rgba(255, 99, 132, 1)',
    'rgba(60, 255, 51, 1)',
    'rgba(51, 221, 255, 1)',
    'rgba(255, 51, 224, 1)',
    'rgba(255, 252 , 51, 1)'
]

type RadarChartProps = {
    listLabels? : string[],
    datasets?: Number[]
}

function RadarChart({listLabels, datasets} : RadarChartProps)  {
    const data = {
        labels: listLabels,
        datasets: [
          {
            label: '1',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
          },
          {
            label: '2',
            data: [6, 6, 6, 6, 6, 6],
            backgroundColor: 'rgba(60, 255, 51, 0.2)',
            borderColor: 'rgba(60, 255, 51, 1)',
          },
          {
            label: '3',
            data: [2, 4, 6, 4, 3, 6],
            backgroundColor: 'rgba(51, 221, 255, 0.2)',
            borderColor: 'rgba(51, 221, 255, 1)',
          },
          {
            label: '4',
            data: [2, 1, 3, 4, 1, 2],
            backgroundColor: 'rgba(255, 51, 224, 0.2)',
            borderColor: 'rgba(255, 51, 224, 1)',
          },
          {
            label: '5',
            data: [2, 1, 7, 4, 7, 7],
            backgroundColor: 'rgba(255, 252 , 51, 0.2)',
            borderColor: 'rgba(255, 252, 51, 1)',
          },
        ],
    };
      
    const options = {
        scale: {
            ticks: { beginAtZero: true },
        }

    };

    //<Radar data={data} options={options} />
    return <div><Radar data={data} options={options}/></div>
}

export default RadarChart;