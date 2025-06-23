import './Header.css'
import{Link} from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <header>
                <nav>
                    <Link to="/home">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/courses">Courses</Link>
                    <Link to="/contact">Contact</Link>
                    <button><Link to="/admission">Apply Now</Link></button>
                </nav>
            </header>
        </div>
    )
}
export default Header;