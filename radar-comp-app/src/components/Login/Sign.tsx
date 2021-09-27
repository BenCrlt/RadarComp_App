import '../../styles/Login/Sign.css'
import {Link, useHistory} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { UserType, StateType } from '../../types/common/main'
import {gql, useMutation} from '@apollo/client'
import { connectUser } from '../../store/common/actions'
import { ConnectedProps, connect } from 'react-redux'

type PropsFromRedux = ConnectedProps<typeof connector>;

const SignupMutation = gql `
    mutation Mutation($signupEmail: String!, $signupPassword: String!, $signupFirstName: String!, $signupLastName: String!) {
        signup(email: $signupEmail, password: $signupPassword, first_name: $signupFirstName, last_name: $signupLastName) {
            user_id
            user_email
            user_first_name
            user_last_name
        }
    }
`

function Sign({connectUser} : PropsFromRedux) {
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [secondPass, setSecondPass] = useState("");
    const history = useHistory();

    const [signup, {data}] = useMutation<{signup : UserType}, {signupEmail: string, signupPassword: string, signupFirstName: string, signupLastName: string}>(SignupMutation, {
        variables: {
            signupEmail: email,
            signupPassword: password,
            signupFirstName: firstName,
            signupLastName: lastName
        }
    })

    useEffect(() => {
        if (data?.signup) {
            connectUser(data.signup);
            history.push("/home");
        }
    }, [data, connectUser, history])

    return (
        <div className="sign">
            <h1>INSCRIPTION</h1>
            <div className="sign-input">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Entrer votre email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
            </div>
            <div className="sign-input">
                <label htmlFor="last-name">Nom</label>
                <input type="text" id="last-name" placeholder="Entrer votre nom" onChange={(e) => setLastName(e.target.value)} value={lastName}></input>
            </div>
            <div className="sign-input">
                <label htmlFor="first-name">Prénom</label>
                <input type="text" id="first-name" placeholder="Entrer votre prénom" onChange={(e) => setFirstName(e.target.value)} value={firstName}></input>
            </div>
            <div className="sign-input">
                <label htmlFor="mdp">Mot de passe</label>
                <input type="password" id="mdp" placeholder="Entrer votre mot de passe" onChange={(e) => setPassword(e.target.value)} value={password}></input>
            </div>
            <div className="sign-input">
                <label htmlFor="mdp">Validation du mot de passe</label>
                <input type="password" id="mdp" placeholder="Entrer de nouveau votre mot de passe" onChange={(e) => setSecondPass(e.target.value)} value={secondPass}></input>
            </div>
            <button className="sign-btn-creation" onClick={() => email && lastName && firstName && password && password === secondPass && signup()}>CREER</button>
            <p>
                Déja inscrit ? &nbsp;
                <Link to="/">
                    Se connecter
                </Link>
            </p>
        </div>
    )
}

const mapStateToProps = (state : StateType) => ({
});

const mapDispatchToProps = { connectUser };

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(Sign);