import { motion, type Variants } from "framer-motion";
import {
  Microscope,
  Droplets,
  Construction,
  Layers,
  TestTube2,
  Zap,
} from "lucide-react";

interface CategoriaEnsayo {
  titulo: string;
  icon: React.ReactNode;
  imagen: string;
  subcategorias: {
    nombre: string;
    ensayos: string[];
  }[];
}

const categoriasEnsayos: CategoriaEnsayo[] = [
  {
    titulo: "Tecnología del Concreto",
    icon: <Construction size={30} />,
    imagen:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800",
    subcategorias: [
      {
        nombre: "Ensayos de Agregados (Físicos)",
        ensayos: [
          "Muestreo de agregados — MTC E 201",
          "Análisis granulométrico — MTC E 204",
          "Material que pasa malla Nº 200 — MTC E 202",
          "Peso unitario y porcentaje de vacíos — MTC E 203",
          "Gravedad específica   y absorción (agregado fino) — MTC E 205",
          "Peso específico y absorción (agregado grueso) — MTC E 206",
          "Desgaste Los Ángeles — MTC E 207",
          "Partículas fracturadas — MTC E 210",
          "Partículas chatas y alargadas — MTC E 223",
          "Contenido de humedad — MTC E 215",
        ],
      },
      {
        nombre: "Ensayos de Agregados (Químicos)",
        ensayos: [
          "Durabilidad al sulfato — MTC E 209",
          "Equivalente de arena — MTC E 114",
          "Sales solubles — NTP 339.152",
          "Contenido de Sulfatos — NTP 400.042",
          "Contenido de Cloruros — NTP 400.042",
          "Determinación de pH — NTP 339.176",
        ],
      },
      {
        nombre: "Diseño y Control de Concreto",
        ensayos: [
          "Diseño de mezcla — EG-2013",
          "Revenimiento (Slump) — EG-2013",
          "Peso unitario del concreto fresco — EG-2013",
          "Elaboración y curado de probetas — EG-2013",
          "Resistencia a la compresión — EG-2013",
          "Extracción de testigos — EG-2013",
        ],
      },
    ],
  },
  {
    titulo: "ESTUDIO DE MECÁNICA DE SUELOS",
    icon: <Layers size={30} />,
    imagen:
      "https://images.unsplash.com/photo-1596468698188-756f7ef57e2c?q=80&w=800",
    subcategorias: [
      {
        nombre: "Exploración y Muestreo",
        ensayos: [
          "Excavación y muestreo (calicatas / SPT) — MTC E 101",
          "Ensayo SPT — MTC E 101",
          "Densidad de campo in situ — MTC E 117",
          "Ensayo de placa de carga — MTC E 126",
          "Perfiles estratigráficos — ASTM D2488",
          "Muestreo con tubos de aluminio de pared delgada — ASTM D1587",
        ],
      },
      {
        nombre: "Ensayos de Clasificación",
        ensayos: [
          "Contenido de humedad natural — MTC E 108",
          "Análisis granulométrico — MTC E 107",
          "Material que pasa malla Nº 200 — MTC E 137",
          "Límite líquido — MTC E 110",
          "Límite plástico e Índice de plasticidad — MTC E 111",
          "Peso específico de sólidos — MTC E 113",
        ],
      },
      {
        nombre: "Ensayos de Compactación",
        ensayos: [
          "Proctor estándar — MTC E 115",
          "Proctor modificado — MTC E 116",
          "CBR — MTC E 132",
        ],
      },
      {
        nombre: "Ensayos químicos",
        ensayos: [
          "Contenido de Sales Solubles Totales — NTP 339.152",
          "Determinación de pH — NTP 339.176",
          "Contenido de Sulfatos — NTP 339.177",
          "Contenido de Sulfatos — NTP 339.178",
        ],
      },
      {
        nombre: "Ensayos de Resistencia y Deformación",
        ensayos: [
          "Corte directo — MTC E 131",
          "Triaxial (UU, CU, CD) — MTC E 133",
          "Consolidación (Edómetro) — MTC E 120",
          "Permeabilidad — MTC E 119",
        ],
      },
      {
        nombre: "ESTUDIO DE CANTERAS",
        ensayos: [
          "Muestreo — MTC E 201",
          "Granulometría — MTC E 204",
          "|Límites de Atterberg — MTC E 110 / 111",
          "Equivalente de arena — MTC E 114",
          "Proctor — MTC E 115 / 116",
          "CBR — MTC E 132",
          "Desgaste Los Ángeles — MTC E 207",
          "Durabilidad al sulfato — MTC E 209",
          "Partículas fracturadas — MTC E 210",
          "Peso unitario — MTC E 203",
        ],
      },
    ],
  },
  {
    titulo: "ENSAYOS EN LABAÑILERIA",
    icon: <TestTube2 size={30} />,
    imagen:
      "https://images.unsplash.com/photo-1590486803833-ffc6f71d808b?q=80&w=800",
    subcategorias: [
      {
        nombre: "ENSAYOS EN ALBAÑILERÍA",
        ensayos: [
          "Formas Refractarias",
          "Esfuerzo a compresión de ladrillo y formas refractarias — NTP 331.021",
          "Esfuerzo a compresión de prismas — NTP 331.021",
          "Construcción de prismas de albañilería — NTP 339.605",
          "Refrentado de prismas de albañilería — NTP 339.635",
        ],
      },
      {
        nombre: "Albañilería de Concreto",
        ensayos: [
          "Esfuerzo a compresión — NTP 399.604",
          "Refrentado de unidades de albañilería — NTP 399.604",
          "Medición dimensional — NTP 399.604",
          "Absorción — NTP 399.604",
        ],
      },
      {
        nombre: "Albañilería de Arcilla",
        ensayos: [
          "Esfuerzo a compresión — NTP 399.613",
          "Porcentaje de vacíos — NTP 399.613",
          "Refrentado con yeso — NTP 399.613",
          "Absorción — NTP 399.613",
          "Alabeo — NTP 399.613",
          "Succión — NTP 399.613",
          "Variación dimensional — NTP 331.017",
          "Eflorescencia (par) — NTP 399.613",
        ],
      },
    ],
  },
  {
    titulo: "VARIOS ENSAYO",
    icon: <Droplets size={30} />,
    imagen:
      "https://images.unsplash.com/photo-1569317002804-ab77bcf1bce4?q=80&w=800",
    subcategorias: [
      {
        nombre: "Concreto",
        ensayos: [
          "Toma de muestras de concreto fresco — MTC E 701",
          "Elaboración y curado de especímenes en el laboratorio — MTC E 702",
          "Temperatura de mezclas de concreto — MTC E 724",
          "Asentamiento (Slump) — MTC E 705",
          "Contenido de aire (Método de presión) — MTC E 706",
          "Esfuerzo a compresión (Testigos cilíndricos) — MTC E 704",
        ],
      },
      {
        nombre: "Mortero",
        ensayos: [
          "Fabricación y toma de muestras — ASTM C305",
          "Esfuerzo a compresión — ASTM C109",
        ],
      },
      {
        nombre: "Evaluación Estructural",
        ensayos: [
          "Esclerometría (Número de rebote) — MTC E 725",
          "Extracción de núcleos con diamantina (Toma de núcleos) — MTC E 707",
          "Medida de la longitud de núcleos de concreto — MTC E 712",
          "Ensayo de carbonatación (fenolftaleína)",
          "Cloruros solubles en concreto endurecido (Concentración de ión cloruro) — MTC E 720",
        ],
      },
      {
        nombre: "Suelo - Cemento",
        ensayos: ["•	Esfuerzo a compresión ASTM D1633"],
      },
      {
        nombre: "Otros Ensayos de Concreto (Según MTC)",
        ensayos: [
          "Refrentado de cilindros de concreto (Capping) — MTC E 703",
          "Ensayo de tracción indirecta de cilindros — MTC E 708",
          "Resistencia a la flexión (Viga con cargas a los tercios) — MTC E 709",
          "Exudación del concreto — MTC E 713",
          "Determinación del valor pH — MTC E 718",
        ],
      },
      {
        nombre: "Rocas",
        ensayos: [
          "Compresión simple — ASTM D2938",
          "Carga Puntual — ASTM D5731",
          "Abrasión — ASTM C535",
          "Propiedades físicas (Humedad, Densidad, Absorción, Porosidad) — ASTM C97",
        ],
      },
      {
        nombre: "Agua",
        ensayos: [
          "Sólidos en suspensión ASTM C1603",
          "Materia Orgánica NTP 339.072",
          "Álcalis — ASTM C114",
          "Contenido de Sulfatos — NTP 339.074",
          "Contenido de Cloruros — NTP 339.075",
          "Determinación de pH — NTP 339.073",
        ],
      },
      {
        nombre: "Pavimentos",
        ensayos: [
          "Análisis granulométrico — ASTM D5444",
          "Lavado Asfáltico — ASTM D2172",
          "Medida De La deflexión De Un Pavimento Flexible Empleando La Viga Benkelman MTC E 1002",
        ],
      },
    ],
  },
];

export default function Laboratorio() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen pb-24 overflow-x-hidden selection:bg-[#00B0F0]/30 selection:text-slate-800">
      {/* --- CABECERA (HERO) --- */}
      <section className="relative py-32 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-[#00B0F0]/10 border border-[#00B0F0]/30 px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.4em] text-[#00B0F0] mb-8 uppercase shadow-inner"
          >
            <Zap size={14} />
            Catálogo Técnico de Ensayos
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-9xl font-black mb-6 tracking-tighter italic uppercase bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-500"
          >
            ENS<span className="text-[#00B0F0]">AYOS</span>
          </motion.h1>
          <div className="h-2 w-28 bg-[#0070C0] mx-auto rounded-full shadow-[0_0_20px_#00B0F0]/50"></div>
        </div>
      </section>

      {/* --- GRID DE ENSAYOS (ZIG-ZAG) --- */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-24 min-h-[500px]"
        >
          {categoriasEnsayos.map((cat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col gap-10 lg:gap-16 items-start ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* BLOQUE FOTO */}
              <div className="lg:w-2/5 group w-full relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[50px] border border-slate-200 shadow-2xl transition-all duration-700 hover:border-[#00B0F0]/50 group bg-white">
                  <img
                    src={cat.imagen}
                    alt={cat.titulo}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-100/50 to-white/90 group-hover:opacity-60 transition-opacity duration-700"></div>

                  <div className="absolute bottom-6 left-8 right-8 z-10 flex items-center gap-4">
                    <div className="p-3 bg-white/80 rounded-2xl text-[#00B0F0] backdrop-blur-sm border border-slate-200/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-inner">
                      {cat.icon}
                    </div>
                    <div>
                      <span className="text-5xl font-black opacity-10 absolute top-4 left-6 group-hover:text-[#00B0F0]/20 transition-colors">
                        0{index + 1}
                      </span>
                      <h2 className="text-3xl font-black uppercase tracking-tighter leading-none text-slate-900">
                        {cat.titulo}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>

              {/* BLOQUE DE LISTA TÉCNICA */}
              <div className="lg:w-3/5 space-y-8 w-full">
                <div className="space-y-6">
                  {cat.subcategorias.map((sub, idx) => (
                    <div
                      key={idx}
                      className="bg-white border border-slate-200/80 p-7 rounded-3xl hover:bg-slate-50 transition-colors shadow-lg"
                    >
                      <h3 className="text-[#0070C0] font-black text-xs uppercase tracking-[0.2em] mb-6 flex items-center gap-2 border-b border-[#00B0F0]/50 pb-2 w-fit">
                        <Zap size={16} className="text-[#00B0F0]" />{" "}
                        {sub.nombre}
                      </h3>
                      <ul className="space-y-3">
                        {sub.ensayos.map((ensayo, eIdx) => (
                          <li
                            key={eIdx}
                            className="flex items-start gap-3 group/item"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 mt-1.5 flex-shrink-0 group-hover/item:bg-[#00B0F0] transition-colors" />
                            <p className="text-xs text-slate-600 group-hover/item:text-slate-800 transition-colors leading-relaxed">
                              {ensayo}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- BANNER INFORMATIVO FINAL --- */}
      <section className="max-w-7xl mx-auto px-6 mb-10 mt-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-white via-slate-50 to-white border border-slate-200/80 p-12 rounded-[60px] text-center shadow-xl border-b-8 border-[#00B0F0]"
        >
          <div className="flex justify-center gap-10 mb-8 opacity-40">
            <Microscope size={32} className="text-[#0070C0]" />
            <Construction size={32} className="text-[#0070C0]" />
            <Droplets size={32} className="text-[#0070C0]" />
          </div>
          <p className="text-slate-800 text-xl md:text-2xl font-black italic tracking-tighter leading-tight uppercase max-w-4xl mx-auto">
            “Todos nuestros ensayos se rigen bajo las normativas{" "}
            <span className="text-[#00B0F0]">MTC, ASTM, NTP y EG-2013</span>,
            garantizando precisión técnica y soluciones confiables para cada
            proyecto.”
          </p>
        </motion.div>
      </section>
    </div>
  );
}
