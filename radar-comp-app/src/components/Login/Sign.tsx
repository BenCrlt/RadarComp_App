import '../../styles/Login/Sign.css'
import {Link, useHistory} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios';

function Sign() {
    const [email, setEmail] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [password, setPassword] = useState("");
    const [secondPass, setSecondPass] = useState("");

    const history = useHistory();

    function CreateUser() {
        axios.get("http://localhost:3000/api/user/check/" + email)
            .then((res) => {
                console.log(res.data);
                if (!res.data.length) {
                    axios.post('http://localhost:3000/api/user/create', {
                        first_name : firstName,
                        last_name : lastName,
                        email : email,
                        password: password
                    })
                    .then((res) => {
                        console.log(res)
                        history.push("/home");
                    })
                } else {
                    console.log('Utilisateur existe déja');
                    alert("Cet utilisateur existe déja ! ");
                }
            })
    }

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
            <button className="sign-btn-creation" onClick={() => CreateUser()}>CREER</button>
            <p>
                Déja inscrit ? &nbsp;
                <Link to="/">
                    Se connecter
                </Link>
            </p>
        </div>
    )
}

export default Sign;