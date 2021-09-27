import Chart, { ChartOptions, ScaleChartOptions } from 'chart.js';
import { ChartConfiguration } from 'chart.js';
import { ChartData, ChartDataset, ChartType } from 'chart.js';
import { Radar } from 'react-chartjs-2'
import { EvalType, ItemType, NoterType, SkillType } from '../types/common/main';

interface DatasetType {
  label: string,
  data: number[],
  backgroundColor: string,
  borderColor: string,
}

const MAX_EVALS_TO_SHOW = 5;

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
    listSkills : SkillType[],
    listEvals : EvalType[],
    datasets?: number[]
}

function RadarChart({listSkills, listEvals} : RadarChartProps)  {
    const indexEval = listEvals.length <= MAX_EVALS_TO_SHOW ? listEvals.length : MAX_EVALS_TO_SHOW;

    let datasets : DatasetType[] = [];
    for(let i : number = 0; i < indexEval; i++) {
        let items : NoterType[];
        let data_radar : number[];

        //Get the average of the skills
        /*listSkills.forEach(skill => {
          items = listEvals[indexEval].eval_list_notes.filter(note => note.noter_item.item_skill.skill_id === skill.skill_id);
          //data_radar.push(items.reduce((previousValue, currentValue) => previousValue + currentValue))
          items.forEach(item => { 
            let total : number = item.noter_value;
            data_radar.push(Math.round(total/items.length));
          })
        });*/
        datasets.push({
          label: "Evaluation du " + listEvals[i].eval_date,
          data: [],
          backgroundColor: backgroundColor[i],
          borderColor: borderColor[i]
        })
    }

    const data = {
        labels: listSkills.map(skill => skill.skill_title),
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