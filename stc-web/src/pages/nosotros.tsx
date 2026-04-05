import { motion, type Variants } from "framer-motion";
import {
  Building2,
  Users,
  Target,
  Rocket,
  ShieldCheck,
  Microscope,
  HardHat,
  Award,
  Briefcase,
  Zap,
  Layers,
} from "lucide-react";

// --- INTERFAZ PARA EL EQUIPO ---
interface MiembroEquipo {
  nombre: string;
  cargo: string;
  icon: React.ReactNode;
}

export default function Nosotros() {
  // CONFIGURACIÓN DE ANIMACIONES
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const equipo: MiembroEquipo[] = [
    {
      nombre: "Miguel Perez Cardenas",
      cargo: "GERENTE GENERAL",
      icon: <Briefcase size={20} />,
    },
    {
      nombre: "Erick Isaí Araujo Mundaca",
      cargo: "GERENTE ADMINISTRATIVO",
      icon: <Building2 size={20} />,
    },
    {
      nombre: "Kevin Osama Herrera Cabrera",
      cargo: "GERENTE DE CALIDAD",
      icon: <ShieldCheck size={20} />,
    },
    {
      nombre: "Fiacro Francisco Quijano Rivera",
      cargo: "SUPERVISOR LABORATORIO CONCRETO",
      icon: <Layers size={20} />,
    },
    {
      nombre: "Javier Mothimer Colina Bernal",
      cargo: "SUPERVISOR LABORATORIO SUELOS Y PAVIMENTOS",
      icon: <HardHat size={20} />,
    },
    {
      nombre: "Jheison Cramer Carrero Mundaca",
      cargo: "SUPERVISOR LABORATORIO GEOLOGIA",
      icon: <Target size={20} />,
    },
    {
      nombre: "Jose Felix Rodriguez Tirado",
      cargo: "Técnico De Laboratorio",
      icon: <Microscope size={20} />,
    },
    {
      nombre: "Hector Goicochea Huaman",
      cargo: "Técnico De Laboratorio",
      icon: <Microscope size={20} />,
    },
    {
      nombre: "Joel Mariano Hurtado",
      cargo: "Asistente de Laboratorio",
      icon: <Microscope size={20} />,
    },
  ];

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen font-sans overflow-x-hidden selection:bg-[#00B0F0]/30 selection:text-slate-800">
      {/* --- SECCIÓN 1: HEADER --- */}
      <section className="relative bg-white py-32 border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#00B0F0]/10 border border-[#00B0F0]/30 px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.4em] text-[#00B0F0] mb-8 uppercase shadow-inner"
          >
            <Zap size={14} />
            Trayectoria y Compromiso Técnico
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter italic uppercase text-slate-900"
          >
            NOSOT<span className="text-[#00B0F0]">ROS</span>
          </motion.h1>
          <div className="h-2 w-28 bg-[#0070C0] mx-auto rounded-full shadow-[0_0_20px_#00B0F0]/50"></div>
        </div>
      </section>

      {/* --- SECCIÓN 2: ADN EMPRESARIAL (QUIÉNES SOMOS) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-none"
            >
              Nuestra <span className="text-[#00B0F0]">Misión</span>
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="space-y-6 text-slate-600 text-lg leading-relaxed"
            >
              <p>
                Somos{" "}
                <span className="text-slate-500  underline decoration-[#0070C0] decoration-2 underline-offset-4">
                  Suelo Tech Control 
                </span>
                , especialistas en ingeniería civil, geotecnia y control de
                materiales en Cajamarca.
              </p>
              <p className="bg-white p-8 rounded-3xl border-l-4 border-[#00B0F0] italic shadow-lg">
                "Nuestra misión es ofrecer{" "}
                <strong className="text-slate-800">
                  soluciones técnicas confiables
                </strong>{" "}
                que garanticen la calidad y seguridad de cada proyecto, buscando
                siempre la satisfacción de nuestros clientes."
              </p>
              <p>
                Aportamos resultados precisos a través de un equipo capacitado
                para responder a las necesidades de proyectos civiles y
                prediales bajo estándares nacionales e internacionales.
              </p>
            </motion.div>
          </motion.div>

          {/* Grid de Valores */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Responsabilidad", icon: <ShieldCheck /> },
              { label: "Transparencia", icon: <Award /> },
              { label: "Puntualidad", icon: <Zap /> },
              { label: "Innovación", icon: <Rocket /> },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, borderColor: "#00B0F0" }}
                className="bg-white border border-slate-200/80 p-8 rounded-[30px] flex flex-col items-center gap-4 text-center transition-all group shadow-xl"
              >
                <div className="text-[#0070C0] group-hover:text-[#00B0F0] transition-colors group-hover:scale-110 duration-500">
                  {v.icon}
                </div>
                <span className="font-bold uppercase text-xs tracking-[0.2em] text-slate-700 group-hover:text-slate-900 transition-colors">
                  {v.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 3: EL EQUIPO --- */}
      <section className="bg-slate-200/70 py-28 border-y border-slate-300/80 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(#0070C0 1px, transparent 1px), linear-gradient(90deg, #0070C0 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="mb-16 border-b border-slate-400/30 pb-10 flex flex-col md:flex-row justify-between items-end gap-6"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter italic uppercase text-slate-900">
                NUESTRO <span className="text-[#00B0F0]">EQUIPO</span>
              </h2>
              <p className="text-[#0070C0] font-mono mt-3 tracking-[0.3em] text-sm uppercase">
                / LIDERAZGO Y EXPERIENCIA TÉCNICA /
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-slate-600 font-medium"
            >
              <Users size={22} className="text-[#00B0F0]" />
              <span>Especialistas dedicados a la excelencia geotécnica</span>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {equipo.map((persona, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                  borderColor: "#00B0F0",
                }}
                className="bg-white p-7 rounded-2xl border border-slate-200/80 hover:border-[#00B0F0]/50 shadow-2xl transition-all duration-300 flex items-start gap-5 group h-full backdrop-blur-sm"
              >
                <div className="p-4 bg-[#0070C0]/10 rounded-xl text-[#0070C0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all duration-500 shadow-inner flex-shrink-0 mt-1">
                  {persona.icon}
                </div>
                <div className="flex flex-col h-full justify-between">
                  <h4 className="font-black text-slate-800 text-base uppercase leading-snug mb-1 group-hover:text-[#00B0F0] transition-colors">
                    {persona.nombre}
                  </h4>
                  <p className="text-[#0070C0] text-[10px] font-bold tracking-[0.2em] uppercase opacity-80 group-hover:opacity-100 group-hover:text-slate-700/90 transition-all">
                    {persona.cargo}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: CTA FINAL --- */}
      <section className="py-24 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0070C0] to-[#00B0F0] p-16 rounded-[60px] shadow-[0_0_60px_rgba(0,176,240,0.4)]"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase tracking-tighter text-white leading-none">
            Impulsa tu obra con <br /> Ingeniería de Precisión
          </h2>
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#0070C0] px-12 py-5 rounded-full font-black uppercase tracking-widest text-lg hover:bg-slate-900 hover:text-white transition-all shadow-xl"
          >
            Solicitar Cotización Ahora
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}
