import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li className="nav-link">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-link">
                    <Link to="/featured">Featured Character</Link>
                </li>
                <li className="nav-link">
                    <Link to="/saved">My Characters</Link>
                </li>
                <li className="nav-link">
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}