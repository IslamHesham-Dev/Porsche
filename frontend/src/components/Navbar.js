import { Link } from 'react-router-dom'
//import logo from '../images/Porsche-Logo.png';
//import logo2 from '../images/Porsche-Logo (1).png';
//import logo3 from '../images/Porsche-Logo (2).png';
import logo4 from '../images/Porsche-Logo (22).png';


const Navbar = () => {

    return (
        <header>
            <div className="container">
                <Link to="/">
                    <img src={logo4} alt="PorscheLogo" style={{ width: '200px', height: '200' }} />

                </Link>
            </div>
        </header>
    )
}

export default Navbar


// Define CSS styles for the logo
/*const logoStyle = {
    width: '50px', // Set the width of the image
    height: 'auto', // Automatically adjust the height to maintain aspect ratio
    position: 'absolute', // Position the image
    top: '10px', // Distance from the top of the container
    left: '10px', // Distance from the left of the container
};*/

//<h1>Porsche</h1>