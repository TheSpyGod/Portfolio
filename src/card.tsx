import './css/card.css'
function Card({ title , description , html_url }) {

    return (
        <a className="project-card" href={html_url}>
          <div className="project-info">
            <div>
              <h2 className="project-title">{title}</h2>
              <p className="project-subtitle">{description}</p>
              <div className="project-stack">
                <span className="stack-pill">C++</span>
                <span className="stack-pill">Raylib</span>
                <span className="stack-pill">Game Dev</span>
              </div>
            </div>
          </div>
          <div className="project-visual">
            <div className="project-visual-placeholder"><img src={title.toLowerCase().trim().concat(".png")}/></div>
            <span className="project-arrow">→</span>
          </div>
        </a>
    )

}

export default Card;
