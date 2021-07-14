import '../styles/Banner.css'
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/eval">
                        Evaluation
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Banner;