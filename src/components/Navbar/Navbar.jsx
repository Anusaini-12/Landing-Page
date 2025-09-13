import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
        <div className="nav-logo">Evolution</div>
        <ul className="nav-links">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className="nav-contact">Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;
