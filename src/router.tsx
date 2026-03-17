import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './projects.tsx';
import Footer from './footer.tsx';
import Header from './header.tsx';

function Router() {

    return (
    <div>
        <Header /> 
        
        <BrowserRouter>
            <Routes>
                <Route path="/Portfolio/projects" element={<Projects />} />
                <Route path="/Portfolio/certifications" element={<Projects />} />
            </Routes>
        
        </BrowserRouter>
        
        <Footer />
    </div>
    );
}

export default Router;
