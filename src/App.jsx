import { useState, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CallToAction from './components/CallToAction';
import ScrollToTopButton from './components/ScrollToTop';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import NotFound from './pages/NotFound';
import Volunteer from './pages/Volunteer';
import Gallery from './pages/Gallery'; 
import Projects from './pages/Projects'; 
import Partnership from './pages/Partnership';
import Programs from './pages/Programs';
import Blog from './pages/Blog';
import OurTeam from './pages/OurTeam';
import Counties from './pages/Counties';
import CountyDetail from './pages/CountyDetail';
import Transparency from './pages/Transparency';
import ComingSoonModal from './components/ComingSoonModal';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handlePreloaderFinish = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onFinish={handlePreloaderFinish} />}
      </AnimatePresence>

      {!isLoading && (
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/about" element={<Layout><About /></Layout>} />
                <Route path="/transparency" element={<Layout><Transparency /></Layout>} />
                <Route path="/impact" element={<Layout><Impact /></Layout>} />
                <Route path="/projects" element={<Layout><Projects /></Layout>} />
                <Route path="/gallery" element={<Layout><Gallery /></Layout>} /> 
                <Route path="/volunteer" element={<Layout><Volunteer /></Layout>} />  
                <Route path="/partnership" element={<Layout><Partnership /></Layout>} />  
                <Route path="/programs" element={<Layout><Programs /></Layout>} />  
                <Route path="/blog" element={<Layout><Blog /></Layout>} />  
                <Route path="/counties" element={<Layout><Counties /></Layout>} />
                <Route path="/counties/:countyId" element={<Layout><CountyDetail /></Layout>} />
                <Route path="/contact" element={<Layout><Contact /></Layout>} />
                <Route path="/donate" element={<Layout><Donate /></Layout>} />
                <Route path="/team" element={<Layout><OurTeam /></Layout>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
            <ScrollToTopButton />
            <CallToAction/>
            <Footer />
            <ComingSoonModal />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;