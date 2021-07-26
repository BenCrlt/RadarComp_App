import '../styles/Home.css'
import { connect, ConnectedProps } from 'react-redux'
import { StateType } from '../types/common/main';
import { setUser } from '../store/common/actions'

type PropsFromRedux = ConnectedProps<typeof connector>;

function Home({user, setUser} : PropsFromRedux) {
    return <h1>Hello {user.user_last_name + " " + user.user_first_name + " !"}</h1>
}

const mapStateToProps = (state : StateType) => ({
    user : state.common.user
})

const mapDispatchToProps = { setUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Home);