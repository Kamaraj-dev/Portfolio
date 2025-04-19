import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import About from './component/About';
import Contact from './component/Contact';
import Header from './component/Header';
import LandingPage from './component/LandingPage';
import Projects from './component/Projects';
import Skills from './component/Skills';
import AllProject from './component/AllProject';

import Footer from './component/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className='w-full h-full'>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <LandingPage />
                <About />
                <Skills />
                <Projects />
                <Contact />
              </>
            }
          />

          <Route path="/allproject" element={<AllProject />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
