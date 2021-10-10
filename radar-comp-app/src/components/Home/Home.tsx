import '../../styles/Home.css'
import { connect, ConnectedProps } from 'react-redux'
import { StateType, UserType, SkillType, EvalType} from '../../types/common/main';
import { setUser } from '../../store/common/actions'
import RadarChart from './RadarChart'
import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'
import {gql, useQuery } from '@apollo/client'

type PropsFromRedux = ConnectedProps<typeof connector>;

const GET_USER_INFO = gql`
    query Query($userId: ID!) {
        user(id: $userId) {
            user_list_evals {
                eval_id
                eval_date
                eval_list_notes {
                    noter_item {
                        item_id,
                        item_skill {
                            skill_id
                        }
                    }
                    noter_value
                }
            }
        }
    }
`

const GET_SKILLS = gql`
    query Query {
        listSkills {
            skill_id
            skill_title
            skill_items {
                item_id
                item_title
            }
        }
    } 
`

function Home({user, setUser, isUserConnected} : PropsFromRedux) {
    const history = useHistory();
    const {data: user_data, loading, refetch} = useQuery<{user: UserType}, {userId: string}>(GET_USER_INFO, {
        variables: {userId: user.user_id}
    });

    const {data: skills_data} = useQuery<{listSkills : SkillType[]}>(GET_SKILLS);

    useEffect(() => {
        if (!isUserConnected) {
            history.push('/login')
        } else {
            refetch();
        }
    }, [isUserConnected, history, refetch])

    const listEvals : EvalType[] = user_data ? user_data.user.user_list_evals : [];
    
    const listSkills : SkillType[] = skills_data ? skills_data.listSkills : [];
    return (
        <div className="home-container">
            {loading ? <h1>CHARGEMENT ...</h1> : <RadarChart listSkills ={listSkills} listEvals={listEvals}/>}
        </div>
        
    )
}

const mapStateToProps = (state : StateType) => ({
    user : state.common.user,
    isUserConnected: state.common.isUserConnected
})

const mapDispatchToProps = { setUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);