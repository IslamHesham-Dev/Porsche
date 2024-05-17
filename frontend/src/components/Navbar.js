import { Link } from 'react-router-dom'
import logo1 from '../images/Porsche-Logo (22).png';


const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={logo1} alt="PorscheLogo" style={{ width: '200px', height: '200' }} />

                </Link>
            </div>
        </header>
    )
}

export default Navbar