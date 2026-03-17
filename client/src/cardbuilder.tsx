import Card from './card.tsx';
function CardBuilder({ data }) {
    
    if (!data || !Array.isArray(data)) return <p> Ładowanie danych...</p>

    return (
    <ul>
        {data
            .filter(item => item.description?.length > 1 && item.fork === false && item.name != "Portfolio" && item.name != "AGame" && item.name != "AdventureGame" && item.name != "comfortProjects" )
            .map(item => (
            <li key={item.id}> 
                <Card title={item.name} description={item.description} html_url={item.url}/>
            </li>
        ))}
    </ul>
    );

}

export default CardBuilder;
