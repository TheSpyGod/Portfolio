import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './projects.tsx';
import Footer from './footer.tsx';
import Header from './header.tsx';
import Hero from './hero.tsx';

function Router() {

    return (
    <div>
        <Header /> 
      
        <Hero/>

        <BrowserRouter basename="/Portfolio/">
            <Routes>
                <Route path="/projects" element={<Projects />} />
                <Route path="/certifications" element={<Projects />} />
            </Routes>
        
        </BrowserRouter>
        
        <Footer />
    </div>
    );
}

export default Router;
