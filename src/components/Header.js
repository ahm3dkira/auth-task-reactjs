import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <h1 className='logo'> Secrets ;) </h1>
            <nav>
                <ul>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='/secret'> Secret </Link> </li>
                    <li> <Link to='/contact-us'> Contact Us </Link> </li>
                    <li> <Link to='/login'> Login </Link> </li>

                </ul>
            </nav>
        </header>
    );
}