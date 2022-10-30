import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/featured">Featured Character</Link>
                </li>
                <li>
                    <Link to="/saved">My Characters</Link>
                </li>
            </ul>
        </nav>
    )
}