import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import logo1 from '../images/Porsche-Logo (22).png';


const Navbar = () => {
    const { logout } = useLogout()

    const handleClick = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={logo1} alt="PorscheLogo" style={{ width: '200px', height: '200' }} />
                </Link>
                <nav>
                    <div> <button onClick={handleClick}>Log out</button></div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                        <Link to="/shop">Shop</Link>
                        <Link to="/">Admin Panel</Link>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar