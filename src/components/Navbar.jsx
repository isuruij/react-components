import { Link } from "react-router-dom";
import "../styles/navbar.css"
function Navbar() {
    return ( <div>
        {/* <a href="Mycomponent1" className="navbar-link">component1</a>
        <a href="Mycomponent2" className="navbar-link">component2</a>
        <a href="Mycomponent3" className="navbar-link">component3</a>
        <a href="Mycomponent4" className="navbar-link">component4</a>
        <a href="Mycomponent5" className="navbar-link">component5</a>
        <a href="ShoppingItem" className="navbar-link">ShoppingItem</a> */}

        <Link to="Mycomponent1" className="navbar-link">component1</Link>
        <Link to="Mycomponent2" className="navbar-link">component2</Link>
        <Link to="Mycomponent3" className="navbar-link">component3</Link>
        <Link to="Mycomponent4" className="navbar-link">component4</Link>
        <Link to="Mycomponent5" className="navbar-link">component5</Link>
        <Link to="Mycomponent6" className="navbar-link">component6</Link>
        <Link to="ShoppingItem" className="navbar-link">ShoppingItem</Link>
    </div> );
}

export default Navbar;