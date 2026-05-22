import './css/header.css';
function Header() {

  return (
    <nav>
      <ul className="nav-links">
        <li><a href="projects" className="active">Projects</a></li>
        <li><a href="certifications">Certifications</a></li>
      </ul>
    </nav>
  );
}

export default Header;
