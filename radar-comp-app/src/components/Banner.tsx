import '../styles/Banner.css'
import { Link, useHistory } from 'react-router-dom';
import { connect, ConnectedProps } from "react-redux"
import { StateType } from '../types/common/main';
import { disconnectUser } from '../store/common/actions';

type PropsFromRedux = ConnectedProps<typeof connector>;

function Banner({isUserConnected, disconnectUser} : PropsFromRedux) {
    const history = useHistory();

    const disconnect = () => {
        disconnectUser();
        history.push('/');
    }

    return (
        <nav className="navbar navbar-dark bg-dark">
            {isUserConnected && 
                (<ul>
                    <li>
                        <Link to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/eval">
                            Evaluation
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => disconnect()}>Deconnexion</button>
                    </li>
                </ul>)
            }
            
        </nav>
    )
}

const mapStateToProps = (state : StateType) => ({
    isUserConnected: state.common.isUserConnected
})

const mapDispatchToProps = { disconnectUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Banner);