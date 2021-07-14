import '../../styles/Login/Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            <button className="login-btn-connexion" onClick={() => Connect(email, password)}>SE CONNECTER</button>
            <p>
                Pas encore inscrit ? &nbsp;
                <Link to="/sign">
                    Créer un compte
                </Link>
            </p>
        </div>
    )
}

function Connect(email, password) {
}

export default Login;