import './css/header.css';
function Header() {

    return (
        <header>
            <nav>
                <ol className="list">
                
                    <li className="listitem"><a href="./">Home</a></li>
                    <li className="listitem"><a href="/Portfolio/projects">Projects</a></li>
                    <li><a href="#">Certifications</a></li>

                </ol>
            </nav>
        </header>
  );
}

export default Header;
