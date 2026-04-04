import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import { Phone, Mail, MapPin, Globe, ChevronsRight } from "lucide-react";
import logoSTC from "../assets/logo.png"; // Asegúrate de que la ruta sea correcta

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaFacebook size={18} />,
      url: "https://www.facebook.com/share/1E3kvKDzwy/?mibextid=wwXIfr",
      label: "Facebook",
    },
    {
      icon: <FaInstagram size={18} />,
      url: "https://www.instagram.com/suelotechcontrol?igsh=cGU4M2FoZXlxdjhy",
      label: "Instagram",
    },
    {
      icon: <FaTiktok size={18} />,
      url: "https://www.tiktok.com/@suelo.tech.control?_r=1&_t=ZS-94bpMH00Dvb",
      label: "TikTok",
    },
    {
      icon: <FaWhatsapp size={18} />,
      url: "https://wa.me/51983157792",
      label: "WhatsApp",
    },
  ];

  const especialidades = [
    "Mecánica de Suelos",
    "Tecnología del Concreto",
    "Topografía y Geodesia",
    "Saneamiento Predial",
  ];

  return (
    // CAMBIO CLAVE: Usamos bg-stc-gray (#3A3A3A) para que combine con el Nav
    <footer className="relative bg-[#3A3A3A] text-white pt-20 pb-10 border-t border-white/10 overflow-hidden selection:bg-[#00B0F0]/30 selection:text-white">
      {/* Sutil brillo cian en el fondo para dar profundidad tecnológica */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#00B0F0]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* COLUMNA 1: LOGO E IDENTIDAD DIGITAL */}
          <div className="md:col-span-5 space-y-8">
            <div className="flex items-center gap-4">
              <img
                src={logoSTC}
                alt="Suelo Tech Control"
                className="h-16 w-auto object-contain"
              />
              <div>
                <h3 className="text-2xl font-black tracking-tighter italic">
                  SUELO TECH <span className="text-[#00B0F0]">CONTROL</span>
                </h3>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] leading-tight">
                  Ingeniería y Construcción S.A.C. 
                </p>
              </div>
              
            </div>
            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              Líderes en geotecnia y control de materiales en Cajamarca.
              Garantizamos precisión técnica y soluciones confiables para cada
              estrato de su proyecto.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, borderColor: "#00B0F0" }}
                  // Usamos bordes y fondos oscuros para el estilo Blueprint
                  className="p-3 bg-[#1A1A1A] rounded-xl text-gray-300 transition-all border border-white/5 hover:text-[#00B0F0] shadow-inner"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* COLUMNA 2: CONTACTO TÉCNICO DIRECTO */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#00B0F0]">
              Canal de Atención
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-[#1A1A1A] rounded-xl text-[#00B0F0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all shadow-lg">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Llámanos o WhatsApp
                  </p>
                  <a
                    href="tel:+51983157792"
                    className="text-base font-black group-hover:text-white transition-colors tracking-tight"
                  >
                    +51 983 157 792
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-[#1A1A1A] rounded-xl text-[#00B0F0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all shadow-lg">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Correo Oficial
                  </p>
                  <a
                    href="mailto:suelotechcontrol@gmail.com"
                    className="text-base font-black group-hover:text-white transition-colors tracking-tight break-all"
                  >
                    suelotechcontrol@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="p-3 bg-[#1A1A1A] rounded-xl text-[#00B0F0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all shadow-lg">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                    Sede Central
                  </p>
                  <span className="text-base font-black text-white tracking-tight">
                    Cajamarca, Perú
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: ESPECIALIDADES DE INGENIERÍA */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] mb-8 text-[#00B0F0]">
              Especialidades
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {especialidades.map((esp, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-[#1A1A1A] rounded-2xl border border-white/5 hover:border-[#0070C0] transition-colors group cursor-default shadow-md"
                >
                  <ChevronsRight
                    size={14}
                    className="text-[#0070C0] group-hover:text-[#00B0F0] transition-colors"
                  />
                  <span className="text-xs font-bold text-gray-300 group-hover:text-white uppercase tracking-wider">
                    {esp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- LÍNEA FINAL DE COPYRIGHT Y CERTIFICACIÓN --- */}
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] font-bold text-gray-400 uppercase tracking-widest shadow-inner bg-[#1A1A1A]/30 p-6 rounded-[30px]">
          <p>
            &copy; {currentYear} SUELO TECH CONTROL. TODOS LOS DERECHOS
            RESERVADOS.
          </p>
          <div className="flex gap-6 items-center">
            <span className="hover:text-white transition-colors cursor-pointer tracking-tight italic">
              Cajamarca - Perú
            </span>
            <div className="h-4 w-px bg-white/10"></div>
            <div className="flex items-center gap-2 text-[#00B0F0]">
              <Globe size={12} />
              <span>Ingeniería con estándares nacionales e internacionales</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
