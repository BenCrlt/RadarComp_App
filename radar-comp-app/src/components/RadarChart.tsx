import '../styles/RadarChart.css'
import Chart from 'react-apexcharts'
import { EvalType, NoterType, SkillType } from '../types/common/main';

interface DatasetType {
  name: string,
  data: number[],
}

const MAX_EVALS_TO_SHOW = 5;

type RadarChartProps = {
    listSkills : SkillType[],
    listEvals : EvalType[],
    datasets?: number[]
}

function RadarChart({listSkills, listEvals} : RadarChartProps)  {
    const indexEval = listEvals.length <= MAX_EVALS_TO_SHOW ? listEvals.length : MAX_EVALS_TO_SHOW;
    let datasets : DatasetType[] = [];

    for(let i : number = 0; i < indexEval; i++) {
        let items : NoterType[] = [];
        let data_radar : number[] = [];
        listSkills.forEach(skill => {
          items = listEvals[i].eval_list_notes.filter(note => note.noter_item.item_skill.skill_id === skill.skill_id);
          let total : number = 0;
          items.forEach(item => { 
            total += item.noter_value;
          })
          data_radar.push(Math.round(total/items.length));
        });
        datasets.push({
          name: "Evaluation du " + GetDate(listEvals[i].eval_date),
          data: data_radar,
        });
    }
    
    const options = {
      xaxis: {
        categories: listSkills.map(skill => skill.skill_title)
      },
      
    }

    return (<div className="radar-chart-container"> 
              <Chart
              options={options}
              series={datasets}
              type="radar"
            />
        </div>)
}

function GetDate(date : Date) {
  let dateConverted : Date = new Date(date);
  return dateConverted.toLocaleDateString();
}

export default RadarChart;