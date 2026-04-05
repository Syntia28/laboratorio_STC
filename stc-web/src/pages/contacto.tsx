import { motion, type Variants } from "framer-motion";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from "react-icons/fa";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Zap,
} from "lucide-react";

export default function Contacto() {
  const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const redes = [
    {
      name: "Instagram",
      user: "@suelotechcontrol",
      url: "https://www.instagram.com/suelotechcontrol?igsh=cGU4M2FoZXlxdjhy",
      icon: <FaInstagram size={24} />,
      color:
        "hover:bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888]",
    },
    {
      name: "Facebook",
      user: "SUELO TECH CONTROL",
      url: "https://www.facebook.com/share/1E3kvKDzwy/?mibextid=wwXIfr",
      icon: <FaFacebook size={24} />,
      color: "hover:bg-[#1877F2]",
    },
    {
      name: "WhatsApp",
      user: "+51 983 157 792",
      url: "https://wa.me/51983157792",
      icon: <FaWhatsapp size={24} />,
      color: "hover:bg-[#25D366]",
    },
    {
      name: "TikTok",
      user: "@suelo.tech.control",
      url: "https://www.tiktok.com/@suelo.tech.control?_r=1&_t=ZS-94bpMH00Dvb",
      icon: <FaTiktok size={24} />,
      color: "hover:bg-slate-800",
    },
  ];

  return (
    <div className="bg-slate-100 text-slate-800 min-h-screen pb-20 overflow-x-hidden selection:bg-[#00B0F0]/30">
      {/* --- CABECERA --- */}
      <section className="relative py-32 bg-white border-b border-slate-200 overflow-hidden text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto px-6"
        >
          <div className="inline-flex items-center gap-2 bg-[#00B0F0]/10 border border-[#00B0F0]/30 px-5 py-2 rounded-full text-[11px] font-bold tracking-[0.4em] text-[#00B0F0] mb-8 uppercase">
            <Zap size={14} /> Atención Inmediata
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter italic uppercase mb-6 text-slate-900">
            CONTAC<span className="text-[#00B0F0]">TO</span>
          </h1>
          <div className="h-1.5 w-24 bg-[#0070C0] mx-auto rounded-full shadow-[0_0_15px_#00B0F0]/50"></div>
        </motion.div>
      </section>

      {/* --- CUERPO DE CONTACTO --- */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* COLUMNA IZQUIERDA: INFO Y REDES */}
          <div className="lg:col-span-5 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white border border-slate-200/80 p-10 rounded-[40px] shadow-2xl"
            >
              <h2 className="text-3xl font-black mb-8 uppercase tracking-tighter italic border-l-4 border-[#00B0F0] pl-6 text-slate-900">
                Información de <br />{" "}
                <span className="text-[#00B0F0]">Contacto</span>
              </h2>

              <div className="space-y-8">
                <a
                  href="tel:+51983157792"
                  className="flex items-center gap-6 group"
                >
                  <div className="p-4 bg-slate-100 rounded-2xl text-[#0070C0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all shadow-inner">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Llámanos
                    </p>
                    <p className="text-lg font-black text-slate-800 group-hover:text-[#00B0F0] transition-colors tracking-tight">
                      +51 983 157 792
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:suelotechcontrol@gmail.com"
                  className="flex items-center gap-6 group"
                >
                  <div className="p-4 bg-slate-100 rounded-2xl text-[#0070C0] group-hover:bg-[#00B0F0] group-hover:text-white transition-all shadow-inner">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                      Escríbenos
                    </p>
                    <p className="text-lg font-black text-slate-800 group-hover:text-[#00B0F0] transition-colors tracking-tight break-all">
                      suelotechcontrol@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>

            {/* REDES SOCIALES */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="grid grid-cols-2 gap-4"
            >
              {redes.map((red, i) => (
                <a
                  key={i}
                  href={red.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-6 bg-white border border-slate-200/80 rounded-3xl flex flex-col items-center text-center gap-3 transition-all duration-300 text-[#0070C0] hover:text-white ${red.color} group`}
                >
                  <div className="group-hover:scale-110 transition-transform">
                    {red.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-tighter">
                      {red.name}
                    </p>
                  </div>
                </a>
              ))}
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: ASESORÍA Y HORARIO */}
          <div className="lg:col-span-7 space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-gradient-to-br from-[#0070C0] to-[#00B0F0] p-12 rounded-[50px] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Send size={120} className="text-white"/>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl text-white font-black mb-6 uppercase tracking-tighter italic leading-none">
                  ¿Necesitas un <br /> estudio técnico?
                </h2>
                <p className="text-white/90 text-lg mb-10 max-w-md font-medium">
                  Solicita tu cotización sin compromiso. Nuestro equipo de
                  ingenieros en Cajamarca está listo para brindarte resultados
                  precisos.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    "Asesoría Técnica",
                    "Respuesta en < 24h",
                    "Cotización Gratis",
                    "Alcance Regional",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 text-white"
                    >
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="text-xs font-bold uppercase tracking-widest">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-white border border-slate-200/80 p-10 rounded-[40px]"
            >
              <h3 className="text-2xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter italic text-slate-900">
                <Clock className="text-[#00B0F0]" /> Horario de Atención
              </h3>
              <div className="grid gap-4">
                {[
                  { dias: "Lunes - Viernes", horas: "8:00 AM - 6:00 PM" },
                  { dias: "Sábados", horas: "8:00 AM - 4:00 PM" },
                  {
                    dias: "Domingos",
                    horas: "Cerrado",
                    color: "text-[#00B0F0]",
                  },
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center p-5 bg-slate-100/70 rounded-2xl border border-slate-200/80 group hover:border-[#0070C0]/50 transition-colors"
                  >
                    <span className="font-bold uppercase text-xs tracking-[0.2em] text-slate-700">
                      {h.dias}
                    </span>
                    <span
                      className={`font-black text-sm ${h.color || "text-slate-500"}`}
                    >
                      {h.horas}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECCIÓN MAPA --- */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-white border border-slate-200/80 p-10 rounded-[50px] overflow-hidden shadow-2xl"
        >
          <h2 className="text-3xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter italic text-slate-900">
            <MapPin className="text-[#00B0F0]" /> Nuestra{" "}
            <span className="text-[#00B0F0]">Ubicación</span>
          </h2>
          <div className="rounded-[30px] overflow-hidden border-2 border-slate-200 shadow-inner h-[450px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.514744795221!2d-78.510617!3d-7.158869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91320473a21820b1%3A0xf6930473a21820b1!2sCajamarca%2C%20Peru!5e0!3m2!1sen!2sus!4v1711234567890!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <p className="mt-6 text-xs text-slate-500 font-bold uppercase tracking-widest text-center">
            Cajamarca, Perú — Sede Central Suelo Tech Control
          </p>
        </motion.div>
      </section>

      {/* --- BOTONES FLOTANTES DE ACCIÓN --- */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[100]">
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="https://wa.me/51983157792"
          target="_blank"
          className="bg-[#25D366] p-4 rounded-full shadow-2xl text-white"
        >
          <FaWhatsapp size={32} />
        </motion.a>
      </div>
    </div>
  );
}
