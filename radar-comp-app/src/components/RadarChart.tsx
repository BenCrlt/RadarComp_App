import { Radar } from 'react-chartjs-2'
import { connect, ConnectedProps } from 'react-redux';
import { SkillType, StateType } from '../types/common/main';
import { useEffect } from 'react'
import { fetchListSkills } from '../store/common/actions';

type PropsFromRedux = ConnectedProps<typeof connector>;

function RadarChart({listSkills, fetchListSkills} : PropsFromRedux) {
    useEffect(() => {
        fetchListSkills();
    }, [fetchListSkills])
    const data = {
        labels: listSkills.map((skill : SkillType)=> (skill.skill_title)),
        datasets: [
          {
            label: '# of Votes',
            data: [2, 9, 3, 5],
          },
          {
              label: 'Test',
              data: [8,3,4,4]   
          }
        ],
      };
    const options = {
        scale: {
            ticks: { beginAtZero: true },
        },
    };

    //<Radar data={data} options={options} />
    return <div><Radar data={data} options={options}/></div>
}

const mapStateToProps = (state : StateType) => {
    return {
        listSkills : state.common.listSkills
    }
}

const mapDispatchToProps = { fetchListSkills }

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(RadarChart);