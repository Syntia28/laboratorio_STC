import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Zap,
  CheckCircle2,
  ShieldCheck,
  Target,
  Lightbulb,
  UserCheck,
  Eye,
  Clock,
  Microscope,
  HardHat,
  Map,
  FileText,
  Settings,
  Layers,
  MessageSquare,
  Lock,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

export default function Inicio() {
  // Animaciones
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const valores = [
    { name: "Calidad", icon: <ShieldCheck size={32} /> },
    { name: "Precisión", icon: <Target size={32} /> },
    { name: "Seguridad", icon: <HardHat size={32} /> },
    { name: "Innovación", icon: <Lightbulb size={32} /> },
    { name: "Responsabilidad", icon: <UserCheck size={32} /> },
    { name: "Transparencia", icon: <Eye size={32} /> },
    { name: "Confidencialidad", icon: <Lock size={32} /> },
    { name: "Puntualidad", icon: <Clock size={32} /> },
  ];

  const servicios = [
    {
      title: "LABORATORIO DE MECÁNICA DE SUELOS",
      icon: <Microscope size={28} />,
      to: "/servicios#servicio-1",
    },
    {
      title: "LABORATORIO DE TECNOLOGÍA DEL CONCRETO",
      icon: <Layers size={28} />,
      to: "/servicios#servicio-3",
    },
    {
      title: "SUPERVISIÓN DE OBRAS",
      icon: <HardHat size={28} />,
      to: "/servicios#servicio-2",
    },
    {
      title: "LEVANTAMIENTOS TOPOGRÁFICOS",
      icon: <Map size={28} />,
      to: "/servicios#servicio-4",
    },
    {
      title: "REGULARIZACIÓN CATASTRAL DE PREDIOS",
      icon: <FileText size={28} />,
      to: "/servicios#servicio-5",
    },
    {
      title: "ELABORACIÓN Y EJECUCIÓN DE EXPEDIENTES TÉCNICOS",
      icon: <FileText size={28} />,
      to: "/servicios#servicio-6",
    },
    {
      title: "ALQUILER DE EQUIPOS",
      icon: <Settings size={28} />,
      to: "/servicios#servicio-7",
    },
    {
      title: "OTROS SERVICIOS",
      icon: <Zap size={28} />,
      to: "/otros-servicios",
    },
  ];

  const beneficios = [
    "Resultados precisos y confiables",
    "Entrega puntual",
    "Validez técnica reconocida",
    "Atención personalizada",
    "Compromiso con la calidad y seguridad",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-slate-100 text-slate-800">
      <ParticlesBackground />

      {/* --- SECCIÓN 1: HERO --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-12 gap-16 items-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 space-y-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-slate-200/80 text-slate-700 px-5 py-2 rounded-full font-bold text-xs tracking-widest shadow-lg">
            <Briefcase size={16} className="text-[#0070C0]" />
            SOLUCIONES DE INGENIERÍA
          </div>

          <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter">
            <span className="text-[#0070C0]">¡Bienvenidos!</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500">
              Suelo Tech Control
            </span>
            <br />
            
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed border-l-4 border-[#00B0F0] pl-6 bg-white/50 py-4 rounded-r-2xl backdrop-blur-sm">
            <strong className="text-slate-900">
              CONTROL TÉCNICO, RESULTADOS CONFIABLES.
            </strong>
            <br />
            Brindamos confianza y resultados que marcan la diferencia en cada
            proyecto.
          </p>

          <div className="flex flex-wrap gap-5">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 bg-[#0070C0] text-white px-10 py-4 rounded-full font-black text-lg shadow-lg shadow-[#0070C0]/30 hover:bg-[#00B0F0] transition-all"
            >
              Nuestros Servicios <ArrowRight size={20} />
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-5 hidden md:flex justify-end"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0070C0] to-[#00B0F0] rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white/60 backdrop-blur-md p-4 rounded-[40px] border border-slate-200/80 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1541888941-2c02d2970c51?q=80&w=1000&auto=format&fit=crop"
                className="rounded-[30px] w-full max-w-sm object-cover shadow-2xl"
                alt="Ingeniería Civil"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- SECCIÓN 2: VALORES --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 bg-white/80 backdrop-blur-sm border-y border-slate-200/80 rounded-3xl">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-800">
            NUESTROS <span className="text-[#0070C0]">VALORES</span>
          </h3>
          <div className="h-1.5 w-32 bg-[#0070C0] mx-auto rounded-full shadow-[0_0_10px_#0070C0]"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, borderColor: "#00B0F0" }}
              className="bg-white/70 backdrop-blur-sm border border-slate-200 p-8 rounded-3xl text-center flex flex-col items-center gap-4 transition-all group"
            >
              <div className="p-4 bg-slate-100 rounded-2xl shadow-inner text-slate-700 group-hover:text-[#0070C0] transition-colors">
                {v.icon}
              </div>
              <span className="font-bold tracking-wider text-sm uppercase text-slate-700">
                {v.name}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECCIÓN 3: BENEFICIOS --- */}
      <section className="relative z-10 py-24 my-20 bg-slate-200/60 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight leading-none text-slate-800">
              ¿POR QUÉ ELEGIR <br />{" "}
              <span className="text-[#0070C0]">SUELO TECH CONTROL?</span>
            </h3>
            <p className="text-slate-600 text-xl mb-8 leading-relaxed">
              Ofrecemos más que servicios: brindamos confianza y resultados que
              marcan la diferencia. Garantizamos la estabilidad de sus proyectos
              desde la base.
            </p>
            <div className="flex items-center gap-4 text-[#0070C0] font-bold">
              <MessageSquare size={24} />
              <span>Atención Personalizada en Cajamarca</span>
            </div>
          </motion.div>

          <div className="grid gap-4">
            {beneficios.map((b, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-center gap-5 bg-white/80 p-5 rounded-2xl border border-slate-200 hover:border-[#00B0F0] transition-all shadow-lg backdrop-blur-sm"
              >
                <CheckCircle2 className="text-[#00B0F0]" size={28} />
                <span className="font-bold text-lg text-slate-700">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN 4: SERVICIOS --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 mb-20">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 uppercase bg-gradient-to-r from-slate-800 to-slate-500 bg-clip-text text-transparent">
            Portafolio de Servicios
          </h3>
          <p className="text-slate-500 font-medium tracking-[0.3em]">
            EXCELENCIA TÉCNICA
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4">
          {servicios.map((s, i) => (
            <Link to={s.to} key={i}>
              <motion.div
                {...fadeIn}
                transition={{ delay: i * 0.05 }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "rgba(0, 176, 240, 0.1)",
                }}
                className="group cursor-pointer bg-white/50 p-8 rounded-3xl border border-slate-200/80 hover:border-[#00B0F0] transition-all flex flex-col items-center text-center gap-6 h-full justify-center backdrop-blur-sm"
              >
                <div className="text-[#0070C0] p-4 bg-slate-100 rounded-full group-hover:bg-[#00B0F0] group-hover:text-white transition-all duration-500 shadow-xl">
                  {s.icon}
                </div>
                <h4 className="font-black text-xs uppercase tracking-widest leading-snug h-12 flex items-center text-slate-800">
                  {s.title}
                </h4>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
