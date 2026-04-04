import { motion, type Variants } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import {
  Settings,
  Construction,
  Thermometer,
  Layers,
  Scale,
  Compass,
  Zap,
  Box,
  CheckCircle2,
  HardHat,
  ExternalLink,
} from "lucide-react";

// Importaciones de tus activos
import imgConcreto from "../assets/concreto.jpg";
import imgSuelos from "../assets/suelos.jpg";
import imgEquipos from "../assets/Comprobaciones.png";

interface EquipoItem {
  nombre: string;
  icon: React.ReactNode;
}

export default function OtrosServicios() {
  const phoneNumber = "+51983157792";

  // Función para generar el link de WhatsApp dinámico
  const getWhatsAppLink = (servicio: string) => {
    const message = encodeURIComponent(
      `Hola Suelo Tech Control, deseo solicitar el servicio de alquiler de equipos para: ${servicio}.`,
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const equiposConcreto: EquipoItem[] = [
    { nombre: "Esclerómetro", icon: <Zap size={18} /> },
    { nombre: "Olla Washington", icon: <Settings size={18} /> },
    { nombre: "Cono de Abrams", icon: <Construction size={18} /> },
    { nombre: "Termómetro digital", icon: <Thermometer size={18} /> },
    { nombre: "Moldes de Probetas y Grout", icon: <Box size={18} /> },
    { nombre: "Mezcladora eléctrica", icon: <Settings size={18} /> },
  ];

  const equiposSuelos: EquipoItem[] = [
    { nombre: "Equipo de densidad de campo", icon: <Layers size={18} /> },
    { nombre: "Humedómetro digital - Speedy", icon: <Thermometer size={18} /> },
    { nombre: "Balanza", icon: <Scale size={18} /> },
    { nombre: "Moldes de Proctor y CBR", icon: <Box size={18} /> },
  ];

  const comprobaciones: EquipoItem[] = [
    { nombre: "Moldes cilíndricos de concreto", icon: <Box size={18} /> },
    { nombre: "Cono de Abrams", icon: <Construction size={18} /> },
    { nombre: "Tamices", icon: <Layers size={18} /> },
    { nombre: "Calibración de Arena", icon: <Compass size={18} /> },
  ];

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen pb-24 overflow-x-hidden selection:bg-[#00B0F0]/30">
      {/* --- HEADER --- */}
      <section className="relative py-40 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-[#00B0F0]/30 bg-[#00B0F0]/10 text-[#00B0F0] text-[12px] font-black tracking-[0.5em] mb-10 uppercase shadow-[0_0_15px_rgba(0,176,240,0.2)]"
          >
            <HardHat size={16} /> LOGÍSTICA DE CAMPO
          </motion.div>
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.8] text-slate-900"
          >
            ALQUILER DE <br /> <span className="text-[#00B0F0]">EQUIPOS</span>
          </motion.h1>
          <p className="text-slate-600 font-bold mt-10 tracking-[0.3em] uppercase text-sm max-w-2xl mx-auto leading-relaxed">
            Equipamiento técnico certificado para ensayos de <br /> mecánica de
            suelos y tecnología del concreto.
          </p>
        </div>
      </section>

      {/* --- GRID DE EQUIPOS --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-3 gap-12"
        >
          {/* CATEGORÍA: CONCRETO */}
          <motion.div variants={itemVariants} className="group">
            <div className="relative h-72 mb-8 overflow-hidden rounded-[40px] border border-slate-200 shadow-2xl bg-slate-200">
              <img
                src={imgConcreto}
                alt="Equipos Concreto"
                className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6">
                <div className="bg-[#00B0F0] text-white p-3 rounded-full shadow-xl animate-bounce">
                  <Construction size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[50px] p-10 shadow-2xl">
              <h2 className="text-3xl font-black text-[#0070C0] mb-8 uppercase tracking-tighter italic leading-none border-b border-slate-200 pb-4">
                Ensayos de <br /> Concreto
              </h2>
              <div className="space-y-3 mb-10">
                {equiposConcreto.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-slate-100/70 rounded-2xl border border-slate-200/80 hover:bg-[#0070C0]/10 transition-all group/item"
                  >
                    <div className="text-[#0070C0] group-hover/item:text-[#00B0F0] transition-colors">
                      {eq.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 group-hover/item:text-slate-800 uppercase tracking-widest">
                      {eq.nombre}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink("Ensayos de Concreto")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-[#00B0F0] hover:text-white transition-all shadow-xl group/btn"
              >
                <FaWhatsapp size={20} /> Quiero este servicio
                <ExternalLink
                  size={14}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* CATEGORÍA: SUELOS */}
          <motion.div variants={itemVariants} className="group">
            <div className="relative h-72 mb-8 overflow-hidden rounded-[40px] border border-slate-200 shadow-2xl bg-slate-200">
              <img
                src={imgSuelos}
                alt="Equipos Suelos"
                className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6 text-[#00B0F0]">
                <div className="bg-[#0070C0] text-white p-3 rounded-full shadow-xl animate-bounce">
                  <Layers size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[50px] p-10 shadow-2xl">
              <h2 className="text-3xl font-black text-[#0070C0] mb-8 uppercase tracking-tighter italic leading-none border-b border-slate-200 pb-4">
                Ensayos de <br /> Suelos
              </h2>
              <div className="space-y-3 mb-10">
                {equiposSuelos.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-slate-100/70 rounded-2xl border border-slate-200/80 hover:bg-[#0070C0]/10 transition-all group/item"
                  >
                    <div className="text-[#0070C0] group-hover/item:text-[#00B0F0] transition-colors">
                      {eq.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 group-hover/item:text-slate-800 uppercase tracking-widest">
                      {eq.nombre}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink("Ensayos de Suelos")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-[#00B0F0] hover:text-white transition-all shadow-xl group/btn"
              >
                <FaWhatsapp size={20} /> Quiero este servicio
                <ExternalLink
                  size={14}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>

          {/* CATEGORÍA: COMPROBACIONES */}
          <motion.div variants={itemVariants} className="group">
            <div className="relative h-72 mb-8 overflow-hidden rounded-[40px] border border-slate-200 shadow-2xl bg-slate-200">
              <img
                src={imgEquipos}
                alt="Comprobaciones"
                className="w-full h-full object-contain p-4 transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute top-6 right-6">
                <div className="bg-[#00B0F0] text-white p-3 rounded-full shadow-xl animate-bounce">
                  <CheckCircle2 size={20} />
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-xl border border-slate-200/80 rounded-[50px] p-10 shadow-2xl">
              <h2 className="text-3xl font-black text-[#0070C0] mb-8 uppercase tracking-tighter italic leading-none border-b border-slate-200 pb-4">
                Equipos de <br /> Comprobación
              </h2>
              <div className="space-y-3 mb-10">
                {comprobaciones.map((eq, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-4 bg-slate-100/70 rounded-2xl border border-slate-200/80 hover:bg-[#0070C0]/10 transition-all group/item"
                  >
                    <div className="text-[#0070C0] group-hover/item:text-[#00B0F0] transition-colors">
                      {eq.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-600 group-hover/item:text-slate-800 uppercase tracking-widest">
                      {eq.nombre}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href={getWhatsAppLink("Comprobaciones Técnicas")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-xs hover:bg-[#00B0F0] hover:text-white transition-all shadow-xl group/btn"
              >
                <FaWhatsapp size={20} /> Quiero este servicio
                <ExternalLink
                  size={14}
                  className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* --- BANNER DE SOPORTE --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-[#0070C0] to-[#00B0F0] p-16 rounded-[60px] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-4xl text-white font-black mb-4 uppercase tracking-tighter italic">
              Calibración y Soporte
            </h3>
            <p className="text-white/90 font-medium text-lg max-w-2xl leading-relaxed">
              En <span className="font-black">SUELO TECH CONTROL</span>{" "}
              entregamos todos los equipos con certificado de calibración
              vigente y brindamos inducción técnica para su correcto uso en
              obra.
            </p>
          </div>
          <div className="p-8 bg-white/20 rounded-full border border-white/30 backdrop-blur-md">
            <Zap size={60} className="text-white animate-pulse" />
          </div>
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
        </motion.div>
      </section>
    </div>
  );
}
