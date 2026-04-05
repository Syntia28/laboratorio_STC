import { motion, type Variants } from "framer-motion";
import {
  HardHat,
  Layers,
  FileText,
  Settings,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  Zap,
  Drill,
  Compass,
  Landmark,
} from "lucide-react";

// --- CORRECCIÓN DE IMPORTACIONES (TODO EN MINÚSCULAS Y SIN TILDES) ---
import ControlObras from "../assets/services/controlObras.png";
import Expedientes from "../assets/services/expedientes.jpg";
import Pavimentos from "../assets/services/pavimentos.jpg";
import Saneamiento from "../assets/services/saneamiento.png"; 
import Suelos from "../assets/services/suelos.jpg";
import Alquiler from "../assets/services/alquiler.png";
import topografia from "../assets/services/topografia.jpg";

interface ServicioProps {
  id: number;
  titulo: string;
  descripcion: string;
  alcance: string[];
  entregables: string[];
  icon: React.ReactNode;
  imagen: string;
}

const serviciosData: ServicioProps[] = [
  {
    id: 1,
    titulo: "Estudios Geotécnicos y Mecánica de Suelos",
    descripcion:
      "Desarrollo de investigaciones geotécnicas mediante exploración directa (calicatas, perforaciones) y ensayos de laboratorio, con el objetivo de determinar las propiedades físicas, mecánicas e hidráulicas del suelo.",
    alcance: [
      "Ejecución de calicatas y/o perforaciones ",
      "Muestreo alterado e inalterado",
      "Ensayos: granulometría, límites de Atterberg, humedad natural, densidad, corte directo, CBR, Proctor",
      "Clasificación de suelos (SUCS / AASHTO)",
      "Determinación de capacidad portante",
      "Análisis de asentamientos",
    ],
    entregables: [
      "Informe geotécnico completo ",
      "Perfil estratigráfico del suelo",
      "Recomendaciones de cimentación",
    ],
    icon: <Drill size={32} />,
    imagen: Suelos,
  },
  {
    id: 2,
    titulo: "Supervisión y Control de Obras Civiles",
    descripcion:
      "Supervisión integral de proyectos de construcción, orientada a garantizar el cumplimiento de especificaciones técnicas, calidad de materiales, procedimientos constructivos y normativa vigente.",
    alcance: [
      "Control de calidad de materiales (suelo, concreto, agregados)",
      "Verificación de procesos constructivos",
      "Control de metrados y valorizaciones",
      "Seguimiento de cronograma de obra",
      "Elaboración de informes técnicos",
    ],
    entregables: [
      "Informes de supervisión periódicos",
      "Reportes de control de calidad",
      "Observaciones técnicas y recomendaciones",
    ],
    icon: <HardHat size={32} />,
    imagen: ControlObras,
  },
  {
    id: 3,
    titulo:
      "Control de Calidad de Concreto, Pavimentos y Materiales de Construcción",
    descripcion:
      "Ejecución de ensayos y control de calidad de materiales utilizados en obras civiles, enfocados en concreto, pavimentos y agregados, con el fin de verificar el cumplimiento de especificaciones técnicas y normativas vigentes.",
    alcance: [
      "Diseño y verificación de mezclas de concreto ",
      "Ensayos de resistencia a la compresión (ASTM C39) ",
      "Muestreo y curado de especímenes de concreto ",
      "Control de calidad en obra (revenimiento – slump, temperatura, etc.) ",
      "Ensayos de compactación (Proctor estándar y modificado) ",
      "Ensayo CBR para subrasante y materiales de afirmado ",
      "Análisis granulométrico de agregados ",
      "Control de calidad en capas de pavimento (subrasante, subbase, base) ",
    ],
    entregables: [
      "Informes de ensayo de laboratorio",
      "Resultados de control de calidad en obra",
      "Certificados de conformidad de materiales",
      "Recomendaciones técnicas para mejora de desempeño",
    ],
    icon: <Layers size={32} />,
    imagen: Pavimentos,
  },
  {
    id: 4,
    titulo:
      "Levantamientos Topográficos, Georreferenciación y Replanteo en obras civiles.",
    descripcion:
      "Ejecución de levantamientos topográficos de alta precisión para la obtención de información planimétrica y altimétrica del terreno, empleando equipos electrónicos y sistemas de posicionamiento global.",
    alcance: [
      "Levantamiento con estación total y GPS diferencial ",
      "Georreferenciación en sistema UTM ",
      "Curvas de nivel y modelado del terreno ",
      "Replanteo y control de obra ",
      "Procesamiento de datos topográficos ",
    ],
    entregables: [
      "Planos topográficos",
      "Coordenadas georreferenciadas",
      "Modelo digital del terreno (MDT)",
    ],
    icon: <Compass size={32} />,
    imagen: topografia,
  },
  {
    id: 5,
    titulo: "Saneamiento Físico-Legal de Predios (Regularización Catastral).",
    descripcion:
      "Gestión integral para la formalización de predios, mediante la adecuación de la información técnica y legal requerida para su inscripción en registros públicos.",
    alcance: [
      "Levantamiento perimétrico del predio",
      "Elaboración de planos de ubicación y localización",
      "Memoria descriptiva",
      "Subdivisión, acumulación o independización de predios",
      "Trámite ante entidades (SUNARP, municipalidades)",
    ],
    entregables: [
      "Plano perimétrico y de ubicación ",
      "Memoria descriptiva |",
      "Expediente técnico para inscripción",
    ],
    icon: <Landmark size={32} />,
    imagen: Saneamiento,
  },
  {
    id: 6,
    titulo: "Formulación y Ejecución de Expedientes Técnicos.",
    descripcion:
      "Elaboración de expedientes técnicos para proyectos de inversión pública y privada, cumpliendo con los lineamientos normativos y criterios de ingeniería.",
    alcance: [
      "Memoria descriptiva",
      "Planos de arquitectura, estructuras e instalaciones",
      "Metrados y análisis de costos unitarios",
      "Presupuesto de obra",
      "Cronograma de ejecución",
      "Especificaciones técnicas",
    ],
    entregables: [
      "Expediente técnico completo",
      "Presupuesto detallado",
      "Planos aprobados para ejecución",
    ],
    icon: <FileText size={32} />,
    imagen: Expedientes,
  },
  {
    id: 7,
    titulo: "Alquiler de Equipos",
    descripcion:
      "Provisión de equipos y maquinaria para actividades de construcción, estudios de campo y control de calidad, garantizando su correcto funcionamiento y disponibilidad.",
    alcance: [
      "Equipos topográficos (estación total, GPS)",
      "Equipos de laboratorio de suelos ",
      "Equipos para ensayos in situ",
    ],
    entregables: [
      "Equipos operativos y calibrados",
      "Soporte técnico durante el alquiler",
      "Certificados de calibración (cuando aplique)",
    ],
    icon: <Settings size={32} />,
    imagen: Alquiler,
  },
];

export default function Servicios() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen pb-24 overflow-x-hidden selection:bg-[#00B0F0]/30">
      <section className="relative py-32 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500"
          >
            NUESTROS <span className="text-[#00B0F0]">SERVICIOS</span>
          </motion.h1>
          <div className="h-1.5 w-24 bg-[#0070C0] mx-auto mt-6 rounded-full shadow-[0_0_20px_#00B0F0]/50"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-28"
        >
          {serviciosData.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              id={`servicio-${servicio.id}`}
              variants={itemVariants}
              className={`flex flex-col gap-10 lg:gap-20 items-center ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="lg:w-2/5 group w-full">
                <div className="relative aspect-square md:aspect-video lg:aspect-square bg-white border border-slate-200 rounded-[60px] overflow-hidden transition-all duration-700 hover:border-[#00B0F0]/50 shadow-2xl">
                  <div className="absolute top-6 left-8 text-8xl font-black text-slate-900/[0.05] z-10">
                    0{servicio.id}
                  </div>
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="p-8 bg-white/80 rounded-[40px] text-[#00B0F0] shadow-2xl backdrop-blur-sm border border-slate-200/50 group-hover:scale-90 transition-transform duration-500">
                      {servicio.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-3/5 space-y-8 w-full">
                <div>
                  <h3 className="text-4xl md:text-5xl font-black text-[#0070C0] mb-4 uppercase tracking-tighter italic leading-none">
                    {servicio.titulo}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed border-l-4 border-[#00B0F0]/50 pl-6 italic">
                    {servicio.descripcion}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white/70 p-7 rounded-3xl border border-slate-200 backdrop-blur-sm">
                    <h4 className="flex items-center gap-2 font-black text-xs tracking-[0.3em] text-slate-800 uppercase mb-6 opacity-80">
                      <Zap size={16} className="text-[#00B0F0]" /> Alcance
                      Técnico
                    </h4>
                    <ul className="space-y-3">
                      {servicio.alcance.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-sm text-slate-600 group/item"
                        >
                          <ChevronRight
                            size={14}
                            className="text-[#0070C0] mt-1 flex-shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-5">
                    <h4 className="flex items-center gap-2 font-black text-xs tracking-[0.3em] text-slate-800 uppercase opacity-80">
                      <ClipboardCheck size={16} className="text-[#00B0F0]" />{" "}
                      Entregables
                    </h4>
                    <div className="grid gap-2">
                      {servicio.entregables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 px-5 py-3 bg-[#00B0F0]/5 border border-[#00B0F0]/20 rounded-2xl"
                        >
                          <CheckCircle2
                            size={16}
                            className="text-[#00B0F0] flex-shrink-0"
                          />
                          <span className="text-[10px] font-black uppercase text-slate-700 tracking-wider">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
