import '../../styles/Login/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { connectUser } from '../../store/common/actions'
import { StateType } from '../../types/common/main'

type PropsFromRedux = ConnectedProps<typeof connector>;

function Login({isUserConnected, connectUser} : PropsFromRedux) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    useEffect(() => {
        isUserConnected && history.push("/home");
    }, [isUserConnected, history])
    return (
        <div className="login">
            <h1>CONNEXION</h1>
            <div className="login-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Entrer votre email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="login-input">
                <label htmlFor="mdp">Mot de passe</label>
                <input type="password" id="mdp" placeholder="Entrer votre mot de passe" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <button className="login-btn-connexion" onClick={() => connectUser(email, password)}>SE CONNECTER</button>
            <p>
                Pas encore inscrit ? &nbsp;
                <Link to="/sign">
                    Créer un compte
                </Link>
            </p>
        </div>
    )
}

const mapStateToProps = (state : StateType) => ({
    isUserConnected : state.common.isUserConnected
});

const mapDispatchToProps = { connectUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);