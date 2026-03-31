import './css/projects.css';
import Contributions from './contributions.tsx';
import CardBuilder from './cardbuilder.tsx';
import { useState, useEffect } from 'react';

function trimRepo(repo) {
    return {
        id: repo.id,
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        fork: repo.fork,
  };
}

function Projects() {

    const [data, setData ] = useState([]);

    useEffect(() => {

        if (data.length <= 0 && document.cookie.length < 1) {
        
        fetch('https://api.github.com/users/TheSpyGod/repos')
        .then(res => res.json())
        .then(data => {
            setData(data)
            document.cookie = JSON.stringify(data.map(trimRepo));
            console.log(data.map(trimRepo));
        });

        } else {
            setData(JSON.parse(document.cookie));
        }
  }, []);  

    return (
    <section>
        <Contributions />
        <CardBuilder data={data.map(trimRepo)} />
    </section>
    );
  
}

export default Projects;
