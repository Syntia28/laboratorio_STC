/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        stc: {
          // Extraídos directamente de tu logo image_7.png
          dark: "#1a1a1a", // Fondo base (Casi negro/plomo)
          gray: "#3A3A3A", // Gris del logo
          blue: "#0070C0", // Azul de la "T"
          cyan: "#00B0F0", // Cian del destello
        },
      },
      backgroundImage: {
        // Un degradado tecnológico que va del gris oscuro al azul profundo
        "stc-gradient":
          "linear-gradient(135deg, #1A1A1A 0%, #3A3A3A 50%, #004a80 100%)",
      },
    },
  },
  plugins: [],
};
