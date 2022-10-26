import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/loved">Loved Characters</Link>
                </li>
                <li>
                    <Link to="/hated">Hated Characters</Link>
                </li>
            </ul>
        </nav>
    )
}