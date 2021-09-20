import '../../styles/Login/Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ConnectedProps, connect } from 'react-redux'
import { connectUser } from '../../store/common/actions'
import { StateType, UserType } from '../../types/common/main'
import {gql, useMutation} from '@apollo/client'
type PropsFromRedux = ConnectedProps<typeof connector>;

const LoginMutation = gql `
    mutation Mutation($loginEmail: String!, $loginPassword: String!) {
        login(email: $loginEmail, password: $loginPassword) {
            user_id
            user_email
            user_first_name
            user_last_name
        }
    }
`

function Login({connectUser} : PropsFromRedux) {
    //Hooks
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const [login, {data, loading, error}] = useMutation<{ login: UserType}, {loginEmail: string, loginPassword: string}>(LoginMutation, {
        variables: {loginEmail: email, loginPassword: password}
    })

    const checkLogin = async () => {
        if (email && password) {
            try {
                await login();
            } catch(e) {
                alert(e);
            }
        }
    }
    useEffect(() => {
        if (data?.login) {
            connectUser(data.login);
            history.push("/home");
        }
    }, [data, connectUser, history]);  

    return (
        <div className="login">
            <h1>CONNEXION</h1>
            <div className="login-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder={"Entrer votre email"} onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="login-input">
                <label htmlFor="mdp">Mot de passe</label>
                <input type="password" id="mdp" placeholder="Entrer votre mot de passe" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <button className="login-btn-connexion" onClick={checkLogin}>SE CONNECTER</button>
            <p>
                Pas encore inscrit ? &nbsp;
                <Link to="/sign">
                    Créer un compte
                </Link>
            </p>
            {loading && <div>Connexion</div>}
        </div>
    )
}

const mapStateToProps = (state : StateType) => ({
});

const mapDispatchToProps = { connectUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Login);