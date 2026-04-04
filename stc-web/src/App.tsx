import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation';
import Footer from './components/footer';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Laboratorio from './pages/Laboratorio';
import Contacto from './pages/Contacto';
import OtrosServicios from './pages/OtrosServicios';

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
