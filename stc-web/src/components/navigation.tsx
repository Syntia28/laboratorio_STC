import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X, ChevronDown, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoSTC from "../assets/logo.png";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const serviciosSubmenu = [
    { name: "Estudios Geotécnicos", hash: "#servicio-1" },
    { name: "Supervisión de Obras", hash: "#servicio-2" },
    { name: "Control de Calidad de Concreto", hash: "#servicio-3" },
    { name: "Levantamientos Topográficos", hash: "#servicio-4" },
    { name: "Saneamiento Físico-Legal", hash: "#servicio-5" },
    { name: "Expedientes Técnicos", hash: "#servicio-6" },
    { name: "Alquiler de Equipos", hash: "#servicio-7" },
  ];

  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Servicios", path: "/servicios", hasSubmenu: true },
    { name: "Laboratorio", path: "/laboratorio" },
    { name: "Contacto", path: "/contacto" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = isScrolled
    ? "py-2 bg-[#0f172a]/90 backdrop-blur-lg border-b border-white/10 shadow-lg"
    : "py-4 bg-[#0f172a]/90 backdrop-blur-lg border-b border-transparent";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${navClass}`}
    >
      <div className="w-full px-6 md:px-12 flex justify-between items-center">
        {/* --- LOGO --- */}
        <Link to="/">
          <div className="flex items-center gap-4 group cursor-pointer">
            <div className="relative w-12 h-12 bg-white rounded-full p-1 shadow-lg group-hover:shadow-[#00B0F0]/30 transition-shadow">
              <img
                src={logoSTC}
                alt="STC Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-black text-white leading-none tracking-tighter uppercase">
                Suelo Tech <span className="text-[#00B0F0]">Control</span>
              </h1>
              <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">
                Ingeniería y Construcción S.A.C.
              </p>
            </div>
          </div>
        </Link>

        {/* --- MENÚ DESKTOP --- */}
        <div className="hidden lg:flex items-center gap-2">
          {menuItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.hasSubmenu && setIsServicesOpen(true)}
              onMouseLeave={() => item.hasSubmenu && setIsServicesOpen(false)}
            >
              <Link
                to={item.path}
                className={`flex items-center gap-1 px-4 py-2 text-sm font-bold uppercase tracking-wider rounded-full transition-colors ${
                  location.pathname === item.path
                    ? "text-white bg-[#00B0F0]/20"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
                {item.hasSubmenu && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  />
                )}
              </Link>

              {/* --- SUBMENÚ DESPLEGABLE --- */}
              <AnimatePresence>
                {item.hasSubmenu && isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-[#0f172a]/95 border border-white/10 mt-4 py-5 rounded-2xl shadow-2xl backdrop-blur-2xl"
                  >
                    <div className="px-5 mb-3 text-xs font-semibold text-gray-400 tracking-widest uppercase">
                      Nuestras Especialidades
                    </div>
                    {serviciosSubmenu.map((sub, idx) => (
                      <Link
                        key={idx}
                        to={`/servicios${sub.hash}`}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-center gap-4 px-5 py-3 text-sm font-bold text-gray-300 hover:text-[#00B0F0] hover:bg-white/5 transition-all"
                      >
                        <Zap
                          size={14}
                          className="text-[#0070C0]"
                        />
                        {sub.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* --- BOTÓN DE ACCIÓN --- */}
        <Link to="/contacto">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(0, 176, 240, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-3 bg-gradient-to-r from-[#0070C0] to-[#00B0F0] text-white px-6 py-3 rounded-full font-bold text-xs uppercase tracking-wider"
          >
            <Phone size={14} />
            Cotizar Proyecto
          </motion.button>
        </Link>

        {/* --- BOTÓN MÓVIL --- */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white p-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 w-full h-screen bg-[#0f172a]/95 z-[150] lg:hidden p-8 flex flex-col justify-center backdrop-blur-xl"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={36} />
            </button>

            <div className="flex flex-col gap-5 text-center">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-3">
                  <Link
                    to={item.path}
                    onClick={() => {
                      if (!item.hasSubmenu) setIsOpen(false);
                    }}
                    className="text-3xl font-extrabold uppercase tracking-tighter text-white hover:text-[#00B0F0] transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.hasSubmenu && (
                    <div className="grid grid-cols-1 gap-2 pt-2">
                      {serviciosSubmenu.map((sub, idx) => (
                        <Link
                          key={idx}
                          to={`/servicios${sub.hash}`}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-semibold text-gray-400 hover:text-white"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
