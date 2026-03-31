import './css/header.css';
function Header() {

    return (
            <nav>
              <a className="nav-logo" href="#">G. Korczyk</a>
              <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="projects" className="active">Projects</a></li>
                <li><a href="#">Certifications</a></li>
              </ul>
            </nav>
  );
}

export default Header;
