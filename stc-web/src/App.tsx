import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Inicio from './pages/inicio';
import Nosotros from './pages/nosotros';
import Servicios from './pages/servicios';
import Laboratorio from './pages/laboratorio';
import Contacto from './pages/contacto';
import OtrosServicios from './pages/otrosServicios';

function App() {

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-stc-dark text-white font-sans">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/laboratorio" element={<Laboratorio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/otros-servicios" element={<OtrosServicios />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
