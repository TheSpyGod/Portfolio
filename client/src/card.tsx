import './css/card.css'
function Card({ title , description , html_url}) {

    return (
        <div className="card">
            <h1>{title}</h1>
            <h4>{description}</h4>
            <h5>{html_url}</h5>
            <img src={title.toLowerCase().trim().concat(".png")}/>
        </div>
    )

}

export default Card;
