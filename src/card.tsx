import './css/card.css'

function Card({ title, description, html_url }) {

  return (
    <a className="project-card" href={html_url}>
      <div className="project-info">
        <h2 className="project-title">{title}</h2>
        <p className="project-subtitle">{description}</p>
      </div>
    </a>
  )

}

export default Card;
