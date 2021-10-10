import {Navbar, Container, Nav} from 'react-bootstrap'
import RadarIcon from '../../assets/radar-icon.png'
import CustomDropdown from './CustomDropdown';
import {connect, ConnectedProps} from 'react-redux'
import '../../styles/Menu/ToolBar.css'
import { StateType} from '../../types/common/main';
import { disconnectUser } from '../../store/common/actions'
import { useHistory } from 'react-router-dom'

type PropsFromRedux = ConnectedProps<typeof connector>;
 
function ToolBar({user, isUserConnected, disconnectUser} : PropsFromRedux) {
    const history = useHistory();
    function disconnect() {
        disconnectUser();
        history.push('/');
    }
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark">
            <Container fluid>
            <Navbar.Brand href="/home"><img src={RadarIcon} width="50px" alt="radar-icon" />&nbsp; Radar App</Navbar.Brand> 
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
                {isUserConnected && <CustomDropdown nameUser={user.user_first_name + " " + user.user_last_name} onSignOut={disconnect}/>}
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

const mapStateToProps = (state : StateType) => ({
    user : state.common.user,
    isUserConnected: state.common.isUserConnected
})

const mapDispatchToProps = { 
    disconnectUser
};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ToolBar);