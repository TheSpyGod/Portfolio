import './css/app.css';
import { useEffect } from 'react';

function App() {

    useEffect(() => {
        fetch('/api/test.php')
        .then(res => res.json())
        .then(data => console.log(data));
  }, []);  

    return <h1>WELCOME</h1>;
}

export default App;
