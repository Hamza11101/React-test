import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
<nav className="navbar">
<h1>React Test</h1>
<Link to="/">Home</Link>
<Link to="/login">Log In</Link>
<Link to="/register">Register</Link>

</nav>       

      );
}
 
export default NavBar;